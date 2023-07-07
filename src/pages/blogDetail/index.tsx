import TheLayOut from "@/components/TheLayout";
import { BsCalendar3 } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function BlogDetail() {
    return (
        <TheLayOut>
            {/* <div className="h-96 w-screen object-cover">
                <img className="w-full h-72 min-h-full object-cover" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
            </div> */}
            <div className="container mx-auto py-10 font-font01 px-5">
                <img className="w-full h-80 min-h-full object-cover" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />

                <h3 className="font-bold text-gray-900 mt-5">UI/UX Review Check</h3>
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
                        <img className="mx-auto" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*76Qb1fvqzkgSM30lfoFDRQ.jpeg" alt="" />

                        <article className="prose lg:prose-xl mt-8 whitespace-normal">
                            <h3>Building blocks for a UX audit</h3>
                            <p>You want to perform a UX audit (sometimes referred to as a UX review) after identifying improvements needed to your digital product, e-commerce platform or website. After some research, you have come across several differing approaches, no standard method and are unsure exactly how to conduct a UX audit.</p>

                            <p>Luckily below is a step by step guide with an explanation detailing each section, a checklist for when performing heuristic evaluations and some top tips for conducting the UX audit.</p>

                            <p>Best of all it has been developed by someone with deep knowledge of usability best practices and industry experience who is Nielsen Norman UX certified, so you are in safe hands!</p>

                            <p>Not sure what a UX audit is or why it’s valuable? Find all the answers here — UX Audit: Why it’s valuable, the business benefits and ensuring users keep coming back</p>
                       
                            <h3>Recommended 6 step approach to conducting a UX audit</h3>
                        </article>

                    </div>

                    <div className="bg-gray-400/25 mx-auto px-5 py-4 rounded-md">
                        <p className="text-black">บทความที่เกี่ยวข้อง</p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 mt-10 " >
                            <Card className="mt-6 w-52 lg:w-64 p-3">
                                <CardHeader color="blue-gray" className="relative -translate-y-6">
                                    <img className="" src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" />
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
                                    <a href="blogDetail">
                                        <Button className=" bg-black rounded-full hover:bg-sky-500 text-sm font-font01 p-3">อ่านเพิ่ม</Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </TheLayOut>
    )
}