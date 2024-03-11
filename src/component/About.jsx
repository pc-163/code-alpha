import Skills from "./Skills"

const About = () => {
    return (
        <>
            <section className="section_0003 py-20 bg-center bg-no-repeat" id='about'>
                <div className="container mx-auto px-32">
                    <div className="grid grid-cols-12 pb-5">
                        <div className="col-span-5">
                            <h2 className='text-3xl font-bold'>About Me &#129333;</h2>
                            <p className='pt-4 pb-5 text-2xl'>I'm a dedicated developer with over 1 year of experience in Front-End web development. I love working with technologies like JavaScript, React, Node.js. I'm always eager to learn new things and tackle challenges head-on.                           </p>
                            <p className="italic">Feel free to reach out to me at <a href="mailto:pcprakashchand163@email.com">pcprakashchand163@email.com</a> or connect with me on  <a href="https://www.linkedin.com/in/pc163/">LinkedIn.</a></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                    <div className="col-span-7"></div>
                    <div className="col-span-5" id='skills'> 
                        <h3 className='text-3xl font-bold'>My Skills 🔥</h3>
                        <p className='pt-4 pb-5 text-2xl'>Technologies I've been working with recently</p>
                        <Skills/>
                     </div>
                </div>
                </div>

            </section>
        </>
    )
}

export default About