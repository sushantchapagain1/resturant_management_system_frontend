import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCategory } from "../hooks/categoryHook";
import { addProduct, updateProduct } from "../services/productService";

type ProductFormProps = {
  mode: "edit" | "create";
  data?: { name: string; price?: number; categoryId: string; id: string };
};

const ProductForm = (props: ProductFormProps) => {
  const category = useCategory();
  const cache = useQueryClient();
  const { mutate: add } = useMutation(addProduct);
  const { mutate: update } = useMutation(updateProduct);
  const handleProductSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData) as {
      price: any;
      name: string;
      categoryId: string;
    };
    const dataPrice = Number(data.price);
    const postSubmitProps = {
      onError: (err: any) => {
        toast.error(err.response?.data.message);
      },
      onSuccess: () => {
        toast.success(
          `Product ${
            props.mode === "edit" ? "Updated" : " Created"
          } sucessfully`
        );
        cache.invalidateQueries(["get-products"]);
      },
    };
    if (props.mode === "edit") {
      update(
        {
          id: props.data?.id,
          name: data.name,
          price: dataPrice,
          categoryId: data.categoryId,
        },
        postSubmitProps
      );
    } else {
      add(
        {
          name: data.name,
          price: dataPrice,
          categoryId: data.categoryId,
        },
        postSubmitProps
      );
    }
  };

  return (
    <div className="form__container container">
      <form onSubmit={handleProductSubmit}>
        <div className="input__wrapper">
          <h2>{props.mode === "edit" ? "Edit" : "Add"} Product</h2>

          <input
            type="text"
            name="name"
            defaultValue={props.data?.name}
            placeholder="Product name"
          />

          <input
            type="number"
            name="price"
            defaultValue={props.data?.price}
            placeholder="Product price"
            min={1}
          />

          <select name="categoryId">
            <option value="" disabled>
              Select Category
            </option>
            {category.data?.data.data.categories.map((category: any) => (
              <option key={category.id} value={`${category.id}`}>
                {category.name}
              </option>
            ))}
          </select>

          <button type="submit">
            {props.mode === "edit" ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
