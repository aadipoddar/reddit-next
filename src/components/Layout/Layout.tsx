import Navbar from "../Navabar/Navbar"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout