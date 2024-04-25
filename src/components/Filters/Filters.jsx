export const Filters = ({
  products,
  users,
  categories,

  userId,
  setUserId,
  setVisibleProducts,
}) => {
  const filterByUserId = id =>
    products.filter(product => product.user.id === id);

  // const filterBySearch = query =>
  //   products.filter(product =>
  //     product.name.toLowerCase().includes(query.trim().toLowerCase()),
  //   );

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            onClick={() => {
              setUserId('');
              setVisibleProducts(products);
            }}
          >
            All
          </a>

          {users.map(user => (
            <a
              data-cy="FilterUser"
              href="#/"
              key={user.id}
              onClick={() => {
                setUserId(user.id);
                setVisibleProducts(filterByUserId(user.id));
              }}
              className={user.id === userId ? 'is-active' : ''}
            >
              {user.name}
            </a>
          ))}
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value=""
              onChange=""
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            <span className="icon is-right">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button data-cy="ClearButton" type="button" className="delete" />
            </span>
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
          >
            All
          </a>

          {categories.map(category => (
            <a
              data-cy="Category"
              className="button mr-2 my-1"
              href="#/"
              key={category.id}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
