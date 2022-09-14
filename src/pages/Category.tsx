import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
import { useCategory } from "../hooks/categoryHook";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

const Category = () => {
  const category = useCategory();
  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <div className="category_wrapper">
          <Link to="/addcategory" className="add_btn">
            Add Category
          </Link>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.data?.data.data.categories.map((category: any) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
