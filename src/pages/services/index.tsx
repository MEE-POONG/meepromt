import Image from 'next/image'
import Layout from '../layout'
import Link from 'next/link'

export default function Services() {
  return (
    <Layout>
      <div className="container mt-10 mx-auto p-8 font-font01 mb-64">
        <h2 className='text-3xl text-gray-600 mb-10 text-center font-semibold p-2 '>Services</h2>
        <div className="bg-[#F4F5FA] p-10 rounded-xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-2xl">
              เลือกบริการที่เหมาะกับะูรกิจของคุณ
            </div>
            {/* <div className="font-light max-w-lg mt-5 text-sm">
              All devices come with free delivery or new-logoup as standard. See information on available shopping
              options for your location.
            </div> */}
          </div>
          <div
            className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div className="bg-[#FFFBEC] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-auto">
                <img src="images/new-logo.png" className="w-8" />
                <div className="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>
                <div className="text-sm font-light">Up to 100Mbit/s</div>
                <div className="my-4">
                  <span className="font-bold text-base">299</span>
                  <span className="font-light text-sm">/baht</span>
                </div>

                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  รายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>

            <div className="bg-[#F9ECFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-auto">
                <img src="images/new-logo.png" className="w-12" />
                <div className="mt-3 font-semibold text-lg">Telia Mobil 15GB</div>
                <div className="text-sm font-light w-60 md:w-auto">Unlimited calls</div>
                <div className="my-4">
                  <span className="font-bold text-base">953</span>
                  <span className="font-light text-sm">/baht</span>
                </div>

                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  รายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>


            <div className="bg-[#ECEEFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 md:w-auto">
                <img src="images/new-logo.png" className="w-12" />
                <div className="mt-3 font-semibold text-lg">Telenor Next Fast</div>
                <div className="text-sm font-light w-60 md:w-auto">Up to 100Mbit/s</div>
                <div className="my-4">
                  <span className="font-bold text-base">1,028</span>
                  <span className="font-light text-sm">/baht</span>
                </div>

                <a href='./services/packageDetail'>
                <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  รายละเอียดเพิ่มเติม
                </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="mt-12 text-white p-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">สอบถามเพิ่มเติม</button>
          </div>
        </div>



        {/* <h2 className='text-2xl text-gray-600 mb-16 text-center font-semibold p-2 mt-24'>Tools</h2>
        <div className=''>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10'>
           
              <img src="images/React-icon.png" 
                  className=" h-20 mr-3 rotate-45 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" 
                  alt="react new-logo " />
              <img src="images/nextjs.png" 
                  className="h-20 mr-3 rotate-45 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" 
                  alt="nextjs new-logo" />
              <img src="images/tailwind-css-icon.png" 
                  className="h-20 mr-3 -rotate-45 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" 
                  alt="TW new-logo" />
              <img src="images/typescript.png" 
                  className="h-20 mr-3 rotate-45 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" 
                  alt="TS new-logo" />
         
          </div>
        </div> */}
      </div>
    </Layout>
  )
}
