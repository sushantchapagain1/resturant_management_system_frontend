import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
const Orders = () => {
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
            <tr>
              <th>Fanta</th>
              <td>Sushant Chapagain</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Coke</th>
              <td>Sushant Chapagain</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Pizza</th>
              <td>lexus</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Pasta</th>
              <td>lexus</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
