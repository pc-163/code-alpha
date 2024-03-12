import Skills from "./Skills"

const About = () => {
    return (
        <>
            <section className="section_0003 py-10 lg:py-10 xl:py-20 bg-center bg-no-repeat" id='about'>
                <div className="container mx-auto px-4 sm:px-4 lg:px-20 2xl:px-32">
                    <div className="lg:grid grid-cols-12 pb-5">
                        <div className="lg:col-span-7 xl:col-span-5">
                            <h2 className='text-3xl font-bold'>About Me &#129333;</h2>
                            <p className='pt-4 pb-5 text-1xl sm:text-2xl'>I'm a dedicated developer with over 1 year of experience in Front-End web development. I love working with technologies like React, Next.js, Node. I'm always eager to learn new things and tackle challenges head-on.                           </p>
                            <p className="italic">Feel free to reach out to me at <a href="mailto:pcprakashchand163@gmail.com" className="text-blue-600">pcprakashchand163@gmail.com</a> or connect with me on  <a href="https://www.linkedin.com/in/pc163/" className="text-blue-600">LinkedIn.</a></p>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-12 pt-10 lg:pt-0">
                    <div className="lg:col-span-5 xl:col-span-7"></div>
                    <div className="lg:col-span-7 xl:col-span-5" id='skills'> 
                        <h3 className='text-3xl font-bold'>My Skills 🔥</h3>
                        <p className='pt-4 pb-5 text-1xl sm:text-2xl'>Technologies I've been working with recently</p>
                        <Skills/>
                     </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default About