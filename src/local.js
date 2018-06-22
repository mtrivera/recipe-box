function localToObj(windowObj) {
  const recipes = [
    {
      name: 'Apple Crisp',
      ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
      '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
      '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
      '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'   
    ],
      directions: ['1. Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
    `2. Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
     well mixed; sprinkle over apples. `, `3. Bake about 30 minutes or until topping is golden brown and 
     apples are tender when pierced with a fork. Serve warm with cream.`
    ],
    isOvernight: {
      cook: false,
      prep: false
    },
    servings: 6,
    time: {
      prep: '20 minutes',
      total: '50 minutes'
    },
  },
  {
    name: 'Apple Crisp',
    ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
      '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
      '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
      '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'   
    ],
    directions: ['1. Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
    `2. Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
     well mixed; sprinkle over apples. `, `3. Bake about 30 minutes or until topping is golden brown and 
     apples are tender when pierced with a fork. Serve warm with cream.`
    ],
    isOvernight: {
      cook: false,
      prep: false
    },
    servings: 6,
    time: {
      prep: '20 minutes',
      total: '50 minutes'
    }
  },
  {
    name: 'Apple Crisp',
    ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
      '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
      '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
      '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'   
  ],
    directions: ['1. Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
    `2. Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
     well mixed; sprinkle over apples. `, `3. Bake about 30 minutes or until topping is golden brown and 
     apples are tender when pierced with a fork. Serve warm with cream.`
    ],
    isOvernight: {
      cook: false,
      prep: false
    },
    servings: 6,
    time: {
      prep: '20 minutes',
      total: '50 minutes'
    },
  },
  ];
  windowObj.localStorage.setItem('_user_recipes', JSON.stringify(recipes));
  return JSON.parse(windowObj.localStorage.getItem('_user_recipes'));
};

module.exports = localToObj;