import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getTotalPrice = async () => {
    try {
     const readData = await fs.readFile(PATH_DB, 'utf-8');
     const products = JSON.parse(readData);

     const totalProducts = products.reduce((acc, product) => acc + Number(product.price), 0 );
     return totalProducts.toFixed(2);
    } catch (error) {
      console.log('не знайдено продукти');
     return [];
    }
};
getTotalPrice().then(totalProducts => {
  console.log(`Загальна вартість усіх продуктів: ${totalProducts}`);
});
