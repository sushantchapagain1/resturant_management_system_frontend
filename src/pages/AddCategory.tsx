import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { addCategory } from "../services/categoryService";
import toast, { Toaster } from "react-hot-toast";

const AddCategory = () => {
  const [name, setcategoryName] = useState("");
  const {
    mutateAsync: handleSubmit,
    isSuccess,
    isError,
    data,
  } = useMutation(addCategory);
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
              id="category_input"
              onChange={(e) => setcategoryName(e.target.value)}
              required
            />
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
