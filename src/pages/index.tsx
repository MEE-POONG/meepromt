import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import HometIndex from '@/container/Home_index'
import GuildIndex from '@/container/Guild_index'
import { BsFacebook, BsPhone, BsPhoneFill } from 'react-icons/bs'
export default function Home() {
  return (
    <TheLayout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Me Prompt Technology</title>
      </Head>
      <div className="container text-blue-400 mx-auto text-center mt-24 font-font01">
        <div className="flex flex-col justify-center items-center text-center animate-fade-up">
          <img src="images/new-logo.png" className="w-72 " />
          <p className="max-w-sm font-bold text-xl mb-5">
            Me Prompt Technology Company Limited
          </p>
          <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            รับทำเว็บไซต์ และการตลาดออนไลน์
          </h2>
          <h5>
            <BsFacebook className='inline mr-1' />meprompttecnology
            <BsPhoneFill className='inline mr-1 ml-2' />06-444-82650
            <BsFacebook className='inline mr-1 ml-2' />meprompttecnology
          </h5>
        </div>
        <HometIndex />
        {/* <GuildIndex /> */}

      </div>
    </TheLayout>
  )
}
