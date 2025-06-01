import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const groupProductsByCategories = async() => {
    try{
    const readData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(readData);

    const grouped = products.reduce((acc, { category, name }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});

    console.log('Продукти згруповані за категоріями:');
    console.log(grouped);

    return grouped;
    } catch (error) {
    console.log('не знайдено продукти', error);
    return [];
    }
};
groupProductsByCategories();
