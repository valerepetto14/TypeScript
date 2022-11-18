import * as dynamoose from 'dynamoose';

const userSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
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
  create: false
})
