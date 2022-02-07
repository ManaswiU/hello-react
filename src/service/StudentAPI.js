
let serviceEndPoint = "https://nodeapi.pyther.com/api/student";
export var getStudents = async () => {
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
export var addStudent = async (student) => {
    return fetch(serviceEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(student)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}
export var getStudentId = async (studentId) => {
    return fetch(serviceEndPoint+"/"+studentId, {
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

export var deleteStudent = async (student) => {
    return fetch(serviceEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(student)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}

export var updateStudent = async(student) => {
    return fetch(serviceEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(student)
        })
      .then(response => response.json())
      .then(response => {
        return response;
  })
    .catch(function(error) {
      console.log(error);
  });
}