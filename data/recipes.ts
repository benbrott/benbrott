export type RecipeSection = string[] | { [key: string]: string[] };

export type Recipe = {
  name: string;
  serves?: number;
  makes?: number;
  source?: string;
  ingredients: RecipeSection;
  directions: RecipeSection;
};

type RecipeMap = { [key: string]: Recipe };

type RecipeCategory = {
  category: string;
  recipes: RecipeMap;
};

export const CATEGORIES: RecipeCategory[] = [
  {
    category: 'Entrées',
    recipes: {
      'chicken-rice-soup': {
        name: 'Chicken & Wild Rice Stew',
        serves: 8,
        ingredients: [
          '3 tablespoons olive oil',
          '3 pounds boneless, skinless chicken breast',
          'Salt and pepper',
          '4 tablespoons butter',
          '1 large onion, diced',
          '2 carrots, sliced',
          '3 stalks of celery, sliced',
          '6 cloves garlic, minced',
          '3 tablespoons flour',
          '8 cups chicken broth',
          '3 sprigs fresh thyme',
          '1 sprig fresh rosemary, chopped',
          '1½ cups wild rice',
          '1 bunch kale, shredded',
          '1 cup heavy cream'
        ],
        directions: [
          'Heat the oil in a large dutch oven',
          'Dry the chicken breasts and season them with salt and pepper',
          'Cook the chicken until cooked through, about 10 minutes per side, and set aside when done',
          'Meanwhile, prepare the vegetables',
          'Once the chicken has been removed, melt the butter',
          'Sauté the onion, carrots, and celery for about 10 minutes, until the onions are just cooked',
          'Add in the garlic and cook for another couple of minutes',
          'Mix in the flour and cook for another couple of minutes',
          'Slowly whisk in the chicken broth and bring to a boil',
          'Dice the chicken into small chunks',
          'Add in the thyme, rosemary, and rice and simmer, covered, until the rice is almost done',
          'Add in the chicken and kale and continue to cook, covered, until the rice is done',
          'Remove from the heat, mix in the cream, and season as needed'
        ]
      },
      'chicken-tortilla-soup': {
        name: 'Chicken Tortilla Soup',
        serves: 6,
        ingredients: [
          '1 large onion, diced',
          '2 cloves garlic, minced',
          '2 tablespoons canola oil',
          '2 serrano peppers, seeded and diced',
          '14.5-ounce can corn, drained',
          '14.5-ounce can black beans, rinsed',
          '14.5-ounce can fire roasted-tomatoes',
          '16-ounce jar chunky salsa',
          '1 rotisserie chicken, pulled',
          '5 cups chicken broth',
          'Juice and zest from 1 lime',
          '1 cup cilantro, chopped',
          'Tortilla chips'
        ],
        directions: [
          'In a large pot, sauté the onion and garlic in the canola oil until onions are tender',
          'Add in serrano peppers and cook for a couple minutes',
          'Add in corn, beans, tomatoes, salsa, chicken and broth',
          'Bring to a boil and simmer, covered, for 30 minutes',
          'Add in lime juice, zest, and cilantro',
          'Serve over tortilla chips'
        ]
      },
      'crab-cakes': {
        name: 'Crab Cakes',
        serves: 3,
        ingredients: [
          '1 pound lump crab meat',
          '1 small green pepper, finely diced',
          '⅓ cup panko bread crumbs',
          '⅓ cup mayo',
          '1 tablespoon brown mustard',
          '1 large egg, beaten',
          '½ tablespoon worcestershire',
          '2 teaspoons lemon juice',
          '1 teaspoon paprika',
          '¼ teaspoon cayenne pepper',
          'Salt and pepper, to taste'
        ],
        directions: [
          'Mix together all ingredients, except the crab, until well combined',
          'Fold in the crab meat, careful not to break up the crab too much',
          'Form 6 crab cakes using about ⅓ cup each',
          'Lightly coat each cake with extra panko bread crumbs, if desired, to form a crunchy crust',
          'Pan fry the cakes in 2 batches in butter and oil until golden brown, about 6 minutes each side'
        ]
      },
      'cranberry-turkey-burgers': {
        name: 'Cranberry Bog Turkey Burgers',
        makes: 4,
        source: 'Rachael Ray',
        ingredients: [
          '1 pound ground turkey',
          '1 small apple, finely diced',
          '1 small onion, finely diced',
          '1 teaspoon poultry seasoning',
          'Salt and pepper, to taste',
          '1 cup whole-berry cranberry sauce',
          '½ cup mayo',
          '4 english muffins, toasted',
          'Bibb lettuce'
        ],
        directions: [
          'Combine turkey, apple, onion, and seasonings and form into 4 patties',
          'Pan fry the burgers in a cast iron skillet',
          'Combine the cranberry sauce and mayo and mix until well combined',
          'Serve burgers on english muffins, topped with lettuce and cranberry mayo'
        ]
      },
      'fennel-burrata-pasta': {
        name: 'Fennel & Burrata Pasta',
        serves: 4,
        source: 'NYT Cooking',
        ingredients: [
          '¾ cup olive oil',
          '3 cups fennel, thinly sliced (about 1 large bulb, or 2-3 smaller ones)',
          '1 large onion, diced',
          '1 head garlic, thinly sliced',
          '1 teaspoon red pepper flakes',
          '1 pound rotini, or similar pasta',
          '8 ounces burrata',
          'Salt and pepper, to taste'
        ],
        directions: [
          'In a small pot, heat the olive oil over medium-low heat',
          'Add in the fennel, onion, garlic, and red pepper flakes',
          'Cook until the fennel and onions are very tender, about 25 minutes',
          'Cook the pasta, strain, and return to the pot',
          'Mix the oil and vegetable mixture into the pasta, and season with salt and pepper',
          'Serve the pasta in 4 bowls, each topped with 2 ounces of burrata'
        ]
      },
      pierogi: {
        name: 'Potato & Cheese Pierogi',
        makes: 36,
        ingredients: {
          Dough: ['2 cups flour', '½ teaspoon salt', '2 tablespoons butter', '½ cup water', '1 large egg'],
          Filling: [
            '1 pound potatoes, peeled and cubed',
            '1 large yellow onion, diced',
            '1 clove garlic, minced',
            '2 tablespoons butter',
            '4 ounces ricotta cheese (½ cup)',
            'Salt and pepper, to taste'
          ],
          Pierogi: ['6 tablespoons butter']
        },
        directions: {
          Dough: [
            'In a large bowl, mix the flour and salt',
            'Heat the water and butter on low heat until the butter has melted',
            'Pour the liquid mixture into the dry ingredients and mix to combine',
            'Beat the egg and add it to the dough',
            'Knead the dough until soft and smooth, about 5 minutes',
            'Cover the dough and let rest while making the filling'
          ],
          Filling: [
            'In a large pot, cover the potatoes in water and bring to boil',
            'Reduce to summer and cook until the potatoes are fork tender, about 20 minutes',
            'Sauté the onions and garlic in butter on low-medium heat until lightly browned',
            'Using an electric mixer, blend the potatoes, onions, and ricotta until smooth',
            'Season with salt and pepper'
          ],
          Pierogi: [
            'Fill a large pot with water and bring to a boil',
            'Repeat the following steps twice, using about half of the dough each time',
            'On a floured surface, roll out the dough until thin, at most ⅛" thick (like a noodle)',
            'Cut out circles of dough using a pint glass, about 3" in diameter each',
            'Put a heaping tablespoon of filling in the center of each circle, and pinch the edges to seal',
            'Once you have about 10 done, drop them in the boiling water',
            'Cook the pierogi until they float to the top, plus another minute or two',
            'Set the cooked pierogi aside, and continue until all of the dough is used',
            'Collect the dough scraps and boil to make noodles',
            'In a large pan, melt 2 tablespoons of butter',
            'Pan fry ⅓ of the pierogi until golden brown, about 5 minutes each side',
            'Repeat the steps two more times, until all of the pierogi have been fried'
          ]
        }
      },
      'southwest-burgers': {
        name: 'Southwest Burgers',
        makes: 4,
        ingredients: [
          '1 large onion, sliced',
          '2 tablespoons canola oil',
          '2 jalapeños',
          '½ cup cilantro',
          '2 cloves garlic',
          '1 tablespoon lime juice',
          '1 pound ground beef or ground turkey',
          '4 slices pepper jack cheese',
          '4 hamburger buns or english muffins, toasted',
          'Chipotle mayo'
        ],
        directions: [
          'Caramelize the onions in canola oil over low-medium heat',
          'Add jalapeños (with seeds), cilantro, garlic, and lime juice to a food processor and chop until very fine',
          'Add the mixture into the ground meat and combine well',
          'Form 4 patties, each slightly bigger than the buns',
          'Pan fry the burgers until cooked through, about 5 minutes on each side',
          'Melt the cheese on top of the burgers in the last couple minutes of cooking',
          'Top the burgers with the caramelized onions and chipotle mayo'
        ]
      },
      'tortilla-espanola': {
        name: 'Tortilla Española',
        serves: 6,
        ingredients: [
          '1½ cups canola oil',
          '3 large russet potatoes, peeled and very thinly sliced',
          '1 spanish onion, thinly sliced',
          '4 large eggs',
          'Salt and pepper, to taste'
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
    }
  },
  {
    category: 'Sides',
    recipes: {
      cornbread: {
        name: 'Cheesy Jalapeño Cornbread',
        serves: 10,
        source: 'Hillstone Restaurant Group',
        ingredients: [
          '¾ cup butter, softened',
          '½ cup sugar',
          '4 large eggs',
          '14.5-ounce can creamed corn',
          '4 ounces shredded pepper jack, or similar cheese',
          '4 jalapeños, seeded and diced',
          '1¼ cups flour',
          '1 cup cornmeal',
          '1 teaspoon salt',
          '1 tablespoon baking powder'
        ],
        directions: [
          'Preheat a 10" cast iron skillet in a 350° oven',
          'Mix the butter and sugar in a large bowl until the mixture is almost smooth',
          'Add in eggs, corn, cheese, and jalapeños and mix until combined',
          'Combine remaining dry ingredients in a separate bowl',
          'Mix the dry ingredients into the wet, until just combined',
          'Pour the mixture into the skillet and return to the oven',
          'Turn the oven up to 400° and bake until golden brown and cooked through, about 40 minutes',
          'Flip the cornbread out of the skillet and slice into 10 wedges'
        ]
      },
      'corn-salad': {
        name: 'Corn Salad',
        serves: 8,
        ingredients: [
          '8 ears of corn (or 6 cups frozen corn)',
          '½ cup mayo',
          '¼ cup lime juice (about 2 limes)',
          '4 ounces queso fresco, crumbled',
          '¾ cup cilantro, chopped',
          '2 jalapeños, seeded and diced',
          '½ tablespoon chili powder, or to taste',
          'Salt, to taste'
        ],
        directions: [
          'Grill the corn, turning occasionally, until lightly charred. If using frozen corn, use a hot, dry pan',
          'Let the corn cool while prepping the other ingredients',
          'Once cool, mix in all other ingredients, and season with salt to taste',
          'Serve chilled'
        ]
      },
      'mashed-potatoes': {
        name: 'Roasted Garlic Mashed Potatoes',
        serves: 10,
        ingredients: [
          '2 heads garlic',
          '4 tablespoons olive oil',
          '5 pounds gold potatoes, peeled and cut into 1 inch cubes',
          '8 ounces sour cream',
          '½ cup butter',
          'Salt and pepper, to taste',
          'Chives, finely sliced'
        ],
        directions: [
          'Preheat oven to 450° and start bringing a very large pot of water to a boil',
          'Cut the top off of each head of garlic, just exposing the cloves',
          'Place each head of garlic in a large piece of aluminum foil, and drizzle with olive oil',
          'Wrap up each head of garlic so that the head will stand upright and roast in the oven for about 45 minutes, until the garlic is very soft',
          'Meanwhile, boil the potatoes until tender, 10-15 minutes',
          'Strain the potatoes and return them to the hot pot for a another minute to remove excess water',
          'Mash the potatoes to the desired consistency',
          'Once the garlic is done, squeeze out the cloves and mix them, along with the sour cream, into the potatoes',
          'Melt the butter and fold it into the potatoes',
          'Season to taste and top with chives'
        ]
      },
      'spinach-artichoke-dip': {
        name: 'Spinach & Artichoke Dip',
        serves: 12,
        ingredients: [
          '1 large onion, diced',
          '3 cloves garlic, minced',
          '2 14-ounce cans artichoke hearts, drained and chopped',
          '4 tablespoons butter',
          '10 ounces fresh spinach',
          '16 ounces cream cheese',
          '½ cup grated parmesan',
          'Salt and pepper, to taste',
          '1 cup shredded mozzarella'
        ],
        directions: [
          'Preheat the oven to 400°',
          'Sauté the onion, garlic, and artichokes in butter until tender',
          'Mix in spinach and cook until wilted',
          'Add in cream cheese and parmesan',
          'Continue to heat and stir the mixture until well combined',
          'Season with salt and pepper',
          'Pour mixture into a 9" x 13" or 8" x 8" pan and top with mozzarella',
          'Bake until bubbly, about 25 minutes'
        ]
      }
    }
  },
  {
    category: 'Desserts',
    recipes: {
      'apple-turnovers': {
        name: 'Apple Turnovers',
        makes: 8,
        ingredients: [
          '4 medium granny smith apples, diced',
          '2 tablespoons butter',
          '⅓ cup packed brown sugar',
          '1 teaspoon cinnamon',
          'Pinch of nutmeg',
          'Pinch of clove',
          '2 teaspoons cornstarch',
          '1 box (2 sheets) puff pastry, thawed',
          '1 egg + 1 tablespoon water, beaten',
          'Sugar'
        ],
        directions: [
          'Add the apples, butter, and brown sugar, and spices to a pot and cook over medium-low heat until the apples are tender',
          'Add the cornstarch and cook until the mixture is thick, just a few minutes',
          'Preheat the oven to 400° and line a cookie sheet with parchment paper',
          'Unfold the pastry sheets and roll them out until they are about 9" squares',
          'Cut them into 4 even squares each, 8 total',
          'Split the filling among the 8 pastry squares',
          'Brush a little egg wash along the edges of each square, fold, and pinch with a fork to seal',
          'Brush a little more egg wash on the tops of each turnover, and sprinkle a pinch of sugar on top',
          'Bake an inch apart until lightly brown, about 17-20 minutes'
        ]
      },
      baklava: {
        name: 'Baklava',
        makes: 24,
        source: 'NEONWILLIE (allrecipes)',
        ingredients: {
          Filling: ['6 ounces shelled pistachios', '10 ounces walnuts', '1 tablespoon cinnamon', '¼ cup sugar'],
          Pastry: ['¾ cup butter, melted', '1-pound package phyllo dough, thawed'],
          Syrup: ['¾ cup water', '½ cup sugar', '½ cup honey']
        },
        directions: {
          Filling: ['Using a food processor, roughly chop the nuts', 'Mix in the cinnamon and sugar, and set aside'],
          Pastry: [
            'Preheat the oven to 350°',
            'Lightly brush the bottom and sides of a 9" x 13" pan with butter',
            'Carefully unroll the phyllo dough and keep it covered with a damp towel while assembling the pastry',
            'Place two layers of phyllo in the pan, and brush the top with butter',
            'Repeat this until almost half of the phyllo is used',
            'Sprinkle half of the filling over the top layer',
            'Using about 20% of the remaining phyllo, repeat the dough/butter layers',
            'Sprinkle the remaining filling over the top layer',
            'Repeat the dough/butter layers until all of the dough is used',
            'Cut the baklava into 24 even pieces, making sure to cut all the way through',
            'Bake for about 45 minutes, until the pastry is crisp and cooked through'
          ],
          Syrup: [
            'Mix the water and sugar in a small pot and heat until dissolved',
            'Add in honey and bring to boil',
            'Reduce to simmer and stir occasionally until the mixture is hot and well combined, about 15 minutes',
            'Remove from heat until the pastry is done',
            'Remove the pastry from the oven and immediately pour the syrup over the baklava',
            'Let cool completely before storing'
          ]
        }
      },
      'banana-nut-bars': {
        name: 'Banana Nut Bars',
        makes: 15,
        ingredients: [
          '4 ripe bananas',
          '3 tablespoons peanut butter',
          '½ tablespoon vanilla',
          '¾ cup brown sugar',
          '1 teaspoon cinnamon',
          '¼ cup coconut oil',
          '¼ cup whole milk',
          '2 large eggs, beaten',
          '½ cup walnuts, finely chopped',
          '¾ cup mini chocolate chips',
          '1 teaspoon baking soda',
          '½ teaspoon salt',
          '1½ cups flour'
        ],
        directions: [
          'Preheat the oven to 350° and grease a jelly roll pan',
          'Mash bananas and mix in peanut butter, vanilla, sugar, cinnamon, oil, milk, and eggs',
          'Mix in nuts, and chocolate chips. The mixture should still be very wet',
          'Combine baking soda, salt, and flour',
          'Add dry ingredients into the wet mixture and spread evenly in the pan',
          'Bake until cooked through, about 20 minutes'
        ]
      },
      'fruit-cocktail-cake': {
        name: 'Fruit Cocktail Cake',
        serves: 9,
        ingredients: [
          '½ cup butter, softened',
          '¼ cup sugar',
          '1 large egg',
          '16-ounce can fruit cocktail',
          '1 teaspoon baking soda',
          '½ teaspoon salt',
          '1¾ cups flour',
          '½ cup brown sugar',
          '½ cup chopped pecans'
        ],
        directions: [
          'Preheat the oven to 350° and grease an 8" x 8" pan',
          'Cream butter and sugar',
          'Mix in egg and undrained can of fruit cocktail',
          'Combine baking soda, salt, and flour',
          'Add dry ingredients into the wet mixture and pour into the pan',
          'Combine brown sugar and chopped pecans',
          'Sprinkle the topping evenly on the batter',
          'Bake until cooked through, about 25 minutes'
        ]
      },
      'spiced-chocolate-cookies': {
        name: 'Spiced Chocolate Cookies',
        makes: 24,
        source: 'Nealey Dozier',
        ingredients: [
          '½ cup butter',
          '4 ounces unsweetened chocolate',
          '1 cup brown sugar',
          '½ cup white sugar',
          '2 teaspoons vanilla',
          '1 large egg + 2 egg yolks',
          '1 cups flour',
          '½ cup unsweetened cocoa powder',
          '1 tablespoon ground cinnamon',
          '1 teaspoon chili powder',
          '¼ teaspoon cayenne pepper',
          '½ teaspoon salt',
          '½ teaspoon baking powder',
          '1½ cups semisweet chocolate chunks'
        ],
        directions: [
          'Preheat the oven to 325°',
          'Melt butter and unsweetened chocolate together and let cool',
          'Slowly beat together sugars, vanilla, and eggs until well combined',
          'Mix in cooled chocolate mixture',
          'Sift together remaining dry ingredients and mix slowly into the batter',
          'Fold in chocolate chunks',
          'Form cookies using a heaping tablespoon each and bake for about 14 minutes'
        ]
      },
      'oatmeal-cookies': {
        name: 'Oatmeal Apple Chip Cookies',
        makes: 30,
        ingredients: [
          '1 cup butter, softened',
          '1 cup brown sugar',
          '½ cup sugar',
          '2 large eggs',
          '4 teaspoons vanilla',
          '1 tablespoon bitters',
          '2 cups oats (rolled or steel-cut)',
          '1½ cups flour',
          '1 tablespoon ground cinnamon',
          '1 teaspoon baking soda',
          '½ teaspoon salt',
          '1 cup semisweet chocolate chips',
          '1 cup finely diced apple, peeled (about 1 small apple)'
        ],
        directions: [
          'Preheat the oven to 350°',
          'Cream butter and sugars',
          'Mix in eggs, vanilla, and bitters',
          'Combine oats, flour, cinnamon, baking soda, and salt',
          'Mix dry ingredients into the wet mixture until just combined',
          'Fold in chocolate chips and apple',
          'Drop cookie dough onto baking sheets and bake for about 12 minutes, until cooked through but soft'
        ]
      },
      snickerdoodles: {
        name: 'Snickerdoodles',
        makes: 24,
        source: 'Modern Honey',
        ingredients: {
          Dough: [
            '1 cup butter, softened',
            '1½ cups sugar',
            '2 large eggs',
            '2 teaspoons vanilla',
            '2½ cups flour',
            '1½ teaspoons cream of tartar',
            '½ teaspoon baking soda',
            '1 teaspoon salt'
          ],
          'Cinnamon-Sugar': ['¼ cup sugar', '1½ tablespoons cinnamon']
        },
        directions: [
          'Cream butter and sugar',
          'Add in eggs and vanilla and cream mixture until combined',
          'Mix in flour, cream of tartar, baking soda, and salt until just combined',
          'Refrigerate dough for 20 minutes',
          'Preheat the oven to 350° and line 2 large baking sheets with parchment paper',
          'Combine remaining sugar and cinnamon in a small bowl',
          'Roll the dough into small balls, about 1 heaping tablespoon each',
          'Coat the balls in the cinnamon-sugar mixture and place on the baking sheets, lightly pressing down in the middle of each',
          'Bake for 10 minutes'
        ]
      }
    }
  }
];

export const ALL_RECIPES = CATEGORIES.reduce((allRecipes: RecipeMap, category: RecipeCategory) => {
  return { ...allRecipes, ...category.recipes };
}, {});

export const getRecipe = (id: string) => {
  return ALL_RECIPES[id];
};
