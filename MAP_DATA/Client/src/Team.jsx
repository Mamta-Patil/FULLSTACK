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
        <div>
        <div className='hidden md:block lg:block sm:relative md:relative lg:relative'>
            <div className="sm:absolute md:absolute lg:absolute -bottom-16 left-7 transform -translate-y-1/2  border-b-4 w-[95%] h-full border- border-rose-800">  </div>
            <p className='pt-8 ps-5 font-serif text-lg'>Have any Questions?</p>
            <p className='text-lg ps-5'>Meet Our Excellent Team</p>
            <div className='hidden md:flex lg:flex mt-20'>
                {timelineData.map((el, index) => (
                    <div key={index} className=''>
                        {(index % 2 === 0) ? (
                            <div className='h-[180px] '>
                                <p className='text-pink-500 md:text-3xl lg:text-5xl text-center'> {el.year} </p>
                                <div className="relative lg:left-40 md:left-24 lg:top-7 md:top-12 rounded-full h-5 w-5 bg-rose-800 horizontal-line">
                                    <div className='absolute dot lg:top-5 md:top-5 left-2 h-16 w-1 bg-rose-800'></div>
                                </div>  
                            </div>
                        ) : 
                         (
                            < div className='lg:h-[180px] md:h-[200px]'>
                                <p className='lg:text-2xl lg:font-serif text-center'>{el.title}  </p>
                                <p className='lg:text-lg lg:font-serif text-center'> {el.description} </p>
                            </div>
                        )}
                        {(index % 2 == 0) ? (
                            <div className='h-[180px] '>
                                <p className='lg:text-2xl font-serif text-center'>{el.title}  </p>
                                <p className='lg:text-lg font-serif text-center'> {el.description} </p>
                            </div>
                        ) : (
                            <div className='h-[180px]'>
                                <div className="relative lg:left-44 md:left-24 lg-top-5 md:-top-8  h-20 w-1  bg-rose-800">
                                    <div className="absolute lg:top-[90%] md:top-[80%] -right-2  rounded-full h-5 w-5  bg-rose-800 "></div>
                                </div>
                                <p className='text-pink-500 lg:text-5xl md:text-3xl text-center'> {el.year} </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            </div>

            <div className='block md:hidden lg:hidden'>
                <p className='pt-8 ps-5 font-serif text-lg'>Have any Questions?</p>
                <p className='text-lg ps-5 font-serif'>Meet Our Excellent Team</p>
                {timelineData.map((el, index) => (
              <div className='relative  lg:none'>
                    <div key={index} className=''>
                            <div className='h-[120px] relative '>
                                <p className='text-pink-500 text-5xl text-center'> {el.year} </p>
                                <div className="absolute left-1/2 top-20 rounded-full h-5 w-5 bg-rose-800">
                                    <div className='absolute top-3 left-2  h-16 w-1  bg-rose-800'></div>
                                </div>  
                                 <div className="absolute -bottom-24 left-7 transform -translate-y-1/2  border-b-4 w-[92%] h-full border- border-rose-800">  </div>
                            </div>
                            < div className='h-[180px]'>
                                <p className='text-2xl font-serif text-center mt-10'>{el.title}  </p>
                                <p className='text-lg font-seri text-center'> {el.description} </p>
                            </div>
                    </div>
            </div>
                ))}
            </div>

        </div>
    )
}
export default Team
