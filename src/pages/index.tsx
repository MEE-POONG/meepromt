import Head from 'next/head'
import TheLayout from '@/components/TheLayout'
import HomeMain from '@/container/Home/HomeMain'
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
      <HomeMain />
      {/* <div className="container text-blue-400 mx-auto text-center mt-24 font-font01">
        <div className="flex flex-col justify-center items-center text-center animate-fade-up">
          <img src="images/new-logo.png" className="w-72 " />
          <p className="max-w-sm font-bold text-xl mb-5">
            Me Prompt Technology Company Limited
          </p>
          <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            รับทำเว็บไซต์ และการตลาดออนไลน์
          </h2>
          <h5>
          </h5>
        </div>

      </div> */}
    </TheLayout>
  )
}
