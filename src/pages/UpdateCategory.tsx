import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { getCategoryByID } from "../services/categoryService";
import CategoryForm from "../components/CategoryForm";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const params = useParams();
  const { data } = useQuery(["category", params.id], async () => {
    const response = await getCategoryByID(params?.id ?? "");
    return response.data.data?.category;
  });

  return (
    <div>
      <Navbar />
      <CategoryForm mode="edit" data={data} />
      <Footer />
    </div>
  );
};

export default UpdateCategory;
