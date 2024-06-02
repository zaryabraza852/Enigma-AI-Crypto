const { connection } = require("../utils/database");

async function   GetAllBots(req, response) {
  try {
    connection.query(
      `SELECT 
      Bot.Id AS Id,
      Users.Id AS UserId,
      Users.Username,
      Bot.Amount,
      Users.CreatedAt AS Createdt,
      Bot.CreatedAt AS CreatedAt
  FROM 
      Users
  LEFT JOIN (
     SELECT 
         UserId, 
         MAX(Id) AS LatestBotId
     FROM 
         Bot
     GROUP BY 
         UserId
  ) AS LatestBot ON Users.Id = LatestBot.UserId
  LEFT JOIN 
      Bot ON LatestBot.LatestBotId = Bot.Id
         AND (Bot.CreatedAt >= CURDATE() - INTERVAL 7 DAY OR Bot.CreatedAt IS NULL) -- Join only rows created in the last 7 days or NULL rows
  WHERE 
      Users.Active = 1
  ORDER BY 
      CASE WHEN Bot.CreatedAt IS NULL THEN 1 ELSE 0 END, Bot.CreatedAt DESC ;
  
  

    `,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        } else {
          return response.status(200).json({ data: res });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  GetAllBots,
};
