const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || process.env.MONGODB_HOST || 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/shama02?retryWrites=true&w=majority'
};

export default config;
