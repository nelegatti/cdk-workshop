const { DynamoDb, Lambda } = require('aws-sdk');

exports.handler = async (event) => {
  console.log('request:', JSON.stringify(event, undefined, 2));

  //create aws sdk clients
  const dynamo = new DynamoDb();
  const lambda = new Lambda();

  //update dynamo entry for paths with hits counter
  await dynamo.updateItem({
    TableName: process.env.HITS_TABLE_NAME,
    Key: { path: { S: event.path } },
    UpdateExpression: 'ADD hits :incr',
    ExpressionAttributeValues: { ':incr': { N: '1' } }
  }).promise();

  //call downstream fuction and capture response
  const resp = await lambda.invoke({
    FunctionName: process.env.DOWNSTREAM_FUNCTION_NAME,
    Payload: JSON.stringify(event)
  }).promise();

  console.log('downstream response:', JSON.stringify(resp, undefined, 2));

  //return response back to upstream caller
  return JSON.parse(resp.Payload);
};