export const ProductList = ({ products }) => {
  return (
    <tbody>
      {products.map(product => {
        return (
          <tr data-cy="Product" key={product.id}>
            <td className="has-text-weight-bold" data-cy="ProductId">
              {product.id}
            </td>

            <td data-cy="ProductName">{product.name}</td>
            <td data-cy="ProductCategory">{`${product.category.icon} - ${product.category.title}`}</td>

            <td
              data-cy="ProductUser"
              className={
                product.user.sex === 'f' ? 'has-text-danger' : 'has-text-link'
              }
            >
              {product.user.name}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
