'use server';
import { deleteBlog } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function handleDeleteAction(formData) {
  const documentId = formData.get('id');
  await deleteBlog(documentId);
  redirect('/blog');
}



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
