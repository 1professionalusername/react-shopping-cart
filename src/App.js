import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { PersonContext } from './context/ProductContext'
import { CartContext } from './context/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			{/* The provider component take in a value prop, and the data we want to use gets passed into value */}
			<PersonContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={cart}>
					<Navigation cart={cart} />

					{/* Routes */}

					<Route exact path="/" component={Products} />

					)}
				/>

				<Route path="/cart" cart={cart} />

				</CartContext.Provider>
			</PersonContext.Provider>
		</div>

	);
}

export default App;
