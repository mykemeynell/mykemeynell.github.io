import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <ul className={`flex justify-center md:justify-end`}>
            <li className={`mr-6`}>
                <Link className={`font-mono text-xs font-light text-gray-400 hover:text-green-300 transform transition-colors duration-100 ease-linear`} to={`/`}>
                    <span className={`text-green-300`}>00.</span>
                    <span>Home</span>
                </Link>
            </li>
            <li className={`mr-6`}>
                <Link className={`font-mono text-xs font-light text-gray-400 hover:text-green-300 transform transition-colors duration-100 ease-linear`} to={`/about`}>
                    <span className={`text-green-300`}>01.</span>
                    <span>About</span>
                </Link>
            </li>
            <li className={`mr-6`}>
                <Link className={`font-mono text-xs font-light text-gray-400 hover:text-green-300 transform transition-colors duration-100 ease-linear`} to={`/work`}>
                    <span className={`text-green-300`}>02.</span>
                    <span>Work</span>
                </Link>
            </li>
            <li>
                <Link className={`font-mono text-xs font-light text-gray-400 hover:text-green-300 transform transition-colors duration-100 ease-linear`} to={`/contact`}>
                    <span className={`text-green-300`}>03.</span>
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;
