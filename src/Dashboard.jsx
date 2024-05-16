import DarkMode from "./DarkMode";
import withAuthentication from "./utils/withAuthentication";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
};
const AuthDashboard = DarkMode(withAuthentication(Dashboard));

export default AuthDashboard;
