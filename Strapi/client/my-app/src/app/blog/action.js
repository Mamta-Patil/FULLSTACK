'use server';
import { deleteBlog } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function handleDeleteAction(formData) {
  const documentId = formData.get('id');
  await deleteBlog(documentId);
  redirect('/blog');
}
