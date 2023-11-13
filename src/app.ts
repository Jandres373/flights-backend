import Express from 'express'
import router from './routes';

const app = Express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Reemplaza '*' con tu dominio permitido en producción
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(Express.json()); 

app.use(router)

export default app;