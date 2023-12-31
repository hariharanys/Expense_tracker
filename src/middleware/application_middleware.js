const logRequest = (req, res, next) => {
  console.log(
    `Incoming request: Request Method: ${req.method} : Request Url: ${
      req.url
    } : Request Body: ${JSON.stringify(req.body)} : Response Code: ${
      res.statusCode
    }`
  );
  next();
};

module.exports = logRequest;
