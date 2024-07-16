import { generateQueryString } from "../utils/queryUtils";

const BASE_URL = "/employer";

const ENDPOINTS = {
  LOGIN: `/auth/employer/login`,
  REGISTER: `/auth/employer/register`,
  STAFFS_SPENDING: (page = 1, itemsPerPage = 10) => {
    const queryParams = generateQueryString({
      limit: itemsPerPage,
      page: page,
      sort: "createdAt",
      sortType: "desc",
    });
    return `${BASE_URL}/transactions/staffs-spending?${queryParams}`;
  },
  STAFF_TRANSACTION: (staffId, page = 1, itemsPerPage = 10) => {
    const queryParams = generateQueryString({
      limit: itemsPerPage,
      page: page,
      sort: "createdAt",
      sortType: "desc",
    });
    return `${BASE_URL}/transactions/staff-spending/${staffId}?${queryParams}`;
  },
  STAFFS_BY_ID: (staffId) => `/employer/staffs/${staffId}`,
  STAFFS_LOAN: `${BASE_URL}/loans/staffs`,
  STAFFS_SPENDING_BY_ID: (transactionId) =>
    `/employer/transactions/staff/${transactionId}`,
  STAFFS: (page = 1, itemsPerPage = 10) => {
    const queryParams = generateQueryString({
      limit: itemsPerPage,
      page: page,
      sort: "createdAt",
      sortType: "desc",
    });
    return `${BASE_URL}/staffs?${queryParams}`;
  },
  UPDATE_D: (userId) => `/xxse/${userId}/d`,
  // Add more endpoints here...
};

export default ENDPOINTS;

// const ENDPOINTS = {
//   LOGIN: "/auth/employer/login",
//   REGISTER: "/employer/auth/employer/register",
//   STAFFS_SPENDING: "/employer/transactions/staffs-spending?limit=${itemsPerPage}&page=${page}&sort=createdAt&sortType=desc",
//   STAFFS_SPENDING_BY_ID: (transactionId) =>
//     `/employer/transactions/staff/${transactionId}`,
//   STAFFS: "/employer/staffs",
//   STAFFS_BY_ID: (staffId) => `/employer/staffs/${staffId}`,
//   STAFF_TRANSACTION: (staffId, page, itemsPerPage) =>
//     `/employer/transactions/staff-spending/${staffId}?limit=${itemsPerPage}&page=${page}&sort=createdAt&sortType=desc`,
//   STAFFS_LOAN: "/employer/loans/staffs",

//   UPDATE_D: (userId) => `/xxse/${userId}/d`,
//   // Add more endpoints here... staff-spending/:staffId
// };
// export default ENDPOINTS;
