import React, { useState, useEffect } from "react";
import sophia from "../images/Sophia.jpg";
import sophiacarpet from "../images/Profile.jpg";

function Information() {
    const [isSecondImageOnTop, setIsSecondImageOnTop] = useState(false);

    // Toggle images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsSecondImageOnTop((prev) => !prev);
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-5 mt-10 transition-all duration-300 relative top-20 left-0 w-full px-4 lg:px-10">
            {/* Introduction Section */}
            <div>
                <p className="text-black text-4xl leading-[46px] font-light inline-block">
                    I am
                </p>
                <p className="text-red-500 text-4xl leading-[46px] font-light inline-block ml-2">
                    Sophia
                </p>
                <p className="text-black text-4xl leading-[46px] font-light inline-block ml-2">
                    a
                </p>
                <p className="text-red-500 text-4xl leading-[46px] font-light inline-block ml-2">
                    tennis-loving developer
                </p>
                <p className="text-black text-4xl leading-[46px] font-light mt-2">
                    serving up pixel-perfect user interfaces and backhands on the court.
                </p>
            </div>

            {/* Flex Row Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center md:mt-20 gap-10">
                {/* Image Container (1/3 Width) */}
                <div className="relative w-full md:w-1/3 h-auto">
                    <div className="relative w-[445px] h-[605px] mx-auto">
                        <img
                            src={sophiacarpet}
                            alt="Sophia Habibi with Rugs"
                            className={`absolute inset-0 w-[445px] h-[605px] transform rotate-[-4deg] rounded-lg object-cover cursor-pointer transition-all duration-300 ${
                                isSecondImageOnTop ? "zxxx-0 opacity-0" : "z-10 opacity-100"
                            }`}
                        />
                        <img
                            src={sophia}
                            alt="Sophia Habibi"
                            className={`absolute inset-0 w-[445px] h-[605px] transform rotate-3 rounded-lg object-cover transition-all duration-300 ${
                                isSecondImageOnTop ? "z-10 opacity-100" : "z-0 opacity-0"
                            }`}
                        />
                    </div>
                </div>

                {/* Text Content (2/3 Width) */}
                <div className="w-full md:w-2/3 text-black ml-[100px]">
                    <div>
                        <h3 className="font-bold text-xl mb-4">Passion for Web Development and Design</h3>
                        <p className="mb-6 text-justify">
                            With over a decade of experience in web development, I have honed my skills in crafting dynamic,
                            responsive, and visually engaging websites that prioritize user experience. My expertise lies in
                            leveraging modern tools like React and Next.js to build applications that are not only functional
                            but also intuitive and visually appealing. Throughout my journey, I have developed a deep
                            understanding of JavaScript (ES6+), HTML5, and CSS3, allowing me to bring innovative ideas to
                            life while ensuring cross-browser compatibility and performance optimization. Every project I
                            undertake is an opportunity to merge technical precision with creativity, resulting in solutions
                            that meet both user and business needs.
                        </p>

                        <h3 className="font-bold text-xl mb-4">Collaboration and Continuous Growth</h3>
                        <p className="text-justify">
                            One of my core strengths is my ability to collaborate seamlessly with stakeholders, designers,
                            and developers to align technical capabilities with project goals. I thrive in dynamic team
                            environments, valuing open communication to transform ideas into actionable plans and deliverables.
                            My commitment to continuous learning keeps me updated with the latest trends in web technologies
                            and user-centric design principles. Whether refining an existing platform or building from
                            scratch, I approach every challenge with enthusiasm and a problem-solving mindset, striving to
                            create digital experiences that leave a lasting impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
