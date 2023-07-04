import Image from 'next/image'
import TheLayout from '@/components/TheLayout'
import HometIndex from '@/container/Home_index'
import GuildIndex from '@/container/Guild_index'

export default function Home() {
  return (
    <TheLayout>
      <div className="container text-cyan-800 mx-auto text-center mt-24 font-font01">
        <div className="flex flex-col justify-center items-center text-center animate-fade-up">
          <img src="images/new-logo.png" className="w-72 " />
          <p className="max-w-sm font-bold text-xl mb-5">
            Me Prompt Technology Company Limited
          </p>
          <h1
            className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          >
            รับทำเว็บไซต์ และการตลาดออนไลน์
          </h1>
        </div>
          <HometIndex />
          <GuildIndex/>
          
      </div>
    </TheLayout>
  )
}
