import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">My technical toolkit</p>
                </div>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3><span className="category-icon">⌨️</span> Programming Languages</h3>
                        <div className="skill-items">
                            <div className="skill-item"><i className="devicon-c-plain colored"></i> <span>C</span></div>
                            <div className="skill-item"><i className="devicon-cplusplus-plain colored"></i> <span>C++</span></div>
                            <div className="skill-item"><i className="devicon-java-plain colored"></i> <span>Java</span></div>
                            <div className="skill-item"><i className="devicon-python-plain colored"></i> <span>Python</span></div>
                            <div className="skill-item"><i className="devicon-javascript-plain colored"></i> <span>JavaScript</span></div>
                            <div className="skill-item"><i className="devicon-php-plain colored"></i> <span>PHP</span></div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><span className="category-icon">🔮</span> Frontend</h3>
                        <div className="skill-items">
                            <div className="skill-item"><i className="devicon-html5-plain colored"></i> <span>HTML</span></div>
                            <div className="skill-item"><i className="devicon-css3-plain colored"></i> <span>CSS</span></div>
                            <div className="skill-item"><i className="devicon-bootstrap-plain colored"></i> <span>Bootstrap</span></div>
                            <div className="skill-item"><i className="devicon-react-original colored"></i> <span>React.js</span></div>
                            {/* <div className="skill-item"><i className="devicon-nextjs-original-wordmark colored" style={{ color: 'white' }}></i>
                                <span>Next.js</span>
                            </div> */}
                            <div className="skill-item"><i className="devicon-typescript-plain colored"></i> <span>TypeScript</span></div>
                            <div className="skill-item"><i className="devicon-tailwindcss-original colored"></i> <span>Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><span className="category-icon">⚙️</span> Backend</h3>
                        <div className="skill-items">
                            <div className="skill-item"><i className="devicon-nodejs-plain-wordmark colored"></i> <span>Node.js</span></div>
                            <div className="skill-item"><i className="devicon-express-original colored" style={{ color: 'white' }}></i>
                                <span>Express</span>
                            </div>
                            <div className="skill-item"><i className="devicon-python-plain colored"></i> <span>Python</span></div>
                            <div className="skill-item"><span>🔌</span> <span>RESTful APIs</span></div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><span className="category-icon">🗄️</span> Database</h3>
                        <div className="skill-items">
                            <div className="skill-item"><i className="devicon-mongodb-plain colored"></i> <span>MongoDB</span></div>
                            <div className="skill-item"><i className="devicon-mariadb-original colored"></i> <span>MariaDB</span></div>
                            <div className="skill-item"><i className="devicon-firebase-plain colored"></i> <span>Firebase</span></div>
                            <div className="skill-item"><i className="devicon-mysql-plain colored"></i> <span>MySQL</span></div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><span className="category-icon">🛠️</span> Tools</h3>
                        <div className="skill-items">
                            <div className="skill-item"><i className="devicon-git-plain colored"></i> <span>Git</span></div>
                            <div className="skill-item"><i className="devicon-docker-plain colored"></i> <span>Docker</span></div>
                            <div className="skill-item"><i className="devicon-amazonwebservices-plain-wordmark colored"></i> <span>AWS</span>
                            </div>
                            <div className="skill-item"><i className="devicon-vscode-plain colored"></i> <span>VS Code</span></div>
                            <div className="skill-item"><i className="devicon-postman-plain colored"></i> <span>Postman</span></div>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><span className="category-icon">🎓</span> Core CS Fundamentals</h3>
                        <div className="skill-items">
                            <div className="skill-item"><span>🗄️</span> <span>DBMS</span></div>
                            <div className="skill-item"><span>🖥️</span> <span>Operating Systems</span></div>
                            <div className="skill-item"><span>🧩</span> <span>OOPS</span></div>
                            <div className="skill-item"><span>🌐</span> <span>Computer Networks</span></div>
                            <div className="skill-item"><span>🌳</span> <span>Data Structures & Algorithms</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
