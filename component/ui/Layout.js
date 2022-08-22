import HeaderFile from "./HeaderFile";
import Footer from "./Footer";

const Layout = ({ children }) => (
    <>
        <HeaderFile />
        {children}
        <Footer />
    </>
)

export default Layout;