import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteProduct } from "../services/productService";

type ProductCardProps = {
  product: { id: string; name: string; price: number };
};

const ProductCard: React.FC<ProductCardProps> = (productProps) => {
  const cache = useQueryClient();
  const { mutate: delHandler, isLoading, isError } = useMutation(deleteProduct);
  const handleProductDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    delHandler(productProps.product.id, {
      onError: (err: any) => {
        toast.error(err.response?.data.message);
      },
      onSuccess: () => {
        toast.success("Product Deleted Successfully");
        cache.invalidateQueries(["get-products"]);
      },
    });
  };
  return (
    <tr>
      <th>{productProps.product.name}</th>
      <td>{productProps.product.price}</td>
      <td>Soft Drinks</td>
      <td className="action-btn">
        <Link to={`/updateProduct/${productProps.product.id}`}>Edit</Link>
      </td>
      <td className="action-btn">
        <button onClick={handleProductDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductCard;
