import axios from 'axios';
import dotenv from 'dotenv';

import { getManagementToken } from '../utils/authUtils.js';

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const response = await axios.post(
      `${process.env.AUTH0_API_URL}users`,
      {
        email,
        password,
        name,
        connection: 'Username-Password-Authentication'
      },
      {
        headers: {
          Authorization: `Bearer ${await getManagementToken()}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || 'Registration failed' });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
        grant_type: 'password',
        username: email,
        password,
        scope: 'openid profile email'
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || 'Login failed' });
  }
};


export const getUserData = async (req, res) => {
  try {
    const userId = req.user.sub;

    const response = await axios.get(
      `${process.env.AUTH0_API_URL}users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${await getManagementToken()}`,
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get user data' });
  }
};


export const updateUserData = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user.sub;

    const response = await axios.patch(
      `${process.env.AUTH0_API_URL}users/${userId}`,
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${await getManagementToken()}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user' });
  }
};




export const hostedLogin = async (req, res) => {
  const REDIRECT_URI = 'http://localhost:3000';
  const authUrl = `https://${process.env.AUTH0_DOMAIN}/authorize?client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid profile email`;
  res.redirect(authUrl);
}

export const getToken = async (req, res) => {
  const REDIRECT_URI = 'http://localhost:3000';
  var code = req.body.code;

  try {
    const tokenResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      }
    );

    res.json(tokenResponse.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || 'Token exchange failed' });
  }
}

export const logout = async (req, res) => {
  const REDIRECT_URI = 'http://localhost:3000';
  const logoutUrl = `https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${REDIRECT_URI}`;

  res.redirect(logoutUrl);
};
