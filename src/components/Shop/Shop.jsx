// src/components/Shop/Shop.jsx
// data
import { inventoryData } from '../../data/data';
// src/components/Shop/Shop.jsx
// components
import InventoryList from '../../components/InventoryList/InventoryList';

const Shop = () => {
  return (
    <main id="vlalue" className='hello'>
      <h1>Shop</h1>
      <InventoryList inventory={inventoryData} />
      <data value=""></data>
    </main>
  ); 

};

export default Shop;