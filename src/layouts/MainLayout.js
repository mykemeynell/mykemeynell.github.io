import Navigation from "../components/Navigation";
import {CodePen, GitHub, Instagram, Twitter} from "../components/Icons";

const MainLayout = (props) => {
    const {children, layoutClassName} = props;
    const {
        REACT_APP_CODEPEN_URL,
        REACT_APP_INSTAGRAM_URL,
        REACT_APP_TWITTER_URL,
        REACT_APP_GITHUB_URL
    } = process.env;

    return (
        <div className={`flex min-h-screen max-w-screen pb-10 md:pb-0 bg-gray-800 flex-col ${layoutClassName}`}>
            <header className={`px-3 py-5 md:py-3 w-full md:fixed top-0 left-0 bg-gradient-to-b from-gray-800`}>
                <Navigation/>
            </header>
            <div className={`flex grid md:grid-cols-12 gap-10 pt-10 md:pt-0 px-10 md:px-0 md:flex-grow flex-col md:flex-row`}>
                <div className={`md:col-start-2 md:col-span-1 md:flex md:flex-grow md:items-end`}>
                    <ul className={`md:mt-auto flex flex-row md:flex-col md:items-center justify-between md:fixed md:bottom-0`}>
                        <li>
                            <a href={REACT_APP_CODEPEN_URL} target={`_blank`}>
                                <CodePen className={`w-5 h-5 mb-4 text-gray-600 hover:text-green-300 transition-colors ease-linear duration-200`}/>
                            </a>
                        </li>
                        <li>
                            <a href={REACT_APP_INSTAGRAM_URL} target={`_blank`}>
                                <Instagram className={`w-5 h-5 mb-4 text-gray-600 hover:text-green-300 transition-colors ease-linear duration-200`}/>
                            </a>
                        </li>
                        <li>
                            <a href={REACT_APP_TWITTER_URL} target={`_blank`}>
                                <Twitter className={`w-5 h-5 mb-4 text-gray-600 hover:text-green-300 transition-colors ease-linear duration-200`}/>
                            </a>
                        </li>
                        <li>
                            <a href={REACT_APP_GITHUB_URL} target={`_blank`}>
                                <GitHub className={`w-5 h-5 mb-4 text-gray-600 hover:text-green-300 transition-colors ease-linear duration-200`}/>
                            </a>
                        </li>
                        <li className={`hidden md:list-item`}>
                            <div className={`border-l border-gray-600 h-80`} />
                        </li>
                    </ul>
                </div>
                {children}
                <div className={`md:col-span-1 md:flex md:flex-grow md:items-end`}>
                    <ul className={`md:mt-auto flex flex-row md:flex-col md:items-center justify-center md:fixed md:bottom-0`}>
                        <li>
                            <a href="mailto:hi@myke.codes" className={`md:writing-mode-vertical-lr font-mono font-light inline-block -ml-0.5 text-gray-600 hover:text-green-300 transition-colors ease-linear duration-200 mb-4`}>hi@myke.codes</a>
                        </li>
                        <li className={`hidden md:list-item`}>
                            <div className={`border-l border-gray-600 h-48`} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
