import MainLayout from "../layouts/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <div className={`flex flex-grow md:col-span-8 md:flex-col items-center`}>
                <div className={`max-w-2xl my-auto`}>
                    <div className={`flex items-center flex-col w-full`}>
                        <h1>
                            <span
                                className={`text-green-300 font-mono font-light`}>03.</span>
                            <span
                                className={`text-gray-300 font-mono font-light`}>Get In Touch</span>
                        </h1>
                        <p className={`max-w-lg text-gray-400 mt-5 text-center`}>Although
                            I’m not currently looking for any new opportunities,
                            my inbox is always open. Whether you have a question
                            or just want to say hi, I’ll do my best to get back
                            to you.</p>
                        <p>
                            <a href={`mailto:hi@myke.codes`}
                               className={`inline-block mt-8 px-6 py-4 border border-green-300 text-green-300 hover:border-green-500 hover:text-green-500 transition-colors ease-linear duration-200 rounded font-mono font-light`}
                            >Say Hello</a></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Contact;
