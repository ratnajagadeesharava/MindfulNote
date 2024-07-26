import "./NavBar.css";
import { APP_NAME } from "../../constants/constants";
import dp from "../../assets/images/dp.jpeg";
function NavBar() {
    const profile_img = "../../assets/images/dp.jpeg";
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar_logo">
                    <h1>📝 {APP_NAME}</h1>
                </div>
                <div className="navbar_links">
                    <ul className="navbar_items">
                        <li className="navbar_item">Courses</li>
                        <li className="navbar_item">Notes</li>
                        <li className="navbar_item"> Bookmarks</li>

                    </ul>
                    <div className="navbar_new">
                        <button className="navbar_button">New</button>
                    </div>
                    <div className="navbar_profile">
                       <img src={dp} alt="profile" className="navbar_profile_image" />
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default NavBar;