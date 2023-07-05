import Image from "next/image";
import Layout from "../../../components/TheLayout";

export default function Personals() {
  return (
    <Layout>
      <section className='font-font01 mb-72 mx-auto container py-24'>
      <h2 className='text-2xl'>Team Me Promt</h2>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-10">
          {/* card start */}
          <div className=" relative flex flex-col rounded-[20px] bg-purple-400/50 shadow-3xl w-64 p-4 m-5">
            <div className="relative">
              <Image
                src="/images/est.jpg"
                width={190}
                height={0}
                alt=""
                className="mb-3 w-full rounded-xl"
              />
            </div>
            <div className="mb-3 flex items-center justify-center px-1 md:items-start">
              <div className="mb-2">
                <p className="text-lg font-bold text-navy-700"> Abstract Colors </p>
                <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div className="flex flex-col rounded-[20px] bg-purple-400/75 shadow-3xl w-64 p-4">
            <div className="relative">
              <Image
                src="/images/est.jpg"
                width={190}
                height={0}
                alt=""
                className="mb-3 w-full rounded-xl"
              />
            </div>
            <div className="mb-3 flex items-center justify-center px-1 md:items-start">
              <div className="mb-2">
                <p className="text-lg font-bold text-navy-700"> Abstract Colors </p>
                <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>

      </section>
    </Layout>
  )
}
