import Express from 'express'
import router from './routes';
import cors from 'cors';


const app = Express();

app.use(cors({
  origin: 'https://flights-front-jandres373.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  credentials: true,
}));


app.use(Express.json()); 

app.use(router)

export default app;