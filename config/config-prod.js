module.exports = {
  activeEnv: "PRODUCTION",
  postgres: {
    host: 'dpg-d3okcuqli9vc73c7t2m0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'growable_user',
    password: 'iARz9pp3QwGaTZBZba38bsRufHmQwqN5',
    database: 'growable', // default DB
    ssl: {
      rejectUnauthorized: false, // disables strict SSL certificate validation (useful for self-signed certs)
    },
  },
  awsS3: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  gSheetURL: `https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_ID}/exec`,
};