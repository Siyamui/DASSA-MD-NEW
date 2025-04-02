// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "DASSA-MD [KILL]>>>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FEZjgzcjFuUFhPTjhrRGlKTGpScVAwK0xmd3QzbXEwTmFLZGIvUmFYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0J3SFNHNWhGdzA5VTV1MWc3dUFIRStSell0eHhabGJpVGx0L0tjSGNnQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTDloSVUyNzliYUdDRDJGeUFlZUg2d05VWVhyRC93YkJhd2d1MXRKTVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDa0N1ZldUOTJKMkxOcE1OdmpzeGNnN3U5cmpVMGFqT1RCSmlYWEdUcDFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCMDhBT0ViNHZCT3pKZ3pXL1NwdEZoT05GaVN6VUZUMEE5alpmMUFzVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZCaWlVSFhrS1NsaGxzMk1YVkpka1l3RDQzQ2NHQjlqVGZGSXpSc0FBaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tpQ281QjZSM3Zmd0w3S0VuaXVKSjNwMkJmTmlGTjVpWEsyNXNGZjdHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2ora1A0UUVFbmdVZlBKNmp2Tm1zcGlPa0RZcmh1aVRaZEJ1OWlxS1Qyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo0SHdkYThydktsc2M1UHhKeDZwZ1B6dE1EeFhjdWhuK3JCcWxKTFRudlZiaVVIVUZadGdicndwTnltWXhBbVNOSmJqUitQenhobDk2MDVTUS80T0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJpUWFFNEpjNzR5Z1NYYzYrSWdJcGppNCtzTGttYUhQNnJzTFhmWW14cFlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYOUY2by0zNVJzR3dtN01rY0lSWVRRIiwicGhvbmVJZCI6IjFkZWUzOTk3LTVhMzItNDFlMS1iZjAwLTlmYTkzYWRjZTZkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMDRic2pGZ25xMEhaQm9pMXYrOWZDSU1HS1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDU5NURyKzBvYTlWQXQwNHVib0NScVVzeXhBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNBS1RENUxUIiwibWUiOnsiaWQiOiI5NDc4OTk1ODIyNTo2OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeX8J2XmPCdl6vwnZen8J2XmPCdl6UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YaTJ1a0ZFSW0xbWI4R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhCTVFPR2tqclpteWtDOEIva1lLcjV4K1Y0bE15Y042aE9DdG9nTHFKM3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InYzd01TRm1uNWdPTklWL1NYeWkwaERjSDBkZ3d3Q0cwdnhxU3l6NzRxNTRQUDVhNEIzSlU0Tk1ObTRYYTRMVEpmVkRwVmlNYnVNOXV0M2kyNFhWbEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEbTJXenZTVWhLVDRPZVhPYkxtbVd3cHh0RVJ0MmUrTU1UTHNCYUt4MVhZMFYvdkVMVGJnZ2FHOU1YNU9pRWwyVWxUbEJuV3RFcnd6djd4YWdGYWJCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg5OTU4MjI1OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllRVEVEaHBJNjJac3BBdkFmNUdDcStjZmxlSlRNbkRlb1RncmFJQzZpZDcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMxNDk3MTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXN6In0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ !== undefined ? process.env.AUTO_STATUS_READ === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "DASSA MD",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94743277981",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
