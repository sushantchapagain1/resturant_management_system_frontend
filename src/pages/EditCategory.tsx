import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { updateCategory } from "../services/categoryService";
import toast, { Toaster } from "react-hot-toast";

const EditCategory = () => {
  const [name, updatecategoryName] = useState("");
  const {
    mutateAsync: handleUpdate,
    isSuccess,
    isError,
    data,
  } = useMutation(updateCategory);
  const handleUpdateSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleUpdate(
      { name },
      {
        onError: (err: any) => {
          toast.error(err.response?.data.message);
          console.error(err.response.data.message);
        },
        onSuccess: () => {
          toast.success("category updated sucessfully");
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
            <h2>Add a Category</h2>
            <input
              type="text"
              name="name"
              placeholder="category name"
              value={name}
              onChange={(e) => updatecategoryName(e.target.value)}
              required
            />
            <button type="submit" onClick={handleUpdateSubmit}>
              Update
            </button>
            <Toaster />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditCategory;
