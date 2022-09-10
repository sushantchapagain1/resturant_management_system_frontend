import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Soft drink</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Pizza</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Hard drink</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Hard drink</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Hard drink</th>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Noodles</th>
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

export default Category;
