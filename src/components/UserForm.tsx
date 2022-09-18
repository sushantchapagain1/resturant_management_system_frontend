import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../services/userService";

const UserForm = (props: any) => {
  const { mutate: update } = useMutation(updateUser);
  const cache = useQueryClient();
  const handleUserSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      role: string;
    };
    console.log(data);
    update(
      {
        id: props.data?.user.id,
        name: data.name,
        email: data.email,
        role: data.role,
      },
      {
        onError: (err: any) => {
          toast.error(err.response?.data.message);
        },
        onSuccess: () => {
          toast.success(`User updated sucessfully`);
          cache.invalidateQueries(["get-users"]);
        },
      }
    );
  };

  return (
    <div className="form__container container">
      <form onSubmit={handleUserSubmit}>
        <div className="input__wrapper">
          <h2>
            Edit {props.data?.user.name} | {props.data?.user.role}
          </h2>

          <input
            type="text"
            name="name"
            defaultValue={props.data?.user.name}
            placeholder="User name"
            readOnly
          />

          <input
            type="text"
            name="email"
            defaultValue={props.data?.user.email}
            placeholder="User email"
            readOnly
          />

          <select name="role">
            <option value="" disabled>
              Select Roles
            </option>
            <option value="Customer"> Customer</option>
            <option value="Manager"> Manager</option>
            <option value="Admin"> Admin</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
