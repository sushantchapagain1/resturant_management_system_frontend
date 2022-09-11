import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { addCategory } from "../services/categoryService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          toast(err.response.data.message);
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
            <input
              type="text"
              name="name"
              placeholder="category name"
              value={name}
              onChange={(e) => setcategoryName(e.target.value)}
            />
            <button type="submit" onClick={handleCategorySubmit}>
              Submit
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddCategory;
