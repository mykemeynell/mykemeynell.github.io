import MainLayout from "../layouts/MainLayout";
import {Moji} from "../components/Moji";

const About = () => {
    return (
        <MainLayout>
            <div className={`flex flex-grow md:col-span-8 flex-col`}>
                <div className={`my-auto flex md:grid md:grid-cols-2`}>
                    <div className={`max-w-screen md:max-w-2xl my-auto`}>
                        <h1 className={`border-b border-gray-600 pb-5`}>
                            <span
                                className={`text-green-300 font-mono font-light`}>01.</span>
                            <span
                                className={`text-gray-300 font-mono font-light`}>About Me</span>
                        </h1>
                        <p className={`max-w-lg text-gray-400 mt-5`}>Hi, my name
                            is
                            Myke! I’ve been working with the web professionally
                            since 2013 after moving from a sales-based role, and
                            it’s something that I’ve found myself enjoying since
                            then.</p>
                        <p className={`max-w-lg text-gray-400 mt-5`}>These days,
                            I do my best to try new technologies regularly and
                            stay recent with what’s out there. Learning new and
                            better ways to benefits both myself, and the people
                            I work with.</p>
                        <p className={`max-w-lg text-gray-400 mt-5`}>Here are a
                            few bits of tech that I work with regularly:</p>
                        <ul className={`list-inside list-disclosureClosed flex grid grid-cols-2 items-start w-max mt-5`}>
                            <li className={`text-gray-400 mr-10`}>React</li>
                            <li className={`text-gray-400 mr-10`}>Laravel</li>
                            <li className={`text-gray-400 mr-10`}>WordPress</li>
                            <li className={`text-gray-400 mr-10`}>Node.js</li>
                            <li className={`text-gray-400 mr-10`}>JavaScript</li>
                        </ul>
                        <p className={`max-w-lg text-gray-400 mt-5`}>… and this
                            is what I’m learning at the moment</p>
                        <ul className={`list-inside list-disclosureClosed flex grid grid-cols-1 md:grid-cols-2 items-start w-max mt-5`}>
                            <li className={`text-gray-400 mr-10`}>Kotlin</li>
                        </ul>
                    </div>
                    <div className={`my-auto hidden md:block`}>
                        <Moji className={`w-full h-full`}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default About;
