import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </div>
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image">
                            <div className="about-image-inner">👨‍💻</div>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>Turning Ideas Into Reality</h3>
                        <p>
                            Hi 👋 I’m Mahesh, a Third-year Engineering student at VIT Pune who genuinely enjoys building things with code and turning ideas into working products.
                        </p>
                        <p>
                            I specialize in Java and Web Development, and I also have a basic understanding of Machine Learning concepts. I’ve worked on applications ranging from community platforms and academic systems to intelligent, data-driven solutions. Through hackathons, internships, and real-world projects, I’ve developed a strong foundation in problem-solving, clean code practices, and scalable system design.
                        </p>
                        <p>
                            My goal is to become a skilled software engineer who builds impactful products, solves real-world problems, and thrives in teams that value innovation and continuous learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
