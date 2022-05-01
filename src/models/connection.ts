import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://mongo:27017/taskhub';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI)
  .then(() => console.log('Mongo conectado'))
  .catch(() => console.log('Erro na conexao'));

export default connectToDatabase;
