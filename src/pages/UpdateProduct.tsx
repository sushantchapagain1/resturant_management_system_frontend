import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { getProductByID } from "../services/productService";

const UpdateProduct = () => {
  const params = useParams();
  const { data } = useQuery(["product", params.id], async () => {
    const response = await getProductByID(params?.id ?? "");
    return response.data.data?.product;
  });

  return (
    <div>
      <Navbar />
      <ProductForm mode="edit" data={data} />
      <Footer />
    </div>
  );
};

export default UpdateProduct;
