// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "DASSA-MD [KILL]>>>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxTeWNMYnlpV0QveUlVbEhzRThXb2xRVHVEY3c3WXZtWVgxVVliSHBYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2FtcmpxSjJHSmh6Mll1N2JXMWVkUUhCQmZOZmxmUjR2VFZoM08reHlIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SlV0enBTd3dqVzRJRXkyTnpBbHRtNDVZWFRLZHNUZHBNWnhta1ArY0dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcy9iM0lScElLMmtxSjFZbW9jZzVnNkJtYVlMNnllQ1cra1BFSDZNL1I4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OTzRyVHlvNDllTmlpUnRvQWFQcWxVcGpIM09mUUJ1NGNxb0hxK2t2SGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFZZTZHZU14ekZlckhNZFE4KzNsQzVmU2psS1NXKzlaay93MjU1V3ZlRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJ4Q1ZlN0dqKzB1ejhKci9aaEYrdEw3WElLQ0crcjNRQkxMblZ5MldYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFRwb29NTXNGV0lHOUxiSXB6Q2thdWJFN3RUMWNtdTVPbVVNczZ3K09rZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOdi9oWjFLSHFuZ1hCWStnTHNibGYvSGY3SUFucHViZFJmb1NkbHIvU1YrZFJ0cFowQ2k4bWpNbmgxazJhenR0ZGVCc0JkYmlVUXYxVmN1cTBtempRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6Ikl2b3pOOW5zYnRpZ1hERnNxSjJDTVpWcnZiM3JWajlBOXArWnpkYXpBeEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkR4LU9mMGNiUnAtT0JzNTZYTnJwdVEiLCJwaG9uZUlkIjoiMGYyZjRmYTktMzc1Yi00Y2Y3LWI2MmMtNmIwODgxZTllNjY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpmN2ovMHJVc2pmSWw4bVc4bWM1K1ZPODhzYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMUp0NUxacE9xVndINmZ0NUFkaVhWMjhJb3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1o0WEpMWU0iLCJtZSI6eyJpZCI6Ijk0NzI1NTk5MjU2OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QiMmqJ/CdkLMg8J2QjOG0h1xuXG4gICAgICDwnZetXG4gICAgICDwnZCIXG4gICAgICDwnZesXG4gICAgICDwnZeiXG4gICAgICDwnZehXG5cbiAgICAgIPCdl5VcbiAgICAgIPCdkIFcbiAgICAgIPCdl5sifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t6Qmo3c0hFS1NodEw4R0dCTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNRc1UrbjMwNkpCNGRTWWtRTmhXZ1hIdUZpc0h5cGlwNkZCNVczRGVEME09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVkMTlpU0JZcFNvRWZVSmllYTVvQXNzZU1ITGlJdG5rNzdWV1ZLY3hhVFcwSWpZbXc2QUh1c3lWVThiejkvc2dsQmZ6dE1aVi9ua2l1QkhaWEg3T0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0VE5GdnFsbThscWpaTWZZa2MyVUdnOTVYeWdnK2hwMy9GZ0FsdTlsTWZ2T3RqenE4ZlV6bDB0WnRhWlZqNHVSTTdPK092TTdjWVU1MzFha2Yxc3JpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI1NTk5MjU2OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWtMRlBwOTlPaVFlSFVtSkVEWVZvRng3aFlyQjhxWXFlaFFlVnR3M2c5RCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzU4OTU1MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHVDAifQ==",
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
