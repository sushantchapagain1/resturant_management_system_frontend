import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../css/tables.css";
import { getProduct } from "../services/productService";
import { useCategory } from "../hooks/categoryHook";

const Products = () => {
  const { isLoading, data } = useQuery(["get-products"], getProduct);

  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
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

      <Footer />
    </div>
  );
};

export default Products;
