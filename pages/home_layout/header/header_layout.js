import Header from "./header_header"
import Header_Navigation from "./header_navigation"
import Footer from "./header_footer"

export default function Header_Layout(
    { children }
) {
    return (
        <>
            <Header></Header>
            <Header_Navigation></Header_Navigation>
            {children}
            <Footer></Footer>
        </>
    )
}