import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  return (
    <div>
      <Navbar />
      <ProductForm mode="create" />
      <Footer />
    </div>
  );
};

export default AddProduct;
