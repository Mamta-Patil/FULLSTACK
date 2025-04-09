'use server';

export async function addBlog(formData) {
  const name = formData.get('name');
  const image = formData.get('image'); // assuming 1 image via URL
  const locale = formData.get('locale');

  const res = await fetch(`http://localhost:1337/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        name,
        locale,
        image: [
          {
            url: image,
          },
        ],
      },
    }),
  });

  if (!res.ok) {
    console.error('Failed to create blog');
  }
}
