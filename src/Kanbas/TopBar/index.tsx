/* Black bar that pops up on small screen */
import { FaBars, FaAngleDown } from 'react-icons/fa';
import "./index.css";

interface TopBarProps {
    lineOne: string;
    lineTwo: string;
}

function TopBar({ lineOne, lineTwo }: TopBarProps) {
    return (
        <div className="black-top-bar d-flex align-items-center flex-wrap d-md-none">

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                <div className="top-bar-icon">
                    <FaBars />
                </div>
            </div>

            <div className="col-8 text-center d-flex flex-column justify-content-center">
                <div className="black-top-bar-text">
                    {lineOne}
                </div>
                <div className="black-top-bar-text">
                    {lineTwo}
                </div>
            </div>

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                <div className="top-bar-icon">
                    <FaAngleDown />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
