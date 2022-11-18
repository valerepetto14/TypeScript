import { User } from "../schemas/Users";

export const resolve = async (promise:any) => {
    try {
      const data = await promise;
      return [null, data];
    } catch(error){
      return [error, null];
    }
  };
  
export const handlerError = (status:number, message:string):object => {
    return {
      statusCode: status,
      body: JSON.stringify({ message: message }),
    };
  };

export const verifyIfUserExist = async (username:string):Promise<string> => {
    try {
        const data = await User.query('username').eq(username).exec();
        if (data.length > 0) {
            return 'username already exist';
        }
        return 'username available';
    } catch (error) {
        return JSON.stringify({error})
    }
}