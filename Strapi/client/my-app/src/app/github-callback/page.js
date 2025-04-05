// 'use client';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function GitHubCallback() {
//   const router = useRouter();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const accessToken = params.get('access_token') || null;

//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('http://localhost:1337/api/users/me', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         const user = await response.json();
//         localStorage.setItem('token', accessToken);
//         router.push('/blog');
//       } catch (error) {
//         console.error('GitHub auth failed', error);
//         router.push('/login');
//       }
//     };

//     if (accessToken) fetchProfile();
//   }, []);

//   return <div className="text-center mt-10 text-lg">Logging in with GitHub...</div>;
// }
'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GitHubCallback() {
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const access_token = query.get('access_token'); // or `jwt`

    if (access_token) {
      localStorage.setItem('token', access_token);
      router.push('/blog');
    } else {
      alert('GitHub login failed.');
      router.push('/login');
    }
    
  }, []);

  return <p>Logging you in via GitHub...</p>;
}
