import './App.css'
import Navbar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import TopCompanies from "./components/topCompanies.jsx";
import Services from "./components/services.jsx";
import Portfolio from "./components/portfolio.jsx";
import AboutUs from "./components/aboutUs.jsx";
import Testimonial from "./components/testimonial.jsx";
import Blog from "./components/blog.jsx";
import Footer from "./components/footer.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <Banner/>
            <TopCompanies/>
            <Services/>
            <Portfolio/>
            <AboutUs/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default App
