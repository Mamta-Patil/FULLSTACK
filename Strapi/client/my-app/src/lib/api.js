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
// export const getBlogs = async () => {
//   const res = await axios.get(BASE_URL);
//   console.log(res)
//   return res.data.data;
// };


// export const getblogs = async () => {
//   try {
//     const res = await axios.get('http://localhost:1337/api/products?populate=*');
//     console.log('Fetched:', res.data.data); 
//     return res.data.data
//   } catch (error) {
//     console.error('Fetch failed:', error);
//     return [];
//   }
// };






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



import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api/products';

export const getblogs = async (locale = 'en') => {
  try {
    const res = await axios.get(`http://localhost:1337/api/products?populate=*&locale=${locale}`);
    console.log('Fetched:', res.data.data); 
    return res.data.data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return [];
  }
};

// export const getBlog = async (documentId) => {
//   const res = await axios.get(`${BASE_URL}/${documentId}`);
//   return res.data?.data;
// };

export const getBlog = async (documentId, locale = 'en') => {
  const res = await axios.get(`${BASE_URL}/${documentId}?locale=${locale}&populate=*`);
  return res.data?.data;
};


export const createBlog = async (productData) => {
  const res = await axios.post(BASE_URL, productData,{
    headers:{
        "Content-Type":"application/json",
    }
  });
  return res.data.data;
};

// export const updateBlog = async (id, data, locale = 'en') => {
//   const res = await axios.put(`${BASE_URL}/${id}?locale=${locale}`, {
//     data: {
//       name: data.name,
//       image: data.image,
//     },
//   });
//   return res.data.data;
// };

export const updateBlog = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { data: {
    name: data.name,
    image:data.image
  }, });
  return res.data.data;
};

export const deleteBlog = async (documentId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${documentId}`);
    return res.data;
  } catch (error) {
    console.error("Delete error:", error?.response?.data || error.message);
    throw error;
  }
};

// 'Authorization': `Bearer ${token}`, //

// create
// lib/api.js
// import axios from 'axios';

// const BASE_URL1 = 'http://localhost:1337/api/products'; // replace with your Strapi endpoint

// export const createBlog = async (blogData, imageFile) => {
//   const formData = new FormData();

//   // Append text fields
//   formData.append('data', JSON.stringify(blogData));

//   // Append file (assuming Strapi media field is named "image")
//   if (imageFile) {
//     formData.append('files.image', imageFile); // "image" should match the field name in Strapi
//   }

//   const res = await axios.post(BASE_URL, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   return res.data.data;
// };

// lib/api.js
// import axios from 'axios';

// const BASE_URL = 'http://localhost:1337/api/blogs';

// export const createBlog = async (blogData, imageFile) => {
//   const formData = new FormData();

//   // ✅ Send blog fields like name, published, etc.
//   formData.append('data', JSON.stringify(blogData));

//   // ✅ Attach the image to the correct media field
//   if (imageFile) {
//     formData.append('files.image', imageFile); // "image" must match the media field in Strapi
//   }

//   try {
//     const res = await axios.post('http://localhost:1337/api/products', formData);
//     return res.data;
//   } catch (error) {
//     console.error('Upload Error:', error.response?.data || error.message);
//     throw error;
//   }
// };


// export const createBlog = async (blogData) => {
//   console.log('FormData being sent:');
//   for (const pair of blogData.entries()) {
//     console.log(`${pair[0]}: ${pair[1]}`);
//   }
//   try {
//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       body: blogData, // FormData object, no headers needed (browser sets multipart/form-data)
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       console.log('Server Error Response:', errorData);
//       throw new Error('Failed to create blog');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// export const addLocalization = async (blogId, localizationData) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/${blogId}/localizations`, localizationData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.error("Add Localization Error:", error.response?.data || error);
//     throw error;
//   }
// };

// export const uploadImages = async (imageFormData) => {
//   try {
//     console.log("Uploading images:");
//     for (const pair of imageFormData.entries()) {
//       console.log(`${pair[0]}: ${pair[1]}`);
//     }
//     const res = await axios.post("http://localhost:1337/api/upload", imageFormData);
//     return res.data;
//   } catch (error) {
//     console.error("Upload Images Error:", error.response?.data || error);
//     throw error;
//   }
// };


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

// export const deleteBlog = async (documentId) => {
//     try {
//       const res = await axios.delete(`${BASE_URL}/${documentId}`);
//       return res.data;
//     } catch (error) {
//       console.error("Delete error:", error?.response?.data || error.message);
//       throw error;
//     }
//   };