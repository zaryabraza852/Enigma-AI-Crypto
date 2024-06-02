const { connection } = require("../utils/database");

async function   DeleteBot(req, response) {
  try {
    connection.query(
      `UPDATE Users
      SET Users.Active = 0
      WHERE Users.Id = ${req.query.Id};
      
    `,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        } else {
            return response.status(200).json({ message: "deleted" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  DeleteBot,
};
