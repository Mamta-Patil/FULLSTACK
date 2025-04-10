'use server';
import { deleteBlog, getBlog, getblogs } from '@/lib/api';
import { redirect } from 'next/navigation';

// export async function handleDeleteAction(formData) {
//   const documentId = formData.get('id');
//   console.log("documentId",documentId)

//   await deleteBlog(documentId);
//   redirect('/blog');
// }



export const handleDeleteAction = async (productId) => {
  try {
    const isDeleted = await deleteBlog(productId);
    if (!isDeleted) {
      const updatedProducts = await getblogs();
      setProducts(updatedProducts || []);
    }
     else {
      console.error('Failed to delete product:', productId);
      alert('Failed to delete product. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    alert('An error occurred while deleting the product.');
  }
};
// export const deleteBlog = async (documentId) => {
//   try {
//     const mainBlog = await getBlog(documentId); // This includes localizations
//     const localizationIds = mainBlog?.attributes?.localizations?.data?.map(loc => loc.id) || [];

//     // Delete localized blogs first
//     for (let locId of localizationIds) {
//       await axios.delete(`${BASE_URL}/${locId}`);
//     }

//     // Delete main blog
//     await axios.delete(`${BASE_URL}/${documentId}`);
//     return { success: true };
//   } catch (error) {
//     console.error("Delete error:", error);
//     throw error;
//   }
// };
