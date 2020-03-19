// Unicode fractions
const U = {
  '1/4': '\u00BC',
  '1/2': '\u00BD',
  '3/4': '\u00BE'
};

export const DATA = [
  {
    name: 'Patty\'s Fruit Cocktail Cake',
    serves: 9,
    prepTime: '15 min',
    cookTime: '30 min',
    ingredients: [
      `${U['1/2']} cup unsalted butter, softened`,
      `${U['1/4']} cup sugar`,
      `1 large egg`,
      `1 teaspoon baking soda`,
      `${U['1/2']} teaspoon salt`,
      `1${U['3/4']} cup flour`,
      `1 16oz can fruit cocktail`,
      `${U['1/2']} cup brown sugar`,
      `${U['1/2']} cup chopped pecans`
    ]
  }
];
