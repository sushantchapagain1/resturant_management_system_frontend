import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { addCategory, updateCategory } from "../services/categoryService";
import toast, { Toaster } from "react-hot-toast";

const AddCategory = () => {
  const [name, setcategoryName] = useState("");
  const [editState, setEditState] = useState(false);
  const [editValue, setEditValue] = useState("");

  const cache = useQueryClient();

  const { mutateAsync: handleSubmit } = useMutation(
    editState ? updateCategory : addCategory
  );
  const handleCategorySubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleSubmit(
      { name },
      {
        onError: (err: any) => {
          toast.error(err.response?.data.message);
          console.error(err.response.data.message);
        },
        onSuccess: () => {
          setcategoryName("");
          toast.success("category created sucessfully");
          cache.invalidateQueries(["get-category"]);
        },
      }
    );
  };
  return (
    <div>
      <Navbar />
      <div className="form__container container">
        <form>
          <div className="input__wrapper">
            {editState ? <h2>Edit Category</h2> : <h2>Add a Category</h2>}
            {editState ? (
              <input
                type="text"
                name="name"
                placeholder="category name"
                value={name}
                onChange={(e) => setEditValue(e.target.value)}
                required
              />
            ) : (
              <input
                type="text"
                name="name"
                placeholder="category name"
                value={name}
                onChange={(e) => setcategoryName(e.target.value)}
                required
              />
            )}
            <button type="submit" onClick={handleCategorySubmit}>
              Submit
            </button>

            <Toaster />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddCategory;
