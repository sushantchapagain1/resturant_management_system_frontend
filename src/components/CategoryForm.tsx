import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCategory, updateCategory } from "../services/categoryService";

type CategoryFormProps = {
  mode: "edit" | "create";
  data?: { name: string; id: string };
};
const CategoryForm = (props: CategoryFormProps) => {
  const cache = useQueryClient();

  const { mutate: add } = useMutation(addCategory);
  const { mutate: update } = useMutation(updateCategory);
  const handleCategorySubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) as { name: string };
    const postSubmitProps = {
      onError: (err: any) => {
        toast.error(err.response?.data.message);
      },
      onSuccess: () => {
        toast.success(
          `category ${
            props.mode === "edit" ? "Updated" : " Created"
          } sucessfully`
        );
        cache.invalidateQueries(["get-category"]);
      },
    };
    if (props.mode === "edit") {
      update(
        {
          id: props.data?.id,
          name: data.name,
        },
        postSubmitProps
      );
    } else {
      add(
        {
          name: data.name,
        },
        postSubmitProps
      );
    }
  };
  return (
    <div className="form__container container">
      <form onSubmit={handleCategorySubmit}>
        <div className="input__wrapper">
          <h2>{props.mode === "edit" ? "Edit" : "Add"} a Category</h2>

          <input
            type="text"
            name="name"
            defaultValue={props.data?.name}
            placeholder="category name"
          />

          <button type="submit">
            {props.mode === "edit" ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
