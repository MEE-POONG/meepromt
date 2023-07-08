import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import HometIndex from '@/container/Home_index'
import GuildIndex from '@/container/Guild_index'
import { BsFacebook, BsPhone, BsPhoneFill } from 'react-icons/bs'
import HomeSlide from '@/container/HomeSlide'
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
      <div className="home-page">
        <div className="container text-blue-400 mx-auto text-center mt-24 font-font01">
          <HomeSlide />
          <HometIndex />
          {/* <GuildIndex /> */}

        </div>
      </div>
    </TheLayout>
  )
}
