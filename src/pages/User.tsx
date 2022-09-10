import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
const User = () => {
  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>lexus restro Admin</th>
              <td>lexusadminpro@restro.io</td>
              <td>Admin</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Sushant Chapagain</th>
              <td>sushant@test.io</td>
              <td>Manager</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Sushant Chapagain</th>
              <td>sushant@test.io</td>
              <td>Manager</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Sushant Chapagain</th>
              <td>sushant@test.io</td>
              <td>Manager</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>Sushant Chapagain</th>
              <td>sushant@test.io</td>
              <td>Manager</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>lexus restro Admin</th>
              <td>lexusadminpro@restro.io</td>
              <td>Admin</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <th>test</th>
              <td>test@restro.io</td>
              <td>Customer</td>
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

export default User;
