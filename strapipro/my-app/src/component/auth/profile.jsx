"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p className="text-center mt-10 text-black">Loading profile...</p>;
  }
  return (
    <div>

      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] ">
          <Navbar />
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-20">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className='leading-8'><strong>ID:</strong> {user.id}</p>
      <p className='leading-8'><strong>Username:</strong> {user.username}</p>
      <p className='leading-8'><strong>Email:</strong> {user.email}</p>
      <p className='leading-8'><strong>Provider:</strong> {user.provider}</p>
      <p className='leading-8'><strong>Confirmed:</strong> {user.confirmed ? "Yes" : "No"}</p>
      <p className='leading-8'><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      </div>
        </div>
      </div>  
    </div>
  )
}

export default Profile