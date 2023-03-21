import { Router } from 'express';

import recipe from './recipe';

const router = Router();

router.use('/recipes', recipe);

export default router;