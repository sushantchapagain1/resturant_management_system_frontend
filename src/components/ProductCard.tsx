import React from "react";

type ProductCardProps = {
  product: { name: string; price: number };
};
const ProductCard: React.FC<ProductCardProps> = (productProps) => {
  return (
    <tr>
      <th>{productProps.product.name}</th>
      <td>{productProps.product.price}</td>
      <td>Soft Drinks</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  );
};

export default ProductCard;
