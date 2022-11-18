import dotenv from "dotenv"
dotenv.config()
import * as dynamoose from 'dynamoose';

// const config :object = {
//   aws_table_name: 'Users',
//   aws_local_config: {
//     //Provide details for local configuration
//   },
//   aws_remote_config: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION,
//   }
// };

const ddb = new dynamoose.aws.ddb.DynamoDB({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
dynamoose.aws.ddb.DynamoDB
// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);
