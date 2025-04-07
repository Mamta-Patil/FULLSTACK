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

// export const getBlogs = async () => {
//   const res = await axios.get(BASE_URL);
//   console.log(res)
//   return res.data.data;
// };


export const getblogs = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/products?populate=*');
    console.log('Fetched:', res.data.data); 
    // console.log('Fetched:', res.data.images); 
    return res.data.data
  } catch (error) {
    console.error('Fetch failed:', error);
    return [];
  }
};


// export const getblogs = async () => {
//   try {
//     const res = await axios.get('http://localhost:1337/api/products?populate=*');

//     return res.data.data.map((item) => {
//       const attrs = item.attributes;

//       return {
//         documentId: item.id,
//         name: attrs.name,
//         createdAt: attrs.createdAt,
//         image: attrs.image?.data?.map((img) => ({
//           id: img.id,
//           name: img.attributes.name,
//           url: `http://localhost:1337${img.attributes.url}`,
//         })) || [],
//       };
//     });
//   } catch (error) {
//     console.error('Fetch failed:', error);
//     return [];
//   }
// };



export const getBlog = async (documentId) => {
  const res = await axios.get(`${BASE_URL}/${documentId}`);
  return res.data?.data;
};

export const createBlog = async (productData) => {
  const res = await axios.post(BASE_URL, productData,{
    headers:{
        "Content-Type":"application/json",
        // "Content-Type": "multipart/form-data"
    }
  });
  return res.data.data;
};
// 'Authorization': `Bearer ${token}`, //
export const updateBlog = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { data: {
    name: data.name,
  }, });
  return res.data.data;
};

// import axios from 'axios';

const API_URL = 'http://localhost:1337/api';
export const registerUser = async ({ username, email, password }) => 
    {
      try 
      {
        const res = await axios.post(`${API_URL}/auth/local/register`, {username,email,password,});
        return { success: true, data: res.data };
      } 
      catch (err) 
      {
        const message = err?.response?.data?.error?.message || 'Registration failed';
        return { success: false, message };
      }
    };
    
export const loginUser = async ({ identifier, password }) => {
    try 
    {
      const res = await axios.post(`${API_URL}/auth/local`, {identifier,password,});
      return { success: true, data: res.data };
    } 
    catch (err) 
    {
      const message = err?.response?.data?.error?.message || 'Login failed';
      return { success: false, message };
    }
  };

// export const deleteBlog = async (id) => {
//   const res = await axios.delete(`${BASE_URL}/${id}`);
//   return res.data;
// };

export const deleteBlog = async (documentId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${documentId}`);
      return res.data;
    } catch (error) {
      console.error("Delete error:", error?.response?.data || error.message);
      throw error;
    }
  };