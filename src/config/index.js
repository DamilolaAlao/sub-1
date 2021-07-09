//export all config
module.exports = {
  Db_Url: process.env.DB_URL,
  Base_Url: process.env.BASE_URL,
  Port: process.env.PORT || 8080,
  Ocp_Apim_Subscription_Key: process.env.Ocp_Apim_Subscription_Key,
  Ecd_subscription_key: process.env.Ecd_subscription_key,
};
