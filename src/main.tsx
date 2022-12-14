import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Signup from "./components/Signup";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Category from "./pages/Category";
import User from "./pages/User";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import UpdateUser from "./pages/UpdateUser";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="orders" element={<Orders />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<User />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="updateCategory/:id" element={<UpdateCategory />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="updateProduct/:id" element={<UpdateProduct />} />
          <Route path="updateUser/:id" element={<UpdateUser />} />
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
