import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'testetypeom_2',// nome do banco de dados
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //tomar muito cuidado para não deixar ativado como true em produção, sob risco de perda
        //de dados no banco de dados 
      });

      return dataSource.initialize();
    },
  },
];