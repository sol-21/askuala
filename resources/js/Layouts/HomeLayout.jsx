import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ModalProvider from "@/Providers/modal-provider";
import ToastProvider from "@/Providers/tost-provider";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export default function Home({ auth, courses, children, className }) {
    return (
        <main className="bg-green-500">
            <ToastProvider />
            <ModalProvider />

            {children}
        </main>
    );
}
