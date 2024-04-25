/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { ProductTable } from './components/ProductTable/ProductTab';
import { Filters } from './components/Filters/Filters';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    categoryProduct => categoryProduct.id === product.categoryId,
  );
  const user = usersFromServer.find(
    userProduct => userProduct.id === category.ownerId,
  );

  return { ...product, category, user };
});

export const App = () => {
  const [userId, setUserId] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [query, setQuery] = useState('');

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <Filters
          users={usersFromServer}
          categories={categoriesFromServer}
          products={products}
          setVisibleProducts={setVisibleProducts}
          userId={userId}
          setUserId={setUserId}
          query={query}
          setQuery={setQuery}
        />

        <div className="box table-container">
          {/* <p data-cy="NoMatchingMessage">
            No products matching selected criteria
          </p> */}
          <ProductTable products={visibleProducts} />
        </div>
      </div>
    </div>
  );
};
