// Unicode fractions
const U = {
  'deg': '\u00B0',
  '1/4': '\u00BC',
  '1/2': '\u00BD',
  '3/4': '\u00BE'
};

export const DATA = [
  // {
  //   name: 'Cheesy Jalepeño Cornbread ',
  //   serves: 8,
  //   time: '1 hour',
  //   ingredients: [],
  //   directions: []
  // },
  {
    name: 'Fruit Cocktail Cake',
    serves: 9,
    time: '45 minutes',
    ingredients: [
      `${U['1/2']} cup unsalted butter, softened`,
      `${U['1/4']} cup sugar`,
      '1 large egg',
      '1 16oz can fruit cocktail',
      '1 teaspoon baking soda',
      `${U['1/2']} teaspoon salt`,
      `1${U['3/4']} cups flour`,
      `${U['1/2']} cup brown sugar`,
      `${U['1/2']} cup chopped pecans`
    ],
    directions: [
      `Preheat oven to 350${U['deg']}`,
      'Cream butter and sugar',
      'Mix in egg and undrained can of fruit cocktail',
      'Combine baking soda, salt, and flour',
      'Add dry ingredients into the wet mixture',
      'Pour into a greased 8x8 pan',
      'Combine brown sugar and chopped pecans',
      'Spinkle the topping evenly on the batter',
      'Bake for 25-30 minutes'
    ]
  },
  {
    name: 'Tortilla Española',
    serves: 6,
    time: '1 hour',
    ingredients: [
      `1${U['1/2']} cups canola oil`,
      `4 medium gold potatoes, peeled and very thinly sliced`,
      `1 spanish onion, thinly sliced`,
      `6 large eggs`,
      `Salt & pepper, to taste`,
    ],
    directions: [
      'In a 9" nonstick pan, heat the oil over medium heat',
      'Add the potatoes and onions and cook until the potatoes are tender, flipping occasionally, about 10-15 minutes',
      'Meanwhile, beat the eggs and season with salt and pepper',
      'Strain off the oil and put the potatoes and onions in a separate bowl',
      'Keep a little oil in the pan and keep it on low heat',
      'Quickly mix the eggs into the hot potatoes and pour the mixture back into the pan',
      'With a rubber spatula, spread the mixture evenly in the pan',
      'Cook on medium-low heat until the bottom is lightly browned and the middle is slightly set, about 10 minutes',
      'Using a completely flat surface, such as a large cutting board, flip the tortilla and slide it back into the pan',
      'Press the edges down into the pan to make a slightly domed shape',
      'Cook until the bottom is lightly browned and the tortilla is completely set',
      'Cut into 6 wedges, season with salt'
    ]
  }
];
