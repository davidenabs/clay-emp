import { useNavigate } from "react-router-dom";

const useNavigateTo = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const navigateToLoanManagementShow = (transactionId) => {
    navigate(`/loan-management/${transactionId}`);
  };

  const navigateToStaffTransactions = (staffId) => {
    navigate(`/loan-management/staff/${staffId}`);
  };

  const navigateToStaffProfile = (staffId) => {
    navigate(`/staff-management/staff-profile/${staffId}`);
  };

  return {
    navigateToLogin,
    navigateToHome,
    navigateToDashboard,
    navigateToLoanManagementShow,
    navigateToStaffTransactions,
    navigateToStaffProfile,
  };
};

export default useNavigateTo;
