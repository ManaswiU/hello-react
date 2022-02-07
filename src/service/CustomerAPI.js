
let serviceEndPoint = "https://nodeapi.pyther.com/customer";
export var getCustomers = async () => {
    return fetch(serviceEndPoint, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}
export var addCustomer = async (customer) => {
    return fetch(serviceEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}
export var getCustomerById = async (customerId) => {
    return fetch(serviceEndPoint+"/"+customerId, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}

export var deleteCustomer = async (customer) => {
    return fetch(serviceEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}

export var updateCustomer = async(customer) => {
    return fetch(serviceEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}