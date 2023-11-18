const ErrorHandlerMiddleWare = (err, req, res, next) => {
  const statusCode = res.statusCode;
  statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        message: err.message,
        code: statusCode,
      });
      break;
    case 401:
      res.json({
        message: err.message,
        code: statusCode,
      });
      break;
    case 404:
      res.json({
        message: err.message,
        code: statusCode,
      });
      break;
    case 500:
      res.json({
        message: "Server Error",
        code: statusCode,
        details: err.stack,
        data: {},
        validationErrors: null,
      });
      break;
    default:
      break;
  }
  next();
};

module.exports = ErrorHandlerMiddleWare;
