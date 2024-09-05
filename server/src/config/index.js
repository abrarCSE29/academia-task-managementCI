module.exports = {
  app: { port: 5000 },
  cors:
    process.env.NODE_ENV === 'development'
      ? {
          origin: 'http://localhost:3000',
        }
      : {},
};
