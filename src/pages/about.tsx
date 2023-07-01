import Image from 'next/image'
import Layout from './layout'

export default function About() {
  return (
    <Layout>
      <section className='about-page font-font01 mb-72'>
        <div className="bg-gray-200 md:overflow-hidden">
          <div className="px-4 py-16">
            <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
              <h1 className='font-bold text-gray-600 text-xl sm:text-2xl md:text-5xl leading-tight mb-12'>เกี่ยวกับเรา</h1>
              <div className="flex flex-col justify-center items-center text-center animate-jump-in animate-once animate-delay-300 md:mb-32 lg:mb-20 xl:mb-5">
                <img src="images/new-logo.png" className="w-72" />
                <p className=" font-bold text-xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Me Prompt Technology Company Limited
                </p>
              </div>
              <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>
              <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div>
            </div>
            
          </div>
          <svg
            className="fill-current bg-gray-200 text-white hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill-opacity="1"
              d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto mt-[-360px] bg-white shadow-lg relative z-20 hidden md:block">
          <div className="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"></div>
          <div className="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"></div>
        </div>

        <div className="px-4 ">
          <div
            className="-mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg relative z-100 p-8"
          >
            <p className='mb-2 indent-8'>เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต</p>
            <p className=' indent-8'>เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ</p>
          
          </div>
        </div>

      </section>
    </Layout>
  )
}
