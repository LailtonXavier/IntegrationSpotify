import "dotenv/config";

const { CLIENT_ID, REDIRECT_URI, PORT, CLIENT_SECRET } = process.env;

export const constants = {
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  port: PORT,
  client_secret:CLIENT_SECRET,
};
