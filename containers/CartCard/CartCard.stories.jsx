import React from 'react';
import { Quantity } from '../../components';
import CartCard from './CartCard';

export default { title: 'containers/CartCard' };
export const CartCardTest = () => (
  <CartCard
    data={{
      description: 'The Angel wing begonia is a flowering species from a large family of plants (2000 or more and many more hybrids), named Begoniaceae.The Begonia coccinea has a fair few varieties that display glossy type leaves on cane stems and display colorful flowers.Native to South America, these perennial flowering plants (Begonia) grow in sub-tropical and tropical climates, although this species is a hybrid. Fortunately they deal the climate differences and grow in cooler conditions within temperate regions very well.',
      id: '3116b46d-39a2-4ea1-ba4e-e46b96d2bdc0',
      img: 'assets/img/Product/angel_wing_begonia.jpg',
      name: 'ANGEL WING BEGONIA',
      price: '5.0',
    }}
    quantity={10}
  />
);
