const dynamoose = require("dynamoose");

export const userSchema = new dynamoose.Schema(
  {
    Id: {
      type: String,
      hashKey: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
      index: {
        name: nameIndex,
        global: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = dynamoose.model("User", userSchema);
