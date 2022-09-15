import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../css/tables.css";
import { getUsers } from "../services/loginService";

type userData = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const User = () => {
  const { data, isLoading, isError } = useQuery(["get-users"], getUsers, {
    retry: false,
  });

  return (
    <div>
      <Navbar />
      <div className="container table__wrapper">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>403 forbidden </h1>
        ) : (
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
              {data?.data.data.users.map((user: userData) => (
                <tr key={user.id}>
                  <th>{user.name}</th>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default User;
