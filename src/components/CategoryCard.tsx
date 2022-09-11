import React from "react";
import { Link } from "react-router-dom";
type CategoryCardProps = {
  category: { id: string; name: string };
};
const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <tr>
      <th>{props.category.name}</th>
      <td className="action-btn">
        <Link to={`/category/${props.category.id}`}>Edit</Link>
      </td>

      <td className="action-btn">Delete</td>
    </tr>
  );
};

export default CategoryCard;
