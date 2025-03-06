import React from "react";

export const Gallery = () => {
    const data = [
        { height: "h-48", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-64", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-40", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-56", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-200", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-60", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-40",img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-56", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-72", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-48", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-64", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-40", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-56", img: "https://flowbite.s3.apmazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-50",img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-60", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-64", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-40", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-56", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
        { height: "h-72",img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
        { height: "h-30", img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"},
    ];

    return (
        <div className="p-8">
          <div className="lg:columns-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className={`mb-4 ${item.height} ${item.bg} text-white rounded-lg p-4 shadow-md flex items-center justify-center`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="bg-black bg-opacity-50 px-2 py-1 rounded">{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      );
    };

// export default Gallery;