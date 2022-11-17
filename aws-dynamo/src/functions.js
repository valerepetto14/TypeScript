module.exports.resolve = promise => {
    promise
    .then(data => [null, data])
    .catch(error => [error,null])
  }
  
module.exports.handlerError = (status, message) => {
return {
    statusCode: status,
    body: JSON.stringify({ message: message }),
};
};

