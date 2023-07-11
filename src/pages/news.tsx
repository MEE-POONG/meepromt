import TheLayOut from "@/components/TheLayout";
import NewsSlider from "@/container/news-slids";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";

export default function NewsPage() {
    return (
        <TheLayOut>
            <NewsSlider />
            <section className="container mx-auto py-24 px-4 font-font01">
                <div className="grid grid-flow-row lg:grid-flow-col gap-4">
                    <div className="md:col-span-4 lg:col-span-6 row-span-6 ">
                        <div className="shadow-md rounded-md overflow-hidden ">
                            <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                            <div className="p-7">
                                <Link href="newsDetail" className="lg:text-2xl text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                                <p className="indent-8 mt-4 line-clamp-3 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                                <div className="flex justify-between mt-5 items-center ">
                                    <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                    <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                        <Link href="newsDetail" className="flex items-center">
                                            Read <BiArrowFromLeft size={20} />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 ">
                        <div className="grid grid-rows-1 lg:grid-flow-col gap-4">
                            <div className="shadow-md">
                                <div className="shadow-md rounded-md overflow-hidden">
                                    <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                                    <div className="p-4">
                                        <Link href="newsDetail" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                                        <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                                        <div className="flex justify-between mt-5 items-center ">
                                            <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                            <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                                <Link href="newsDetail" className="flex items-center">
                                                    Read <BiArrowFromLeft size={20} />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md">
                                <div className="shadow-md rounded-md overflow-hidden">
                                    <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                                    <div className="p-4">
                                        <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                                        <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                                        <div className="flex justify-between mt-5 items-center ">
                                            <p className=" text-sm text-purple-400"> 24 พ.ค. 2566</p>
                                            <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                                <Link href="" className="flex items-center">
                                                    Read <BiArrowFromLeft size={20} />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 ">
                        <div className="grid grid-rows-1 lg:grid-flow-col gap-4">
                            <div className="">
                                <div className="shadow-md rounded-md overflow-hidden">
                                    <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                                    <div className="p-4">
                                        <Link href="" className="lg:text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                                        <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                                        <div className="flex justify-between mt-5 items-center ">
                                            <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                            <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                                <Link href="" className="flex items-center">
                                                    Read <BiArrowFromLeft size={20} />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md">
                                <div className="shadow-md rounded-md overflow-hidden">
                                    <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                                    <div className="p-4">
                                        <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                                        <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                                        <div className="flex justify-between mt-5 items-center ">
                                            <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                            <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                                <Link href="" className="flex items-center">
                                                    Read <BiArrowFromLeft size={20} />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                        <div className="p-4">
                            <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                            <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <div className="flex justify-between mt-5 items-center ">
                                <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                    <Link href="" className="flex items-center">
                                        Read <BiArrowFromLeft size={20} />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                        <div className="p-4">
                            <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                            <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <div className="flex justify-between mt-5 items-center ">
                                <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                    <Link href="" className="flex items-center">
                                        Read <BiArrowFromLeft size={20} />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                        <div className="p-4">
                            <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                            <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <div className="flex justify-between mt-5 items-center ">
                                <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                    <Link href="" className="flex items-center">
                                        Read <BiArrowFromLeft size={20} />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                        <div className="p-4">
                            <Link href="" className="text-md text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                            <p className="indent-8 mt-4 line-clamp-2 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <div className="flex justify-between mt-5 items-center ">
                                <p className=" text-sm text-blue-400"> 24 พ.ค. 2566</p>
                                <button className="text-sm bg-purple-400 text-white p-2 rounded-full hover:scale-105 shadow-md">
                                    <Link href="" className="flex items-center">
                                        Read <BiArrowFromLeft size={20} />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="shadow-md rounded-md overflow-hidden">
                        <img src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />
                        <div className="p-7">
                            <Link href="" className="text-2xl text-purple-400 font-semibold hover:underline">Tech News to Know This Week: May 23 – 29</Link>
                            <p className="indent-8 mt-4 line-clamp-3 text-sm text-gray-800">Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <div className="flex justify-between mt-8 items-center ">
                                <p className=" text-sm text-purple-400"> 24 พ.ค. 2566</p>
                                <Button>
                                    <Link href="" className="flex items-center">
                                        Read <BiArrowFromLeft size={20} />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:basis-2/4 flex flex-row shadow-md rounded-md overflow-hidden gap-4">
                        <div className=" shadow-md">1</div>
                        <div className=" shadow-md">2</div>
                    </div>

                </div> */}
            </section>
        </TheLayOut>
    )
}