import "../App.css"
import logo from "../images/airbnb-logo.png"


function Navbar(){
    return(
        <nav>
            <img src={logo} alt="airbnb-logo" />
        </nav>
    )
}

export default Navbar;