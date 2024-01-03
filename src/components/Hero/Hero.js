import React from 'react';
import Hero_image from '../../assets/images/hero.png';
import Hero_icon from '../../assets/images/hero-icon.svg';
import Hero_icon_2 from '../../assets/images/hero-icon-2.svg';
import '../Hero/Hero.css';

function Hero() {
    return (
        <div className='image-hero py-24'>
            <div className='container mx-auto'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 xl:col-span-5'>
                    <span>E-COURSE PLATFORM</span>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p> Practice your English and learn new things with the platform.</p>
                    <a href='' title='About platform' className='btn text-white font-bold py-3 px-6 rounded-full'>About platform</a>

                     <ul className='flex mt-16'>
                        <li >
                            <div className='flex'>
                                <img src={Hero_icon} alt='' />
                                <h2>600<span>+</span></h2>
                            </div>
                            <h3>Popular words</h3>
                        </li>

                        <li>
                            <div className='flex'>
                                <img src={Hero_icon_2} alt='' />
                                <h2>2<span>+</span></h2>
                            </div>
                            <h3>Mini-games</h3>
                        </li>

                     </ul>
                </div>

                <div className='hero-image-right col-span-12  xl:col-span-7'>
                    <img src={Hero_image} alt='GlobalTalk'/>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Hero;