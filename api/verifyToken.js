// const jwt = require("jsonwebtoken");

// function verify(req, res, next) {
//   const authHeader = req.headers.token;
//   const token = authHeader.split(" ")[1];
//   if (!token)
//     return res
//       .status(401)
//       .json({ success: false, message: "Access token not found" });
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);

//     req.userId = decoded.userId;
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.status(403).json({ success: false, message: "Invalid token" });
//   }
// }

const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;
