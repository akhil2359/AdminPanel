import axios from "axios";

export const fetchEmployees = async (params = {}) => {
  axios
    .get("https://akhilsapps.herokuapp.com/api/employees", {
      params: params,
      crossdomain: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
};
