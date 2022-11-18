const resolve = async (promise) => {
  try {
    const data = await promise;
    return [null, data];
  } catch {
    return [error, null];
  }
};

const handlerError = (status, message) => {
  return {
    statusCode: status,
    body: JSON.stringify({ message: message }),
  };
};

module.exports = {
  resolve,
  handlerError,
};
