# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## Final Results
Once you deploy the content of this proyect you will have the following infrastructure
![alt text](https://cdkworkshop.com/images/hit-counter.png)
These constructs can be attached to any Lambda function that’s used as an API Gateway backend, and it will count how many requests were issued to each URL path. It will store this in a DynamoDB table.

Also I used another construct library called CDK-DYNAMO-TABLE-VIEWER. This library allow you to check the number of hits that each path received and are stored in the dynamoDb table. 

![alt text](https://cdkworkshop.com/images/table-viewer.png)

You just need to follow the url that appears in the output of your cdk deploy command