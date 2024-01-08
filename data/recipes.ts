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

type RecipeMap = { [key: string]: Recipe };

type RecipeCategory = {
  category: string;
  recipes: RecipeMap;
};

export const CATEGORIES: RecipeCategory[] = [
  {
    category: 'Entrées',
    recipes: {
      'beef-leek-soup': {
        name: 'Beef & Leek Soup',
        portion: {
          verb: 'serves',
          quantity: 6
        },
        ingredients: [
          'Olive oil',
          'Salt and pepper',
          '½ pound carrots, diced (about 3 large carrots)',
          '½ pound celery, diced (about 1 heart)',
          '1 pound leeks, cut lengthwise and thinly sliced (about 4 trimmed leeks)',
          '6 cloves garlic, minced',
          '1 pound 80/20 ground beef (or lamb)',
          '2 tablespoons flour',
          '6 cups beef stock',
          '3 tablespoons fish sauce',
          '1 tablespoon dried thyme',
          "1 cup Trader Joe's Harvest Blend (couscous, orzo, quinoa blend)"
        ],
        directions: [
          'In a large dutch oven, sauté the carrots, celery, and leeks on medium-low heat with plenty of oil, salt, and pepper',
          'Once the veggies have softened and the leeks have significantly cooked down, add in the garlic and cook until fragrant',
          'Remove the veggies from the dutch oven and set aside',
          'On medium-high heat, brown the ground beef and chop it up into very small bits',
          'Once the beef has browned, add in the flour and mix well',
          'Add the veggies back along with a little stock to deglaze the dutch oven',
          'Add the stock, fish sauce, and thyme and bring to a boil',
          'Once boiling, add in the Harvest Blend, reduce to a simmer, and cover',
          'Cook until the grain blend is done, then remove from heat and let sit for 15 minutes to thicken',
          'Serve with bread'
        ]
      },
      'butternut-squash-mac': {
        name: 'Butternut Squash Mac & Cheese',
        portion: {
          verb: 'serves',
          quantity: 6
        },
        ingredients: [
          '1 pound butternut squash, cubed (dice size)',
          'Olive oil',
          '½ teaspoon cinnamon',
          '½ teaspoon smoked paprika',
          '½ teaspoon dried thyme',
          '½ teaspoon dried rosemary',
          '¼ teaspoon nutmeg',
          '¼ teaspoon red pepper flakes',
          'Couple dashes of ground cloves',
          'Salt and pepper to taste',
          '1 cup chicken broth',
          '4 ounces pancetta, cubed',
          '1 pound pasta, cavatappi, rigatoni, or a similar size',
          '1 shallot, minced',
          '4 cloves garlic, minced',
          '1 tablespoon butter',
          '2 tablespoons flour',
          '2 cups whole milk',
          '8 ounces gouda and/or cheddar, freshly grated'
        ],
        directions: [
          'Preheat the oven to 400°',
          'Mix the squash, oil, and spices and roast until very soft, about 20 minutes',
          'Let the squash cool for at least 10 minutes then blend with the chicken broth to form a thick purée',
          'In a large pot, sauté the pancetta on medium heat, letting the fat render out',
          'Meanwhile, cook the pasta and set aside once done',
          'Once the pancetta is crispy, reduce the heat to low, add in the shallot and garlic, and cook until the shallot is soft',
          'If there is still a lot of fat from the pancetta, skip the butter - otherwise, add in the butter and let it melt',
          'Whisk in the flour and slowly add the milk, whisking constantly',
          'Whisk in the squash purée and bring to a simmer, but not a boil',
          'Take the pot off of the heat and whisk in the cheese until completely melted',
          'Stir in the pasta and season with salt and pepper as needed'
        ]
      },
      'cauliflower-curry': {
        name: 'Cauliflower Curry',
        portion: {
          verb: 'serves',
          quantity: 6
        },
        ingredients: [
          'Olive oil',
          'Salt and pepper',
          '1 large cauliflower, cut into small florets',
          '6 cloves garlic, smashed',
          '2-inch piece of ginger, peeled and cut into 4 wedges',
          '1 yellow onion, diced',
          '2 jalapeños, seeded and diced',
          '2 red bell peppers, largely diced',
          '1 teaspoon cumin',
          '1 teaspoon red chili powder',
          '½ teaspoon coriander',
          '½ teaspoon turmeric',
          '1 large gold potato, cut into ½-inch cubes',
          '14.5-ounce can diced tomatoes',
          '2 tablespoons tomato paste',
          '14.5-ounce can chickpeas, drained and rinsed',
          '14.5-ounce can coconut milk',
          '2 teaspoons garam masala',
          'Chopped cilantro'
        ],
        directions: [
          'In a 400° oven, roast the cauliflower with olive oil, salt, and pepper, until it begins to char, about 20 minutes',
          'Meanwhile, in a large dutch oven, sauté the garlic and ginger on medium-low heat until fragrant, about 1 minute',
          'Add in the onion and cook until it begins to soften, about 3 minutes',
          'Add in a little more oil, the diced peppers, cumin, chili powder, coriander, and turmeric, and mix well',
          'Cook for another minute to allow the spices to bloom. Add in a splash of veggie broth or water if the the spices are sticking to the bottom',
          'Add in the potatoes and sauté for about 5 minutes, mixing occasionally',
          'Add tomatoes and tomato paste and continue cooking for another few minutes to cook off the raw tomato taste',
          'Add in the chickpeas, coconut milk, and salt to taste',
          'Cook on low, covered, until the potatoes are just fork tender, about 20 minutes. The chickpeas should also be done by this point',
          'Add in the roasted cauliflower and garam masala and continue cooking, uncovered, for about 5-10 minutes to let the curry thicken',
          'Remove the ginger pieces, top with fresh cilantro, and serve over rice'
        ]
      },
      'chicken-veggie-burritos': {
        name: 'Chicken & Veggie Burritos',
        portion: {
          verb: 'makes',
          quantity: 10
        },
        ingredients: [
          'Olive oil',
          '2 zucchini, diced',
          '2 red peppers, sliced',
          '1 green pepper, sliced',
          '1 large onion, thinly sliced',
          '1 cup corn',
          '1 rotisserie chicken, pulled',
          '14.5-ounce can seasoned diced tomatoes',
          '8 ounces shredded Mexican cheese',
          'Taco seasoning',
          '10-ounce can red enchilada sauce',
          '10 8-inch flour tortillas'
        ],
        directions: [
          'In batches, sauté the veggies in oil on medium-high heat until browned',
          'Preheat the oven to 350°',
          'In a large bowl, mix the veggies, chicken, tomatoes, and about half of the cheese. If the mixture too dry to mix well, add in a little of the sauce',
          'Add in taco seasoning, to taste (you need a lot)',
          'Coat the bottom of a 9" x 13" pan with some of the sauce',
          'Evenly distribute the filling between the tortillas',
          'Roll the tortillas tightly around the filling, putting them seam-side down in the pan. You may need to squish them a little to get them to all fit',
          'Pour the remaining sauce overtop of the rolled burritos',
          'Add the remaining cheese to the long edges of the pan',
          'Bake until the cheese is melted and the burritos are hot inside, about 30 minutes',
          'Cut down the center before serving'
        ]
      },
      'chicken-rice-soup': {
        name: 'Chicken & Wild Rice Stew',
        portion: {
          verb: 'serves',
          quantity: 8
        },
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
      'crab-cakes': {
        name: 'Crab Cakes',
        portion: {
          verb: 'makes',
          quantity: 6
        },
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
        portion: {
          verb: 'makes',
          quantity: 4
        },
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
      gnocchi: {
        name: 'Gnocchi with Burst Tomatoes & Mozzarella',
        portion: {
          verb: 'serves',
          quantity: 3
        },
        ingredients: [
          'Olive oil',
          '18-ounce package non-frozen gnocchi',
          '2 tablespoons butter',
          '2 cloves garlic, minced',
          '¼ teaspoon red pepper flakes',
          '1 pint cherry tomatoes, halved (for quicker recipe)',
          'Salt and pepper, to taste',
          'Fresh basil, thinly sliced',
          '4 ounces fresh mozzarella, torn into small pieces'
        ],
        directions: [
          'In a large, oven-safe skillet, heat olive oil, on medium-high, to coat the pan',
          'Add gnocchi and brown, about 2 minutes on each side',
          'Remove the gnocchi and set aside',
          'Melt the butter over medium heat and add in the garlic and red pepper flakes, cooking for just a minute',
          'Add in the tomatoes and 2 tablespoons of water, stirring occasionally',
          'Preheat the broiler',
          'Once the tomatoes have softened, smash the tomatoes to help them burst completely',
          'Add back in the gnocchi, along with the basil, salt, and pepper',
          'Mix and arrange the gnocchi in a fairly even layer',
          'Top with mozzarella and broil until melted and browned'
        ]
      },
      lasagna: {
        name: 'Lasagna',
        portion: {
          verb: 'serves',
          quantity: 12
        },
        ingredients: {
          Ragù: [
            'Olive oil',
            '1 pound ground hot italian sausage',
            '1 pound ground beef',
            '1 yellow onion, diced',
            '8 cloves garlic, minced',
            '2 28-ounce cans crushed tomatoes',
            '1 cup water',
            '1 tablespoon dried oregano',
            '1 tablespoon sugar',
            '1 teaspoon red pepper flakes, or to taste',
            'Salt and pepper to taste'
          ],
          Lasagna: [
            '16 or 20 lasagna noodles, or however many comes in a 1-pound box',
            '32 ounces ricotta cheese ',
            '1 pound shredded mozzarella',
            '1 egg',
            '1 teaspoon dried oregano or italian seasoning',
            'Salt and pepper to taste',
            'Freshly grated parmesan'
          ]
        },
        directions: {
          Ragù: [
            'On high heat, in a large dutch oven, brown the sausage and beef in a little olive oil, breaking it up as you go',
            'Once browned, add in the onion and cook until soft',
            'Reduce the heat to medium, add in the garlic, and cook until fragrant',
            'Add in the remaining ingredients and simmer with the lid slightly ajar for at least an hour. Add in more water if it cooks down too much.'
          ],
          Lasagna: [
            'Preheat the oven to 375°',
            'Boil the lasagna noodles until just cooked, and set aside',
            'Meanwhile, combine the ricotta, 12 ounces of the mozzarella, egg, oregano, salt, and pepper until well mixed',
            'In a deep 9" x 13" dish, put a layer of sauce in the bottom of the pan, a sprinkle of parmesan, and a layer of 4 lasagna noodles',
            'Until the noodles are used up, repeat layers of ricotta, sauce, parmesan, and 4 noodles',
            'Top with a final layer of sauce',
            'Cover with foil and bake for 30 minutes',
            'Remove foil, add the remaining mozzarella, and bake until the cheese is melted and browned, about 15 minutes',
            'Let rest for 15 minutes before cutting and serving'
          ]
        }
      },
      pierogi: {
        name: 'Potato & Cheese Pierogi',
        portion: {
          verb: 'makes',
          quantity: 36
        },
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
            'Reduce to simmer and cook until the potatoes are fork tender, about 20 minutes',
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
      'pork-bulgogi': {
        name: 'Pork Bulgogi',
        portion: {
          verb: 'serves',
          quantity: 6
        },
        ingredients: [
          '6 tablespoons soy sauce',
          '3 tablespoons sugar',
          '2 tablespoons gochujang',
          '1 tablespoon toasted sesame oil',
          '4 cloves garlic, grated',
          '2 teaspoons grated ginger',
          '1 small asian pear, grated (or 2 tablespoons corn starch, for tenderizing)',
          '2 pounds pork tenderloin, thinly sliced',
          '1 small onion, thinly sliced',
          '8 scallions, sliced into 2-inch long pieces, whites and greens separated',
          'Neutral oil',
          'White rice',
          'Optional toppings: sesame seeds, pickled radishes, sautéed cabbage, lime, cilantro'
        ],
        directions: [
          'Combine the soy sauce, sugar, gochujang, sesame oil, garlic, ginger, and pear to make the marinade',
          'Marinade the pork, onions, and scallion whites for at least a few hours, until ready to cook',
          'In a cast iron pan, heat a tablespoon of oil on medium-high heat',
          'Add some of the marinated pork, onions, and scallion whites in a single layer, avoiding over-crowding the pan',
          'Cook for a minute or two on each side until done and browned',
          'Repeat in batches with remaining ingredients',
          'Top with scallion greens and serve over rice with optional toppings'
        ]
      },
      'sausage-quiche': {
        name: 'Sausage Quiche',
        portion: {
          verb: 'serves',
          quantity: 8
        },
        ingredients: [
          '1 pound ground italian sausage',
          '1 large red bell pepper, diced',
          '½ yellow onion, diced',
          '2 cloves garlic, minced',
          '8 ounces fresh spinach, chopped',
          '6 large eggs',
          '1 cup whole milk',
          '6 ounces gouda, cheddar, or another mild cheese, cubed',
          'Salt and pepper, to taste (depends on the type of sausage)',
          '1 pre-baked pie crust'
        ],
        directions: [
          'Preheat the oven to 350°',
          'On medium-high heat, brown the sausage and break it up into little clumps',
          'Set aside the sausage in a large bowl and sauté the peppers and onions',
          'Once the peppers and onions are about done, add in the garlic and cook until fragrant',
          'Add the cooked peppers and onions to the bowl with the sausage, the cook then spinach',
          'Once the spinach has fully wilted, press out as much water as possible and add it to the bowl',
          'Beat together the eggs and milk, and add it to the other ingredients',
          'Add in the cheese, salt, and pepper, and mix well',
          'Pour the mixture into the pre-baked pie crust',
          'Cover the edges of the pie crust with foil to prevent burning',
          'Bake until the middle has just set, about 1 hour'
        ]
      },
      'sausage-tortellini-soup': {
        name: 'Sausage, Kale, & Tortellini Soup',
        portion: {
          verb: 'serves',
          quantity: 8
        },
        ingredients: [
          '1 pound hot italian sausage',
          'Olive oil',
          '1 large yellow onion, diced',
          '8 cloves garlic, minced',
          '14.5-ounce can tomato sauce',
          '1 tablespoon oregano or italian seasoning',
          '2 14.5-ounce cans cannellini beans, drained',
          '8 cups chicken broth',
          '1 pound kale, stemmed and chopped',
          '20 ounces refrigerated cheese tortellini',
          'Salt, pepper, and parmesan, to taste'
        ],
        directions: [
          'In a large dutch oven or pot, brown the italian sausage on high heat, breaking it up as you go',
          'Remove the sausage, setting aside until later',
          'Add in a little oil and sauté the onions on medium-low heat until soft',
          'Add in the garlic and cook for a few more minutes',
          'Add a little more oil if the pot is dry and add the tomato sauce and oregano, cooking and stirring for just a few minutes',
          'Scrape the bottom to make sure nothing is stuck before adding the beans and broth and bringing everything to a simmer',
          'Use an immersion blender to blend everything until smooth',
          'Add back in the sausage, along with the kale, and bring to a boil',
          'The kale should have significantly cooked down by now - add in the tortellini and cook until done',
          'Remove from the heat, add in a ton of parmesan, and season as needed'
        ]
      },
      'southwest-burgers': {
        name: 'Southwest Burgers',
        portion: {
          verb: 'makes',
          quantity: 4
        },
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
        portion: {
          verb: 'serves',
          quantity: 6
        },
        ingredients: [
          '1 cup olive oil',
          '3 large yukon gold potatoes, peeled and very thinly sliced',
          '1 yellow onion, thinly sliced',
          '4-6 large eggs, depending on potato size',
          'Salt and pepper, to taste'
        ],
        directions: [
          'In a 9" nonstick pan, heat the oil over medium heat. Only use cast iron if it is very well seasoned',
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
      },
      'white-chicken-chili': {
        name: 'White Chicken Chili',
        portion: {
          verb: 'serves',
          quantity: 8
        },
        ingredients: [
          '1 large onion, diced',
          '2 cloves garlic, minced',
          '2 tablespoons canola oil',
          '2 serrano peppers, diced',
          '4 cups chicken broth',
          '2 4-ounce cans diced green chiles',
          '½ tablespoon cumin',
          '½ teaspoon paprika',
          '½ teaspoon oregano',
          '½ teaspoon coriander',
          '½ teaspoon black pepper',
          '14.5-ounce can navy beans, rinsed',
          '14.5-ounce can cannellini beans, rinsed',
          '14.5-ounce can corn, drained',
          '2 14.5-ounce cans hominy, drained',
          '1 rotisserie chicken, pulled',
          '1 cup cilantro, chopped',
          'Juice from 1 lime',
          'Mexican cheese',
          'Tortilla chips'
        ],
        directions: [
          'In a large pot, sauté the onion and garlic in the canola oil until onions are tender',
          'Add in serrano peppers and cook for a couple minutes',
          'Add in chiles, spices, and broth',
          'Bring to a boil and simmer, covered, for 10 minutes',
          'Mash the navy beans with a little of the liquid until smooth',
          'Add in the mashed beans, whole beans, corn, and hominy, and simmer for another 10 minutes',
          'Stir in the chicken, cilantro, and lime and remove from the heat',
          'Top with cheese and serve with tortilla chips'
        ]
      }
    }
  },
  {
    category: 'Sides',
    recipes: {
      'chickpea-lemon-salad': {
        name: 'Roasted Chickpea & Lemon Salad',
        portion: {
          verb: 'serves',
          quantity: 4
        },
        ingredients: {
          Dressing: [
            '¼ cup lemon juice',
            '¼ cup olive oil',
            '1 clove garlic, grated',
            '1 teaspoon dijon mustard',
            '½ teaspoon honey',
            '½ small shallot, minced',
            'Fresh or dried herbs, like thyme and basil, to taste',
            'Salt and pepper, to taste'
          ],
          Salad: [
            '½ 14-ounce can chickpeas, drained, rinsed, and pat dry',
            '2 tablespoons olive oil',
            'Salt and pepper, to taste',
            '½ small shallot, thinly sliced',
            '3 ounces spinach',
            '3 ounces arugula',
            '2 ounces goat cheese, crumbled',
            '½ cup dried cranberries'
          ]
        },
        directions: [
          'Preheat the oven to 400°',
          'Toss the chickpeas in 2 tablespoons olive oil, salt, and pepper',
          'Roast chickpeas until crispy, about 30 minutes',
          'Meanwhile, add the sliced shallots to a small bowl and cover with water, set aside',
          'Make the dressing by whisking together all of the ingredients, set aside',
          'Once the chickpeas have cooled, drain the shallots and toss together all ingredients'
        ]
      },
      cornbread: {
        name: 'Cheesy Jalapeño Cornbread',
        portion: {
          verb: 'serves',
          quantity: 10
        },
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
        portion: {
          verb: 'serves',
          quantity: 8
        },
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
        portion: {
          verb: 'serves',
          quantity: 10
        },
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
        portion: {
          verb: 'serves',
          quantity: 12
        },
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
      'banana-brownies': {
        name: 'Banana Brownies',
        portion: {
          verb: 'makes',
          quantity: 16
        },
        ingredients: [
          '½ cup butter, melted',
          '1¼ cups sugar',
          '3 large eggs',
          '1½ teaspoons vanilla extract',
          '3 ripe bananas, mashed',
          '½ cup greek yogurt',
          '1 cup flour',
          '½ cup cocoa powder',
          '½ teaspoon kosher salt',
          '½ teaspoon baking powder',
          '1 cup semi-sweet chocolate chunks'
        ],
        directions: [
          'Preheat the oven to 350° and grease and line a 9" x 13" pan',
          'Combine the butter, sugar, eggs, vanilla, banana, and yogurt, and mix well',
          'Combine dry ingredients separately and sift into the wet mixture',
          'Fold in the chocolate chunks',
          'Pour the mixture into the prepared pan',
          'Bake until cooked through, about 35 minutes'
        ]
      },
      'fruit-cocktail-cake': {
        name: 'Fruit Cocktail Cake',
        portion: {
          verb: 'serves',
          quantity: 9
        },
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
      'lemon-shortbread-thumbprint-cookies': {
        name: 'Lemon Shortbread Thumbprint Cookies',
        portion: {
          verb: 'makes',
          quantity: 30
        },
        ingredients: {
          Dough: [
            '1 cup butter, softened',
            '135 grams sugar',
            '½ tablespoon vanilla extract',
            'Zest of a whole lemon',
            'Juice of half a lemon',
            '275 grams flour'
          ],
          Jam: [
            '200 grams frozen blueberries, raspberries, and blackberries',
            '100 grams sugar',
            'Juice of half a lemon'
          ]
        },
        directions: {
          Dough: [
            'Cream the butter and sugar',
            'Mix in the vanilla, lemon zest, and lemon juice',
            'Add in the flour and mix, on low speed, just until a dough forms',
            'Compact the dough, wrap in plastic, and refrigerate while making the jam'
          ],
          Jam: [
            'Combine all ingredients in a pot on the lowest heat until the berries are defrosted',
            'Put a few spoons in the freezer',
            'Bring the mixture to a boil',
            'Cook the jam, stirring often, until the jam sets on the back on a cold spoon, about 20 minutes',
            'Press the jam through a sieve to remove any seeds',
            'Let the jam cool while shaping the cookies'
          ],
          Cookies: [
            'Roll the dough into small balls, about 1 tablespoon of dough per cookie',
            'Press your thumb into each dough ball, trying to keep the walls of the pocket even in height',
            'If any cracks form, try to smooth them over or compress the dough a little to fill them back up',
            'Space the cookies out evenly on two baking sheets and refrigerate for another 30 minutes to help the cookies keep their shape',
            'Preheat the oven to 350°',
            'Fill each cookie with jam, being careful not to overflow the pockets',
            'Bake until the cookies are just beginning to brown, about 13 minutes',
            'Let cool, or even chill, before serving'
          ]
        }
      },
      'rhubarb-pie': {
        name: 'Rhubarb Pie',
        portion: {
          verb: 'serves',
          quantity: 8
        },
        ingredients: [
          '½ cup + ⅓ cup flour',
          '½ cup brown sugar',
          '6 tablespoons butter, softened',
          '1⅓ cups sugar',
          '5 cups chopped rhubarb',
          '1 pie crust'
        ],
        directions: [
          'To make the topping, mix together ½ cup flour and the brown sugar',
          'Cut the butter into the dry ingredients and set aside',
          'Preheat the oven to 450°',
          'Lightly grease a 9¼" pie pan',
          'Roll out the pie crust and press it into the pan',
          'Mix the remaining flour and sugar',
          'Sprinkle about ½ cup of the mixture into the pie crust',
          'Add in the rhubarb',
          'Sprinkle the remaining flour & sugar mixture overtop the rhubarb and shake the pie to get the contents to settle',
          'Cover the pie with the topping mixture',
          'Bake for 15 minutes',
          'Reduce the oven temperature to 350° and continue to bake until the rhubarb mixture bubbles, about 35 more minutes',
          'Let cool before cutting and serving'
        ]
      },
      'spiced-chocolate-cookies': {
        name: 'Spiced Chocolate Cookies',
        portion: {
          verb: 'makes',
          quantity: 24
        },
        ingredients: [
          '½ cup butter',
          '12 ounces semisweet chocolate chips',
          '¾ cup brown sugar',
          '¼ cup white sugar',
          '2 teaspoons vanilla',
          '1 large egg + 2 egg yolks',
          '1 cups flour',
          '½ cup unsweetened cocoa powder',
          '1 tablespoon ground cinnamon',
          '1 teaspoon chili powder',
          '¼ teaspoon cayenne pepper',
          '½ teaspoon salt',
          '½ teaspoon baking powder'
        ],
        directions: [
          'Preheat the oven to 325°',
          'Melt butter and 4 ounces of the chocolate chips together and let cool',
          'Slowly beat together sugars, vanilla, and eggs until well combined',
          'Mix in cooled chocolate mixture',
          'Sift together remaining dry ingredients and mix slowly into the batter',
          'Fold in remaining chocolate chips',
          'Form cookies using a medium cookie scoop and bake for about 12 minutes'
        ]
      },
      'peach-berry-cobbler': {
        name: 'Peach & Berry Cobbler',
        portion: {
          verb: 'serves',
          quantity: 16
        },
        ingredients: {
          Filling: [
            '2 pounds ripe peaches, pitted and cubed',
            '1 pint blackberries, halved if large',
            '1 pint blueberries',
            '½ cup sugar',
            'Juice from 1 lemon',
            '1 tablespoon grated ginger or ½ teaspoon ground ginger',
            '2 tablespoons cornstarch',
            'Salt to taste'
          ],
          Biscuit: [
            '2 cups flour',
            '½ cup sugar',
            '2 teaspoons baking powder',
            'Salt to taste',
            '½ cup cold butter, cubed',
            '1¼ cups buttermilk',
            'Simple syrup or egg wash'
          ]
        },
        directions: {
          Filling: [
            'Preheat the oven to 375°',
            'In a 9" x 13" dish, mix all of the filling ingredients until well combined',
            'Bake for 10 minutes and set aside',
            'Meanwhile, make the biscuit dough'
          ],
          Biscuit: [
            'Whisk together dry ingredients',
            'Cut butter into dry mix until the butter resembles small pebbles',
            'Mix in buttermilk until just combined. The dough should be pretty wet',
            'Spread the dough in a fairly even layer on top of the baked filling, leaving small gaps to let some moisture escape',
            'Bake for 15 minutes and prep the simple syrup or egg wash',
            'Brush a thin layer of the syrup or egg wash over the biscuit topping, and bake for another 25 minutes, or until the biscuit has browned',
            'Let sit for 30 minutes before serving to allow the filling to thicken'
          ]
        }
      },
      snickerdoodles: {
        name: 'Snickerdoodles',
        portion: {
          verb: 'makes',
          quantity: 24
        },
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
  },
  {
    category: 'Misc.',
    recipes: {
      'cinnamon-hot-chocolate': {
        name: 'Cinnamon Hot Chocolate Mix',
        portion: {
          verb: 'makes',
          quantity: 8,
          units: 'mugs'
        },
        ingredients: [
          '¾ cups cocoa powder',
          '¾ cups granulated sugar',
          '1 tablespoon cinnamon',
          '¼ teaspoon kosher salt'
        ],
        directions: [
          'Combine all of the ingredients and mix extremely well',
          'To serve, combine 3 tablespoons of mix with 12 ounces of hot milk'
        ]
      },
      'pie-crust': {
        name: 'Pie Crust',
        portion: {
          verb: 'makes',
          quantity: 1,
          units: '10-inch crust'
        },
        ingredients: [
          '150 grams flour',
          '¼ teaspoon salt',
          '10 tablespoons butter, cubed and chilled',
          '4 tablespoons ice-cold water'
        ],
        directions: [
          'In a food processor, pulse the flour and salt until well combined',
          'Add in the butter and pulse until the mixture resembles small gravel',
          '1 tablespoon at a time, add in the water until a dough begins to form but is not too wet',
          'Gently fold the dough a few times on a floured surface, form a ball, and press into a thick disc',
          'Wrap the dough is plastic wrap and refrigerate for at least 30 minutes',
          'For a pre-baked crust, preheat the oven to 425°',
          'Roll out the crust and press it into a greased pie pan',
          'Add a layer of parchment paper, followed by pie weights',
          'Bake the crust for 10 minutes',
          'Remove the parchment and pie weights and poke holes in the bottom of the crust with a fork',
          'Bake for another 10 minutes, until the crust is fully cooked',
          'Trim the excess dough around the rim'
        ]
      },
      'salsa-verde': {
        name: 'Salsa Verde',
        portion: {
          verb: 'makes',
          quantity: 20,
          units: 'oz'
        },
        ingredients: [
          '1 pound tomatillos, de-husked and halved',
          '1 small white onion, cut into wedges and separated',
          '2 jalapeños, halved',
          '2 cloves garlic',
          'Juice from 1 lime',
          'Handful of cilantro, roughly chopped',
          'Salt to taste'
        ],
        directions: [
          'Put the tomatillos, onion, jalapeños, and garlic on a large baking sheet, cut side down',
          'Broil until the tomatillo have mostly charred. At this point, the onion and jalapeños should have also at least started to char',
          'Once cooled, throw everything into a blender with the remaining ingredients and blend until pretty smooth, or desired texture'
        ]
      },
      'serrano-pineapple-hot-sauce': {
        name: 'Serrano & Pineapple Hot Sauce',
        portion: {
          verb: 'makes',
          quantity: 12,
          units: 'oz'
        },
        ingredients: [
          '½ pound serrano peppers, de-stemmed',
          '1 cup chopped pineapple (200g)',
          '3 cloves garlic',
          'Juice from 1 lime',
          '2 tablespoons white vinegar',
          '½ teaspoon kosher salt'
        ],
        directions: [
          'Blend all of the ingredients together until smooth',
          'Bring the sauce to a boil and then simmer for 10 minutes',
          'Let the sauce cool before bottling'
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
