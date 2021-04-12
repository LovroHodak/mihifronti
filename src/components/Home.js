import React from 'react'
import BestSeller from './BestSeller'
import './Home.css'
import Slider from './Slider'

export default function Home() {
    return (
        <div className='Home'>
            <Slider className='sliderz' />
            <BestSeller className='bestSellerz' />
        </div>
    )
}
