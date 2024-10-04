
import {RiBarChartHorizontalLine} from "react-icons/ri";
import {GoScreenFull} from "react-icons/go";
import {BiExitFullscreen} from "react-icons/bi";
import FullScreenSwitcher from "@/components/header/FullScreenSwitcher";

const Header = () => {
    return (
        <header className="header flex flex-sb">
                <div className="logo flex gap-2">
                    <h1>ADMIN</h1>
                    <div className="headerham flex flex-center">
                        <RiBarChartHorizontalLine/>
                    </div>
                </div>
            <div className="right-nav flex gap-2">
                <FullScreenSwitcher/>
                <div className="notification">
                    <img src="/img/notification.png" alt="noti" />
                </div>
                <div className="profilenav">
                    <img src="/img/user.png" alt="user"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
