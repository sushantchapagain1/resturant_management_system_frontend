import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../css/tables.css";
import { getProduct } from "../services/productService";
import { Link } from "react-router-dom";

const Products = () => {
  const { isLoading, data } = useQuery(["get-products"], getProduct);
  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <div className="product_wrapper">
          <Link to="/addProduct" className="add_btn">
            Add Product
          </Link>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.data.products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
