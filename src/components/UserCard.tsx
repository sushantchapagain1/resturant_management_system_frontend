import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteUser } from "../services/userService";

type UserProps = {
  user: { id: string; name: string; email: string; role: string };
};

const UserCard = (props: UserProps) => {
  const { mutate: removeUser } = useMutation(deleteUser);
  const cache = useQueryClient();
  const handleProductDelete = (e: any) => {
    e.preventDefault();
    removeUser(props.user.id, {
      onError: (err: any) => {
        toast.error(err.response?.data.message);
      },
      onSuccess: () => {
        toast.success("User Deleted Successfully");
        cache.invalidateQueries(["get-users"]);
      },
    });
  };

  return (
    <tr>
      <th>{props.user.name}</th>
      <td>{props.user.email}</td>
      <td>{props.user.role}</td>
      <td className="action-btn">
        <Link to={`/updateUser/${props.user.id}`}>Edit</Link>
      </td>
      <td className="action-btn">
        <button onClick={handleProductDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default UserCard;
