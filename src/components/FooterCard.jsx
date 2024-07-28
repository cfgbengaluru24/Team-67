import React from 'react'

const FooterCard = ({ title, imgSrc, number }) => {
    return (
        <div className='footer-card w-[400px] flex flex-col justify-center items-center gap-2 border-2 border-gray-300 p-7 rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition-all'>
            <div className='w-full h-[250px] overflow-hidden'>
                <img className='w-full h-full object-contain' src={imgSrc} alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-medium text-[2.3rem] text-gray-600'>{number}+</h2>
                <h2 className='font-semibold text-2xl text-gray-800'>{title}</h2>
            </div>
            <button className='text-blue-700 text-sm hover:underline hover:scale-105 transition-all'>Learn more</button>
        </div>
    )
}

FooterCard.defaultProps = {
    title: "Countries",
    imgSrc: "https://previews.123rf.com/images/stockgiu/stockgiu1811/stockgiu181105051/127678601-web-earth-globe-icon-with-gps-location-and-cloud-cartoon-vector-illustration-graphic-design.jpg",
    number: 100,
}

export default FooterCard