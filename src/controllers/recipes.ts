import { Request, Response } from 'express';
import { NewRecipeEntry } from '../interfaces/types';
import Recipe from '../models/recipe';

export const getRecipes = async (req: Request, res: Response) => {
  const recetas = await Recipe.findAll();

  res.json({ recetas });
};

export const getRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  const recipe = await Recipe.findByPk(id);

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({
      msg: `No existe una receta con el id ${id}`
    });
  }
};

export const postRecipe = async (req: Request, res: Response) => {
  const data: NewRecipeEntry = req.body;

  try {
    // const existeEmail = await Recipe.findOne({
    //     where: {
    //         email: body.email
    //     }
    // });

    // if (existeEmail) {
    //     return res.status(400).json({
    //         msg: 'Ya existe un usuario con el email ' + body.email
    //     });
    // }

    const recipe = await Recipe.create(data);

    // const recipe = new Recipe(data);
    // await recipe.save();

    res.json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }
};

// export const postRecipe = async (req: Request, res: Response) => {
//     const {body} = req;

//     try {
//       const recipe = new Recipe(body);
//       await recipe.save();

//       res.json(recipe);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         msg: 'Hable con el administrador'
//       });
//     }
//   };

export const putRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).json({
        msg: 'No existe un usuario con el id ' + id
      });
    }

    await recipe.update(body);

    res.json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador'
    });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;

  const recipe = await Recipe.findByPk(id);
  if (!recipe) {
    return res.status(404).json({
      msg: 'No existe un usuario con el id ' + id
    });
  }

  await recipe.update({ state: false });

  //   await recipe.destroy();

  res.json(recipe);
};
