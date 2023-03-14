export interface RecipeEntry {
  id: number;
  link: string;
  title: string;
  tags: string[];
}

export type NewRecipeEntry = Omit<RecipeEntry, 'id'>;