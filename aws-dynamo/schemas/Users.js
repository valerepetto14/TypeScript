const dynamoose = require("dynamoose");

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

const User = dynamoose.model('users', userSchema,{
  create: false
})
module.exports = { User: User };