import React from 'react'

const Poster = () => {
  return (
    <div>
        <div className='mx-[390px] flex justify-center items-center mt-20 rounded-[20px]  overflow-hidden group	'>
            <img className=' h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] ' src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gate_promo_image.jpg" alt="" />
        </div>
    </div>
  )
}

export default Poster