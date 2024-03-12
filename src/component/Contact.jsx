import { BiLogoTelegram } from "react-icons/bi";

const Contact = () => {
    return (
        <section className="section_0004 px-5 py-8 bg-center bg-no-repeat" id='contact'>
            <div className="section_0005">
                <div className="container mx-auto px-24">
                    <div className="grid grid-cols-12 py-14">
                        <div className="col-span-5">
                            <h5 className='text-4xl font-bold pb-14'>Let's discuss <br />on something cool together</h5>
                            <p className="font-semibold">I`m interested in ..</p>
                            <div className="grid gap-4 pt-5" id="tags">
                                <p className="font-medium text-base text-center">
                                    Ecommerce Website
                                </p>
                                <p className="font-medium text-base border text-center">
                                    Landing Page
                                </p>
                                <p className="font-medium text-base border text-center">
                                    Blog Website
                                </p>
                                <p className="font-medium text-base border text-center">
                                    Portfolio
                                </p>
                                <p className="font-medium text-base border text-center">
                                    Portfolio
                                </p>

                            </div>
                        </div>
                        <div className="col-span-3"></div>
                        <div className="col-span-4">
                        <h6 className='text-3xl font-bold pb-6'>Contact Me 📱</h6>

                            <form className="space-y-6">
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your Name"
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 shadow-sm sm:text-sm sm:leading-6"
                                    />
                                </div>

                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Your Email"
                                        required
                                        className="block w-full rounded-md border-0 py-2 px-4 shadow-sm sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div className="mt-2">
                                <textarea
                                    placeholder="Your Message"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-4 shadow-sm sm:text-sm sm:leading-6"
                                />
                            </div>


                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                                    >
                                    <BiLogoTelegram /> Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact