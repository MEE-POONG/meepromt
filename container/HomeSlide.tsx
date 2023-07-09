import React from 'react';
import { useContext } from 'react';
// import { newsData } from '@data/dataTest';
import { LanguageContext } from '@/components/Language/LanguageContext';
import Link from 'next/link';
import { BsFacebook, BsPhoneFill } from 'react-icons/bs';
// import HtmlContent from "@components/HtmlContent";
import { ParallaxBanner } from 'react-scroll-parallax';

interface NewsItem {
    id: string,
    language: string,
    img: string,
    title: string,
    date: string,
    detail: string,
}

const HomeSlide: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    return (
        <div className="home-slide flex flex-col justify-center items-center text-center animate-fade-up">
            {/* <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                {currentLanguage === "TH" ? "รับทำเว็บไซต์ และการตลาดออนไลน์" : "Build Your Website and Optimize Your Digital Marketing."}
            </h2> */}

            <ParallaxBanner
                layers={[
                    { image: '/images/h1.jpg', speed: -20 },
                ]}
                className="parallax aspect-[2/1]"
            >
                <div className="detail">
                    <img src="images/new-logo.png" className="w-72 mx-auto " />
                    <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        {currentLanguage === "TH" ? "รับทำเว็บไซต์ และการตลาดออนไลน์" : "Build Your Website and Optimize Your Digital Marketing."}
                    </h2>
                    <h5>
                        <BsFacebook className='inline-flex mr-5' />meprompttecnology
                    </h5>
                    <h5>
                        <BsPhoneFill className='inline-flex  mr-5' />06-444-82650
                    </h5>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default HomeSlide;
