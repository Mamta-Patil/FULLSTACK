import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api/products';

export const createProduct = async (productData) => {
  const res = await axios.post(BASE_URL, { data: productData }, {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return res.data.data;
};


export const getproducts = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data?.data || [];
};


export const getProduct = async (documentId) => {
  const res = await axios.get(`${BASE_URL}/${documentId}`);
  console.log(
    documentId
  )
  console.log("res", res)
  console.log('data', res.data)
  return res.data?.data;
};


// Update product
export const updateProduct = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, {
    data: {
      Name: data.Name,
      Price:data.Price,
      Category:data.Category,
      Stock:data.Stock,
    },
  });
  return res.data.data;
};

// Delete product
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data.data;
  } catch (error) {
    console.error("Delete error:", error?.response?.data || error.message);
    throw error;
  }
};

const API_URL = 'http://localhost:1337/api';

export const registerUser = async ({ username, email, password,oraganizationName }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local/register`, { username, email, password, oraganizationName});
    return { success: true, data: res.data };
  }
  catch (err) {
    const message = err?.response?.data?.error?.message || 'Registration failed';
    return { success: false, message };
  }
};

export const loginUser = async ({ identifier, password }) => {
  try {
    const res = await axios.post(`${API_URL}/auth/local`, { identifier, password, });
    return { success: true, data: res.data };
  }
  catch (err) {
    const message = err?.response?.data?.error?.message || 'Login failed';
    return { success: false, message };
  }
};
 