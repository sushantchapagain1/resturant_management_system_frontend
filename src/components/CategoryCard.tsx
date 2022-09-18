import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { deleteCategory } from "../services/categoryService";

type CategoryCardProps = {
  category: { id: string; name: string };
};

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const cache = useQueryClient();
  const { mutateAsync: delHandler, isLoading } = useMutation(deleteCategory);
  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    delHandler(props.category.id, {
      onError: (err: any) => {
        toast.error(err.response?.data.message);
        console.error(err.response.data.message);
      },
      onSuccess: () => {
        toast.success("Category Deleted Successfully");
        cache.invalidateQueries(["get-category"]);
      },
    });
  };

  return (
    <tr>
      <th>{props.category.name}</th>
      <td className="action-btn">
        <Link to={`/updateCategory/${props.category.id}`}>Edit</Link>
      </td>

      <td className="action-btn">
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default CategoryCard;
