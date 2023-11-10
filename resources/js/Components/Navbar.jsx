import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import { Link } from "@inertiajs/react";
import { Search } from "lucide-react";
import IconButton from "./ui/icon-button";
import Button from "./ui/button";
import { useRef, useState } from "react";
import SearchModal from "./ui/searchModal";
import PreviewModal from "./ui/preview-modal";

const Navbar = ({ auth, courses }) => {
    const [query, setQuery] = useState("");
    const [searchaparams] = useState(["name", "type"]);
    const [open, setOpen] = useState(false);

    const handleQuery = (e) => {
        setQuery(e.target.value);
        e.stopPropagation();

        PreviewModal.onOpen(courses);
    };

    function search(courses) {
        return courses.filter((course) => {
            return searchaparams.some((newCourse) => {
                return (
                    course[newCourse]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div className="overflow-hidden w-full  h-16 fixed top-0 z-50   bg-slate-800">
            <Container>
                <div className=" px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl text-green-500">
                            ASKUALA
                        </p>
                    </Link>
                    <MainNav />
                    {auth?.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-green-400 dark:hover:text-green-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    <form
                        action=""
                        className="flex-1 ml-10 max-w-lg flex items-center justify-between  rounded-full  dark:text-slate-400 bg-slate-700 bg-opacity-50 px-3 py-0.5 "
                    >
                        <IconButton
                            icon={<Search size={22} />}
                            className=" bg-transparent border-none shadow-none "
                        />
                        <input
                            type="search"
                            name="search"
                            placeholder="Search for Cources"
                            value={query}
                            color="black"
                            className="flex-1 border-none outline-0 shadow-none focus:ring-0 focus:border-0  text-slate-200 bg-transparent focus:bg-transparent rounded-full"
                            onChange={handleQuery}
                        />
                    </form>

                    <ul className="">
                        {query
                            ? search(courses)?.map((course) => (
                                  <li>
                                      {course.name}
                                      {course.type}
                                  </li>
                              ))
                            : null}
                    </ul>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
