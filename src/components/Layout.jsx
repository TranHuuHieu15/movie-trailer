import PropType from "prop-types"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropType.node.isRequired,
}

export default Layout
