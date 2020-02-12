module.exports = {
  dialect: 'postgres',
  host: '172.25.1.249',
  port: '5432',
  username: 'postgres',
  password: 'docker',
  database: 'scheduling-service-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
