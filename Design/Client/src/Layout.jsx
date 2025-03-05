import React from 'react'

const Layout = () => {
    const blogdata = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "6 min ago",
            comments: "39 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "10 days ago",
            comments: "0 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "16 years ago",
            comments: "9 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        }
    ]

    const blogdata2 = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "6 min ago",
            comments: "39 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "10 days ago",
            comments: "0 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "16 years ago",
            comments: "9 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "6 min ago",
            comments: "39 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "10 days ago",
            comments: "0 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            time: "16 years ago",
            comments: "9 comments",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        }
    ]
    return (
        <div className='px-8 py-5 mt-5'>
            <p className='text-blue-600'> Using Grid </p>
            <p className='text-xl text-blue-600 pb-5'>Cooking blog</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {blogdata.map((el, index) => (
                    <div key={index}>
                        <div className="rounded-t-lg bg-white shadow-xl">
                            <div className="relative images">
                                <img src={el.image} alt="" className='w-[100%] rounded-t-md' />
                                <button className='absolute p-2 border-none bg-blue-600 right-4 top-4 text-white'>{el.button} </button>
                            </div>
                            <div className="content px-5">
                                <p className='pt-3 text-xl'> {el.title} </p>
                                <p className='text-base pt-4'> {el.description} </p>
                            </div>
                            <div className="flex justify-between bg-black/10 mt-2 p-4 rounded-b-md">
                                <div>
                                    <p> {el.time}  </p>
                                </div>
                                <div>
                                    <p> {el.comments} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='mt-20'>
                <p className='text-blue-600 text-xl'> Using Flex </p>
                <div className="flex flex-wrap justify-evenly mt-5">
                    {blogdata2.map((el, index) => (
                        <div key={index}>
                            <div className="lg:max-w-sm sm:max-w-xs max-w-xs rounded-lg shadow-xl mt-6">
                                <div className="relative images">
                                    <img src={el.image} alt="" className='w-[100%] rounded-t-md' />
                                    <button className='absolute p-2 border-none bg-blue-600 right-4 top-4 text-white'>{el.button} </button>
                                </div>
                                <div className="px-5">
                                    <p className='pt-3 text-xl'> {el.title} </p>
                                    <p className='text-base pt-4'> {el.description} </p>
                                </div>
                                <div className="flex justify-between bg-black/10 mt-2 p-4 rounded-b-lg">
                                    <div>
                                        <p> {el.time}  </p>
                                    </div>
                                    <div>
                                        <p> {el.comments} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Layout
