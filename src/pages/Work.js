import MainLayout from "../layouts/MainLayout";
import HtmlVideo from "../assets/images/html-video.png";
import FilePreview from "../assets/images/file-preview.jpg";
import Infinity from "../assets/images/infinity-screenshot.png";
import UUIDColumns from "../assets/images/uuid-columns.jpg";
import {GitHub, Website} from "../components/Icons";

const Work = () => {
    return (
        <MainLayout>
            <div className={`flex flex-grow md:col-span-8 flex-col pb-10 md:pt-20`}>
                <div className={`my-auto`}>
                    <div className={`max-w-screen md:max-w-2xl my-auto`}>
                        <h1 className={`border-b border-gray-600 pb-5`}>
                            <span
                                className={`text-green-300 font-mono font-light`}>02.</span>
                            <span
                                className={`text-gray-300 font-mono font-light`}>Some Things I've Built</span>
                        </h1>
                    </div>
                    {/** Left aligned item */}
                    <div className={`flex md:grid md:grid-cols-2 mt-20 flex-col-reverse md:flex-row`}>
                        <div className={`flex flex-col md:items-start md:justify-center md:pr-10`}>
                            <span className={`font-mono font-light text-xs text-green-300`}>Featured Project</span>
                            <h2 className={`text-gray-300 font-bold text-2xl mb-5`}>Infinity</h2>
                            <p className={`text-gray-400 md:text-left`}>An expansible CMS built for Laravel, for developers. Comes with out of the box authentication, the rest is up to you!</p>
                            <p>
                                <a href={`https://github.com/mykemeynell/InfinityCMS`}
                                   target={`_blank`}
                                   className={`inline-flex max-w-min items-center mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light mr-5`}><GitHub className={`mr-3 w-5 h-5 inline-block`}/>GitHub</a>
                                <a href={`https://getinfinity.dev`}
                                   target={`_blank`}
                                   className={`inline-flex max-w-min items-center mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}><Website className={`mr-3 w-5 h-5 inline-block`}/>Website</a>
                            </p>
                        </div>
                        <div className={`mb-10 md:mb-0`}>
                            <img src={Infinity} className={`rounded w-full max-w-lg mx-auto`} alt={`File Preview Icon`}/>
                        </div>
                    </div>

                    {/** Right aligned item */}
                    <div className={`flex md:grid md:grid-cols-2 mt-20 flex-col md:flex-row`}>
                        <div className={`mb-10 md:mb-0`}>
                            <img src={HtmlVideo} className={`rounded w-full max-w-lg mx-auto`} alt={`Snazzy Video Screenshot`}/>
                        </div>
                        <div className={`flex flex-col md:items-end md:justify-center md:pl-10`}>
                            <span className={`font-mono font-light text-xs text-green-300`}>Featured Project</span>
                            <h2 className={`text-gray-300 font-bold text-2xl mb-5`}>Snazzy Video</h2>
                            <p className={`text-gray-400 md:text-right`}>A nice-looking HTML5 video player, based on the design used by Apple. I have never been a fan of the way some browsers rendered HTML5 video elements - so I did this to make them nicer.</p>
                            <p>
                                <a href={`https://github.com/mykemeynell/snazzyvideo`}
                                   target={`_blank`}
                                className={`flex max-w-min items-center mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}><GitHub className={`mr-3 w-5 h-5 inline-block`}/>GitHub</a>
                            </p>
                        </div>
                    </div>

                    {/** Left aligned item */}
                    <div className={`flex md:grid md:grid-cols-2 mt-20 flex-col-reverse md:flex-row`}>
                        <div className={`flex flex-col md:items-start md:justify-center md:pr-10`}>
                            <span className={`font-mono font-light text-xs text-green-300`}>Featured Project</span>
                            <h2 className={`text-gray-300 font-bold text-2xl mb-5`}>FilePreview</h2>
                            <p className={`text-gray-400 md:text-left`}>Input a file, and this library will attempt to generate a preview to display online. This was a requirement on a project I was a part of - I found myself needing to write the same functionality for multiple clients, so I created a library to speed that process up.</p>
                            <p>
                                <a href={`https://github.com/mykemeynell/FilePreview`}
                                   target={`_blank`}
                                   className={`flex max-w-min items-center mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}><GitHub className={`mr-3 w-5 h-5 inline-block`}/>GitHub</a>
                            </p>
                        </div>
                        <div className={`mb-10 md:mb-0`}>
                            <img src={FilePreview} className={`rounded w-full max-w-lg mx-auto`} alt={`File Preview Icon`}/>
                        </div>
                    </div>

                    {/** Right aligned item */}
                    <div className={`flex md:grid md:grid-cols-2 mt-20 flex-col md:flex-row`}>
                        <div className={`mb-10 md:mb-0`}>
                            <img src={UUIDColumns} className={`rounded w-full max-w-lg mx-auto`} alt={`UUID Columns for Laravel Icon`}/>
                        </div>
                        <div className={`flex flex-col md:items-end md:justify-center md:pl-10`}>
                            <h2 className={`text-gray-300 font-bold text-2xl mb-5`}>UUID Columns for Laravel</h2>
                            <p className={`text-gray-400 md:text-right`}>Out of the box, Laravel migrations use auto-incrementing IDs on tables. I have never been a fan of them, so after writing the same code a few times, I created a composer package so I can add UUID functionality quickly into future Laravel projects.</p>
                            <p>
                                <a href={`https://github.com/mykemeynell/UuidColumn`}
                                   target={`_blank`}
                                   className={`flex max-w-min items-center mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}><GitHub className={`mr-3 w-5 h-5 inline-block`}/>GitHub</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Work;
