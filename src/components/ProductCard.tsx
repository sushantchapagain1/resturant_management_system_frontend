import React from "react";

type ProductCardProps = {
  product: { name: string; price: number };
};
const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <tr>
      <th>{props.product.name}</th>
      <td>{props.product.price}</td>
      <td>Soft Drinks</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  );
};

export default ProductCard;
