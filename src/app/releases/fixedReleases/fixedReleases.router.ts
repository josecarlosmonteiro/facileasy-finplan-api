import { Router } from 'express';
import { tokenValidateMiddleware } from '../../../middlewares';

const router = Router();

// Rota autenticada
router.use('/', tokenValidateMiddleware);

export const fixedReleasesRouter = router;