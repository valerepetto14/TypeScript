import * as dynamoose from 'dynamoose';
import {Schema, Table} from 'dynamoose';

const userSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
      rangeKey: true,
      index:true
    },
    password: {
      type:String,
      required: true,
    },
    rol: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export const User = dynamoose.model('users', userSchema,{
  create: true
})
