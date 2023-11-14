import Express from 'express'
import router from './routes';

const app = Express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://flights-front-jandres373.vercel.app'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
});

app.use(Express.json()); 

app.use(router)

export default app;