import app from './app';
import { logger } from './middleware/logging';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
