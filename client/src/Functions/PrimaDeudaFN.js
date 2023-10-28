const Conection = 'http://localhost:5000/';


export const getData = (successCallback, errorCallback) => {
  fetch(Conection + "api/GetData", { 
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};


export const GetEstados = (successCallback, errorCallback) => {
  fetch(Conection + "api/GetEstados", { 
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};
