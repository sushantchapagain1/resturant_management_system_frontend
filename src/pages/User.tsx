import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import UserCard from "../components/UserCard";
import "../css/tables.css";
import { useUsers } from "../hooks/userHooks";

const User = () => {
  const users = useUsers();
  const { isError, isLoading } = useUsers();
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
              {users.data?.data.data.users.map((user: any) => (
                <UserCard key={user.id} user={user} />
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
