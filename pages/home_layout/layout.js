import Footer from "./footer"
import Header_Layout from "./header/header_layout"
import Navigation from "./navigation"

export default function Layout(
    { children }
) {
    return (
        <>
            <Header_Layout></Header_Layout>

            <Navigation></Navigation>
            {children}

            <Footer></Footer>
        </>
    )
}