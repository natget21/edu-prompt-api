import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getManagementToken = async () => {
  const response = await axios.post(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: `${process.env.AUTH0_API_URL}`,
      grant_type: 'client_credentials'
    },
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return response.data.access_token;
};
