import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import CategoryForm from "../components/CategoryForm";

const AddCategory = () => {
  return (
    <div>
      <Navbar />
      <CategoryForm mode="create" />
      <Footer />
    </div>
  );
};

export default AddCategory;
