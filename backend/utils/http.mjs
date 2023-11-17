import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });


let baseUrl = process.env.BASE_URL;
//let baseUrl = 'http://localhost:3000/'
console.log(baseUrl)

const responseType = {
  status: 'Not found',
  statusCode: 404,
  error: null,
  data: null,
};

const fetchData = async (endpoint, id = null) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  let url = `${baseUrl}${endpoint}`;
console.log("endpoint o id, url", endpoint, id, url)

  if (id !== null) {
    url = url + `/${id}`;
  } 
  else {
    url += '?_sort=id&_order=desc';
  }

  const response = await fetch(url, options);

  if (response.ok) {
    const result = await response.json();

    responseType.status = 'Success';
    responseType.statusCode = 200;
    responseType.data = result;
    console.log("Vilken error inne i ok", responseType.error)

    return responseType;
  } else {
    responseType.error = 'Couldnt find what you were looking for...';
    return responseType;
  }
};

const addData = async (body) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 201) {
    responseType.statusCode = 500;
    responseType.status = 'Error';
    responseType.error = 'Something went wrong when saving data';
    return responseType;
  } else {
    const result = await response.json();
    responseType.statusCode = 201;
    responseType.status = 'Success';
    responseType.data = result;
    return responseType;
  }
};

export { fetchData, addData };