import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "sicap.db",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))


export default AppDataSource;