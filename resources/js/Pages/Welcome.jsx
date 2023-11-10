import { Link, Head } from "@inertiajs/react";
import { BombIcon, TvIcon, X } from "lucide-react";
import Container from "@/components/ui/container";

import NoResults from "@/Components/ui/no-results";
import ProductCard from "@/Components/ui/product-card";
import Billboard from "@/Components/ui/billboard";
import Filter from "@/Components/Filter";
import MobileFilters from "@/Components/ui/mobile-filters";

import Home from "@/Layouts/HomeLayout";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Welcome({ auth, courses }) {
    return (
        <Home courses={courses}>
            <Head title="Welcome" />
            <div className="relative flex flex-col  min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-green-600 selection:text-white">
                <Navbar auth={auth} courses={courses} />
                <Container className="mt-11">
                    <div className="max-w-7xl mx-auto px-11">
                        <Billboard />
                    </div>

                    <div className="px-11 sm:px-6 lg:px-8 dark:text-white max-w-[85rem] mx-auto ">
                        <div className="lg:grid lg:grid-cols-6 lg:gap-x-12 items-start bg-transparent   p-5">
                            <MobileFilters />
                            <div className="hidden  mt-6 lg:col-span-2 max-w-[20rem] lg:flex flex-col space-y-5 ">
                                <Filter />
                                <div className="hidden lg:block aspect-video border">
                                    Advertisement
                                </div>
                                <div className="hidden lg:block aspect-video border">
                                    Advertisement
                                </div>
                                <div className="hidden lg:block aspect-video border">
                                    Advertisement
                                </div>
                            </div>
                            <div className="mt-6 lg:col-span-4 lg:mt-0">
                                <h3 className="text-3xl dark:text-white mb-11 text-center font-bold decoration-orange-500 ">
                                    Highest Rated Courses
                                </h3>
                                {courses.length === 0 && <NoResults />}
                                <div className=" grid   gap-5 sm:grid-cols-2   md:grid-cols-3 xl:grid-cols-4">
                                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-4"> */}
                                    {courses.map((course) => (
                                        <ProductCard
                                            key={course.id}
                                            data={course}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-center dark:text-white mt-10">
                                All Courses
                            </h3>
                            {courses.length == 0 && <NoResults />}

                            <div className="grid gap-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-5 mt-10 max-w-7xl mx-auto  ">
                                {courses.map((course) => (
                                    <ProductCard
                                        key={course.id}
                                        data={course}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="text-5xl text-white text-center">
                    In Colaborate with
                </div>
                <div className="grid sm:grid-cols-2 rounded max-w-7xl mx-auto  items-center  justify-between m-11">
                    <img
                        src="_110373687_b32f2b5f-065c-4211-8f9d-b0dd4279cc23-removebg-preview.png"
                        alt=""
                        className=""
                        width="200px"
                    />
                    <p className="text-5xl text-yellow-300">Wollo University</p>
                </div>
                <Footer />
                <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
            </div>
        </Home>
    );
}
