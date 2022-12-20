import { MdOutlineEmojiFoodBeverage } from 'react-icons/md';
import { BiDrink } from 'react-icons/bi';
import { GiChickenOven } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { BiCookie } from 'react-icons/bi';
import React from 'react';

const sublinks = [
  {
    // page: 'recipes',
    page: 'Recipes',
    links: [
      { label: 'Breakfast', icon: <MdOutlineEmojiFoodBeverage />, url: 'https://www.edamam.com/results/recipes/?search=breakfast' },
      { label: 'lunch', icon: <IoFastFoodOutline />, url: 'https://www.edamam.com/results/recipes/?search=Lunch' },
      { label: 'dinner', icon: <GiChickenOven />, url: 'https://www.edamam.com/results/recipes/?search=dinner' },
      { label: 'snacks', icon: <BiCookie />, url: 'https://www.edamam.com/results/recipes/?search=Snacks' },
      { label: 'cocktails', icon: <BiDrink />, url: 'https://www.edamam.com/results/recipes/?search=cocktail' }
    ],
  },
  {
    page: 'Cuisine',

    links: [
      { label: 'american', icon: '', url: 'https://www.edamam.com/results/recipes/?search=American' },
      { label: 'italian', icon: '', url: 'https://www.edamam.com/results/recipes/?search=Italian' },
      { label: 'chinese', icon: '', url: 'https://www.edamam.com/results/recipes/?search=Chinese' },
      { label: 'caribbean', icon: '', url: 'https://www.edamam.com/results/recipes/?search=caribbean' },
      { label: 'mexican', icon: '', url: 'https://www.edamam.com/results/recipes/?search=mexican' },
      { label: 'mediterranean', icon: '', url: 'https://www.edamam.com/results/recipes/?search=mediterranean' },
      { label: 'indian', icon: '', url: 'https://www.edamam.com/results/recipes/?search=indian' },
      { label: 'asian', icon: '', url: 'https://www.edamam.com/results/recipes/?search=Asian' },
    ],
  }
];

export default sublinks;
