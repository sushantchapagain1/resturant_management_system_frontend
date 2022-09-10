import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../css/tables.css";

const url = "http://localhost:3000/api";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${url}/products`);
        setProducts(res.data.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
