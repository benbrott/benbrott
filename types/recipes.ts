export type RecipeSection = string[] | { [key: string]: string[] };

export type Recipe = {
  name: string;
  portion: {
    verb: 'serves' | 'makes';
    quantity: number;
    units?: string;
  };
  ingredients: RecipeSection;
  directions: RecipeSection;
};
