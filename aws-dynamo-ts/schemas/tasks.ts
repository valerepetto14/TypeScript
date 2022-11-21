import * as dynamoose from 'dynamoose';
import {Schema, Table} from 'dynamoose';

const tasksSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      rangeKey: true,
      index:true
    },
    type: {
      type:String,
      required: true,
    },
    owner: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export const Task = dynamoose.model('users', tasksSchema,{
  create: true
})
