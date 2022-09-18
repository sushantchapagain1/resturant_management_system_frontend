import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import UserForm from "../components/UserForm";
import { getUserByID } from "../services/userService";

const UpdateUser = () => {
  const params = useParams();
  const { data } = useQuery(["users", params.id], async () => {
    const response = await getUserByID(params?.id ?? "");
    return response.data.data;
  });

  return (
    <div>
      <Navbar />
      <UserForm data={data} />
      <Footer />
    </div>
  );
};

export default UpdateUser;
