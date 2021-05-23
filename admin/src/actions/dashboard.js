import axios from 'axios';

export const fetchEmployees = (params = {}) => {
    axios.get('http://localhost:3001/api/employees', {
        params:params,
        crossdomain: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
};

