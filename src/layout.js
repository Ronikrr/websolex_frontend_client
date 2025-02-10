import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Header from './components/header'
import Footer from './components/Footer'
const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : (
        <>
            <Header />
            <main className="m-0 p-0">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
