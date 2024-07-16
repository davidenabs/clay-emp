// import useApi from "../hooks/useApi";
// import config from "../config";
// import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

// const getHeaders = () => {
//   const token = useAuthHeader() || null;
//   return {
//     "Content-Type": "application/json",
//     Authorization: token,
//   };
// };

// class ApiMethods {
//   static apiRequest(method, url, body = {}) {
//     url = config.base_uri + url;
//     return new Promise((resolve, reject) => {
//       const { fetchData } = useApi(url, {
//         headers: getHeaders(),
//         method: method,
//       });
//       fetchData({ body });
//     });
//   }

//   static get(url) {
//     return this.apiRequest("GET", url);
//   }

//   static post(url, data) {
//     return this.apiRequest("POST", url, data);
//   }

//   static put(url, data) {
//     return this.apiRequest("PUT", url, data);
//   }

//   static patch(url, data) {
//     return this.apiRequest("PATCH", url, data);
//   }

//   static delete(url, data) {
//     return this.apiRequest("DELETE", url, data);
//   }
// }

// export default ApiMethods;
