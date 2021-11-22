import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

const PageComponentNotFound = () => {
    return (
        <MainLayout>
            <div className={`flex flex-grow md:col-span-8 md:flex-col items-center`}>
                <div className={`max-w-2xl my-auto w-full`}>
                    <div className={`flex items-center flex-col w-full`}>
                        <h1>
                            <span
                                className={`text-green-300 font-mono font-light`}>404.</span>
                            <span
                                className={`text-gray-300 font-mono font-light`}>Page Not Found</span>
                        </h1>
                        <p className={`max-w-lg text-gray-400 mt-5 text-center`}>Sorry about that.</p>
                        <p>
                            <Link to={`/`}
                               className={`inline-block mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}
                            >Go Home</Link></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default PageComponentNotFound;
