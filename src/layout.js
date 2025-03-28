import Header from './components/header'
import Footer from './components/Footer'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="m-0 p-0">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
