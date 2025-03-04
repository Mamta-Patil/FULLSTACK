import React from 'react'

const Team = () => {
    const timelineData = [
        {
            year: "1999",
            title: "How we Grow Up",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2010",
            title: "New Branch Open",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2015",
            title: "Extended Law Team",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2024",
            title: "Best Law Team",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
    ]
    return (
        <div className=' relative'>
            <div className="absolute bottom-32 transform -translate-y-1/2  border-b-2 w-full h-full border-black">  </div>
            <p className='pt-20'>Have any Questions?</p>
            <p className='text-lg'>Meet Our Excellent Team</p>

            <div className='flex mt-20'>
                {timelineData.map((el, index) => (
                    // <div key={el.id} {(index  %2 ===0)? (className="order-2"):(className="order-1")} >
                    <div key={el.id} className=''>
                        {(index % 2 === 0) ? (
                            <div className='h-[180px] '>
                                <p className='text-pink-500 text-5xl text-center' > {el.year} </p>
                            </div>
                        ) :
                         (
                            < div className='h-[180px]'>
                                <p className='text-2xl font-serif text-center'>{el.title}  </p>
                                <p className='text-lg font-seri text-center'> {el.description} </p>
                            </div>

                        )}
                        {(index % 2 == 0) ? (
                            <div className='h-[180px] '>
                                <p className='text-2xl font-serif text-center'>{el.title}  </p>
                                <p className='text-lg font-serif text-center'> {el.description} </p>
                            </div>
                        ) : (
                            <div className='h-[180px] '>
                                <p className='text-pink-500 text-5xl  text-center mt-10'> {el.year} </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
