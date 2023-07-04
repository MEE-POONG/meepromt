import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import Layout from "../../../components/TheLayout";

export default function BlogPage() {
    return (
        <Layout>
            <section className="container mt-10 mx-auto p-8 font-font01 mb-36">
                <div className="mt-20">
                <h2 className="text-3xl">บทความ</h2>
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6" >
                    <Card className="mt-6 w-64 p-3">
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
                            <Button className=" bg-black rounded-full hover:bg-sky-500 text-sm font-font01 p-3">อ่านเพิ่ม</Button>
                        </CardFooter>
                    </Card>
                </div>
                </div>
            </section>
        </Layout>
    )
}