import React from 'react'
import slider1 from "../assets/look-studio-HtXyytr9304-unsplash.jpg"
import slider2 from "../assets/karelys-ruiz-PqyzuzFiQfY-unsplash.jpg"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const Slider = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: slider1,
            caption: 'Slide 1'
        },
        {
            url: slider2,
            caption: 'Slide 2'
        }
        // {
        //     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        //     caption: 'Slide 3'
        // },
    ];

    const images = [
        slider1,
        slider2,

    ];

    return (
        // <div className='max-h-[450px] border-4 border-amber-600 flex'>
        //     <div className=''>
        //         <img src={slider1} alt="" className='w-full' />
        //     </div>
        //     <div><img src={slider2} alt="" /></div>
        //     <div><img src="" alt="" /></div>

        // </div>


        // <div className="slide-container">
        //     <Slide>
        //         {slideImages.map((slideImage, index) => (
        //             <div key={index}>
        //                 <img src={slideImage.url} />
        //                     <span style={spanStyle}>{slideImage.caption}</span>
        //                 {/* </img> */}
        //             </div>
        //         ))}
        //     </Slide>
        // </div>


        //     <div className="slide-container">
        //     <Zoom scale={0.4}>
        //       {
        //         images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        //       }
        //     </Zoom>
        //   </div>


        <div>
            <Slide autoplay={true} infinite duration={5000}>
            {
                images.map((image, index) => (
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${image})` }}>
                                <div className='w-2/4 flex flex-col gap-2'>
                                    <h1 className='text-3xl font-bold'>Asthetic Excellence for Ageless Beauty</h1>
                                    <p className='font-xl font-semibold'>Welcome to Lam Aesthetics Clinic — your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.

                                        Consultations for FREE!</p>
                                </div>
                            </div>
                        </div>
                ))
            }
            </Slide>
            {/* <Slide autoplay={true} infinite duration={5000}>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div>
                            <h1>Asthetic Excellence for Ageless Beauty</h1>
                            <p>Welcome to Lam Aesthetics Clinic — your destination for safe, effective, and elegant facial rejuvenation treatments. Specializing in Botox, Dermal Fillers, and Skin Boosters, we help you look and feel your best.

                                Consultations for FREE!</p>
                        </div>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>

                    </div>
                </div>
            </Slide> */}
        </div>
    )
}

export default Slider
