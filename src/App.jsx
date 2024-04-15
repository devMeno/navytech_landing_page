import './App.css'
import Navbar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import TopCompanies from "./components/topCompanies.jsx";
import Services from "./components/services.jsx";
import Portfolio from "./components/portfolio.jsx";

function App() {
    return(
        <>
            <Navbar/>
            <Banner/>
            <TopCompanies/>
            <Services/>
            <Portfolio/>
        </>
    )
}

export default App
