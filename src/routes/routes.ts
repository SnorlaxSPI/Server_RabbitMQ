import { Router } from 'express';
import { ConsumerEvent } from '../controller/consumer.event';

const router = Router();

router.post('/event', (request, response) => {
  return new ConsumerEvent();
})

export { router }