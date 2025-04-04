// const BASE_URL = 'http://localhost:1337/api/products';

// export const getBlogs = async () => {
//   const res = await fetch(BASE_URL);
//   const data = await res.json();
//   return data.data;
// };

// export const getBlog = async (id) => {
//   const res = await fetch(`${BASE_URL}/${id}`);
//   const data = await res.json();
//   return data.data;
// };

// export const createBlog = async (blog) => {
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ data: blog }),
//   });
//   return res.json();
// };

// export const updateBlog = async (id, blog) => {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ data: blog }),
//   });
//   return res.json();
// };

// export const deleteBlog = async (id) => {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE',
//   });
//   return res.json();
// };
// // import axios from 'axios';

// // const BASE_URL = 'http://localhost:1337/api/products';

// // export const getBlogs = async () => {
// //   const res = await axios.get(BASE_URL);
// //   return res.data.data;
// // };

// // export const getBlog = async (id) => {
// //   const res = await axios.get(`${BASE_URL}/${id}`);
// //   return res.data.data;
// // };

// // export const createBlog = async (blog) => {
// //   const res = await axios.post(BASE_URL, { data: blog });
// //   return res.data;
// // };

// // export const updateBlog = async (id, blog) => {
// //   const res = await axios.put(`${BASE_URL}/${id}`, { data: blog });
// //   return res.data;
// // };

// // export const deleteBlog = async (id) => {
// //   const res = await axios.delete(`${BASE_URL}/${id}`);
// //   return res.data;
// // };
import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api/products';

export const getBlogs = async () => {
  const res = await axios.get(BASE_URL);
  return res.data.data;
};

export const getBlog = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data.data;
};

export const createBlog = async (productData) => {
  const res = await axios.post(BASE_URL, productData,{
    headers:{
        "Content-Type":"application/json"
    }
  });
  return res.data.data;
};

export const updateBlog = async (id, blog) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { data: blog });
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
