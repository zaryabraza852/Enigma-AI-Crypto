const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { connection } = require("../utils/database");

function GenerateToken(user) {
  const payload = {
    Email: user.Email,
    Id: user.Id,
    passwordUpdatedAt: user.passwordUpdatedAt,
    Role: !!user.Role,
  };
  const token = jwt.sign(payload, "123456asdfghjkljasjdhgasdyt6rt2376tuasgd",{ expiresIn: "3h" });
  console.log("Generated Token Payload:", payload);
  return token;
}

async function Login(req, response) {
  console.log(req.body.Username,req.body.Password)
  const Username = req.body.Username;
  const Password = crypto
    .createHash("sha256")
    .update(req.body.Password)
    .digest("hex");

  connection.query(
    `
    SELECT Id,Email,Role,passwordUpdatedAt  FROM Users 
    WHERE Username='${Username}' AND Password='${Password}' and Active = true
    `,
    (err, res) => {
      if (err) {
        console.error(err);
        return response.status(500).json({ message: "Internal Server Error" });
      }
      if (res.length === 0) {
        return response.status(401).json({ message: "Invalid credentials" });
      }

      const token = GenerateToken(res[0]);
      return response.status(200).json({
        message: "success",
        email: res[0].Email,
        role: !!res[0].Role, 
        token: token,
      });
    }
  );
}


module.exports = {
  Login,
};
