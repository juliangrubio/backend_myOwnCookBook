import { Router } from 'express';
import {
  getRecipe,
  getRecipes,
  postRecipe,
  putRecipe,
  deleteRecipe
} from '../controllers/recipes';

const router = Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', postRecipe);
router.put('/:id', putRecipe);
router.delete('/:id', deleteRecipe);

export default router;
