import React from 'react';
import { useContext } from 'react';
// import { newsData } from '@data/dataTest';
import { LanguageContext } from '@/components/Language/LanguageContext';
import Link from 'next/link';
import { BsFacebook, BsPhoneFill } from 'react-icons/bs';
// import HtmlContent from "@components/HtmlContent";

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
        <div className="flex flex-col justify-center items-center text-center animate-fade-up">
            <img src="images/new-logo.png" className="w-72 " />
            <p className="max-w-sm font-bold text-xl mb-5">
                { }
            </p>
            <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                {currentLanguage === "TH" ? "รับทำเว็บไซต์ และการตลาดออนไลน์" : "Build Your Website and Optimize Your Digital Marketing."}
            </h2>
            <h5>
                <BsFacebook className='inline mr-1' />meprompttecnology
                <BsPhoneFill className='inline mr-1 ml-2' />06-444-82650
                <BsFacebook className='inline mr-1 ml-2' />meprompttecnology
            </h5>
        </div>
    );
};

export default HomeSlide;
