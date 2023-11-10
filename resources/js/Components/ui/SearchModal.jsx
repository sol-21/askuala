import { useState } from "react";
import { FilterIcon, FilterX, MenuIcon, Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Menu } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import MainNav from "../main-nav";

const SearchModal = ({ open, setOpen }) => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <div className="flex lg:hidden rounded-md">
                <Button
                    type="button"
                    onClick={onOpen}
                    className="items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>
            </div>
            <Dialog
                open={open}
                as="div"
                className="relative z-40 lg:hidden"
                onClose={onClose}
            >
                {/* Background color and opacity */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative mr-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-slate-900 py-4 pb-6 shadow-xl">
                        {/* Close button */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton
                                className="dark:bg-transparent border-none dark:text-gray-300"
                                icon={<X size={15} />}
                                onClick={onClose}
                            />
                        </div>
                        <MainNav className="flex flex-col items-start space-x-0 dark:text-white" />
                        <div className="p-4"></div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

export default SearchModal;
