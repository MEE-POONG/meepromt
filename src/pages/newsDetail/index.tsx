import TheLayOut from "@/components/TheLayout";
import { BsCalendar3 } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function NewsDetail() {
    return (
        <TheLayOut>
            {/* <div className="h-96 w-screen object-cover">
                <img className="w-full h-72 min-h-full object-cover" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
            </div> */}
            <div className="container mx-auto py-10 font-font01 px-5">
                <img className="w-full h-80 min-h-full object-cover" 
                     src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="img-blur-shadow" />

                <h2 className="font-bold text-gray-900 mt-5">Tech News to Know This Week: May 23 – 29</h2>
                <div className="w-32 h-1 bg-gradient-to-l from-amber-500 via-violet-900 to-blue-600"></div>
                <div className="mt-3 flex justify-start">
                    <div className="flex mr-5 items-center">
                        <BsCalendar3 size={15} className="text-cyan-500 mr-2" />
                        <span className=" text-sm text-purple-400">16 มิ.ย. 2566</span>
                    </div>
                    <div className="flex mr-5 items-center">
                        <BiTime size={20} className="text-cyan-500 mr-2" />
                        <span className=" text-sm text-purple-400">16.40 น.</span>
                    </div>
                </div>

                <div className="mt-3 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className=" col-span-2 md:col-span-3">
                        <img className="mx-auto" src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="" />

                        <article className="prose lg:prose-xl mt-8 whitespace-normal lg:text-justify">
                            <p>Every day we wake up, drink some coffee, get ready for work and check on the latest tech. So here’s a handful of news stories from around the tech world condensed to fit into that first cup. These are things you need to know before you step foot out of your door (or in front of a webcam) and into the real world this morning.</p>
                            <h3>Samsung Display Unveils Rollable OLED Panels at SID Display Week 2023</h3>
                            <p>Samsung has announced its new display technologies at SID Display Week 2023, including a rollable OLED panel that can extend like a scroll. The Rollable Flex display can change its length from 49mm to 254.4mm using an O-shaped axis, allowing it to be used as a monitor, tablet, or laptop. </p>

                            <iframe className="mt-10 w-full h-[450px] mx-auto rounded-lg cursor-pointer"
                                src="https://www.youtube.com/embed/l5_vrdA4uCg" 
                                allowFullScreen>
                            </iframe>
                        </article>




                    </div>

                    <div className="bg-gray-400/25 mx-auto px-5 py-4 rounded-md">
                        <p className="text-black">ข่าวสารอื่น</p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 mt-10 " >
                            <Card className="mt-6 w-52 lg:w-64 p-3">
                                <CardHeader color="blue-gray" className="relative -translate-y-6">
                                    <img className="" src="https://innotechtoday.com/wp-content/uploads/2023/05/brooke-cagle-g1Kr4Ozfoac-unsplash-1.jpg" alt="img-blur-shadow" />
                                </CardHeader>
                                <CardBody className="py-2 px-2 font-font01">
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        UI/UX Review Check
                                    </Typography>
                                    <Typography className="font-font01 truncate ">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                        and near to &quot;สวัสดี&quot; where you can enjoy the main night life
                                        in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-1 text-right">
                                    <Link href="blogDetail">
                                        <Button className=" bg-black rounded-full hover:bg-sky-500 text-sm font-font01 p-3">อ่านเพิ่ม</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </TheLayOut>
    )
}