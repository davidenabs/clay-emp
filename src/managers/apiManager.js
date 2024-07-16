import ENDPOINTS from "../constants/endpoints";
import useApiMethods from "../hooks/useApiMethods";

const createApiManager = () => {
  const { get, post } = useApiMethods();

  return {
    login: (data) => {
      const url = ENDPOINTS.LOGIN;
      return post(url, data);
    },
    register: (data) => {
      const url = ENDPOINTS.REGISTER;
      return post(url, data);
    },
    getStaffSpending: (page = 1, itemsPerPage = 10) => {
      const url = ENDPOINTS.STAFFS_SPENDING(page, itemsPerPage);
      return get(url);
    },
    getStaffSpendingById: (transactionId) => {
      const url = ENDPOINTS.STAFFS_SPENDING_BY_ID(transactionId);
      return get(url);
    },
    getStaffs: () => {
      const url = ENDPOINTS.STAFFS;
      return get(url);
    },
    getStaffById: (staffId) => {
      const url = ENDPOINTS.STAFFS_BY_ID(staffId);
      return get(url);
    },
    getStaffTransactions: (staffId, page = 1, itemsPerPage = 10) => {
      const url = ENDPOINTS.STAFF_TRANSACTION(staffId, page, itemsPerPage);
      return get(url);
    },
    getStaffsLoans: () => {
      const url = ENDPOINTS.STAFFS_LOAN;
      return get(url);
    },
    getStaffs: (page = 1, itemsPerPage = 10) => {
      const url = ENDPOINTS.STAFFS(page, itemsPerPage);
      return get(url);
    },
  };
};
// STAFFS
export default createApiManager;
