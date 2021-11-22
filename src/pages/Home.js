import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <MainLayout>
            <div className={`flex flex-grow md:col-span-8 flex-col`}>
                <div className={`max-w-screen md:max-w-2xl my-auto`}>
                    <span className={`font-mono text-green-300 font-light mb-5 inline-block`}>Hi, my name is</span>
                    <h1 className={`text-6xl font-bold text-gray-400 block mb-2`}>Myke Meynell</h1>
                    <h1 className={`text-6xl font-bold text-gray-600 block mb-5`}>I build things for the web</h1>
                    <p className={`max-w-lg text-gray-400 mt-5`}>I’m a self-taught developer, based in the UK, that
                        specialises in web technologies (with experience in mobile
                        app development). I like to make things that work well, and
                        look good whilst doing it.</p>
                    <p>
                        <a href={`mailto:hi@myke.codes`}
                              className={`inline-block mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}
                        >Get in touch</a></p>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
