import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ToastProvider from "@/Providers/tost-provider";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
            {children}
        </div>
    );
}
