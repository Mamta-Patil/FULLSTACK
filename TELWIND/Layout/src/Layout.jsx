import React from 'react'

const Layout = () => {
    const blogdata = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            button: "Cooking",
            title: "Simple Salad recipe recipe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        }
    ]
    return (
        <div>
            <div className="grid grid-cols-3">
                {blogdata.map((el, index) => (
                    <div key={index}>
                {/* <div className=""> */}
                        <div className="">
                           <div className="images">
                                <img src={el.image} alt="" />
                            </div>
                            <div className="content">
                                <p className='text-3xl font-bold underline'> {el.title} </p>
                                <p> {el.description} </p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Layout
