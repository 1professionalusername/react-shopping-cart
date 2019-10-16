import React, { useContext } from 'react';
import ProductContext, { PersonContext } from '../context/ProductContext'

// Components
import Product from './Product';



const Products = () => {

	const { products, addItem } = useContext(PersonContext)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
