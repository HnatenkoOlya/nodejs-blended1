import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getUniqueCategories = async() => {
    try{
    const readData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(readData);

    const allCategories = products.map(product => product.category);
    const uniqProducts = [...new Set(allCategories)];

    return uniqProducts;
    } catch (error) {
    console.log('не знайдено продукти');
    return [];
    }
};
getUniqueCategories().then(uniqProducts => {
  console.log(`Унікальні категорії усіх продуктів: ${uniqProducts}`);
});
