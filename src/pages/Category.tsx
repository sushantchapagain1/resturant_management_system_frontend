import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/categoryService";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const { isSuccess, data } = useQuery(["get-category"], getCategory);
  useEffect(() => {
    if (isSuccess) {
      setCategories(data?.data.data.categories);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <Link to="/addcategory">Add Category</Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
