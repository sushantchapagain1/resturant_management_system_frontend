import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
import { getProduct } from "../services/productService";
const Orders = () => {
  const { isLoading, data } = useQuery(["get-orders"], getProduct);
  console.log(data?.data.data.products);
  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>User</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.data.products.map((order: any) => (
              <tr key={order.id}>
                <th>Pizza</th>
                <td>Sushant Chapagain</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
