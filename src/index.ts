import express, { Express, Request, Response } from 'express';
import config from './config';

import authRouter from './api/auth';

const app: Express = express();
const router = express.Router();
const port = 3000;

// Middleware acting as a simple logger
router.use((req, _, next) => {
  console.log(`${req.method} ${req.url} ${req.path}`)
  next();
})
app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send(`Example root; .env variable EXAMPLE = ${config.EXAMPLE}`);
});

app.use(authRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
