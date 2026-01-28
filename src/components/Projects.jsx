import React from 'react';
import forumHubLogo from '../assets/FORUMHUB LOGO.jpg';
import thumblifyLogo from '../assets/THUMBLIFY LOGO.jpg';
import smartMedLogo from '../assets/SMARTMED SCHEDULER LOGO.jpg';
import questionPaperLogo from '../assets/AUTOMATED QUESTION PAPER GENERATOR LOGO.png';
import hotelLogo from '../assets/HOTEL MANAGEMENT SYSTEM LOGO.jpg';
import quantumLogo from '../assets/Quantum LLVM Compiler Logo.jpg';
import pdfShiftLogo from '../assets/PDFSHIFT logo.jpg';
import smartTrafficLogo from '../assets/Smart Traffic Manipulation Using IOT LOGO.jpg';
import algoVisLogo from '../assets/AlgoVis Logo.jpg';


const Projects = () => {
    return (
        <section id="projects">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Some of my recent work</p>
                </div>
                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            src={forumHubLogo}
                            alt="E-Commerce Platform" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">ForumHub</h3>
                            <p className="project-description">ForumHub is a secure, easy-to-use platform for community discussions. It lets users share posts with photos and videos, chat through comments, and react in real-time. It also includes a powerful admin dashboard to help moderators keep the community safe and organized.</p>
                            <div className="project-tech">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Express</span>
                                <span className="tech-tag">MongoDB</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/ForumHub" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={thumblifyLogo}
                            alt="AI Task Manager" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Thumblify</h3>
                            <p className="project-description">Thumblify is an AI-powered platform that generates professional YouTube thumbnails in seconds. It bridges the gap between high-end AI design and ease of use, removing the need for expensive subscriptions or complex prompt engineering.</p>
                            <div className="project-tech">
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Express</span>
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">Cloudinary</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={smartMedLogo}
                            alt="Social Media Dashboard" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">SmartMed Scheduler and Heart Disease Predictor</h3>
                            <p className="project-description">SmartMed is an AI-integrated healthcare solution that merges automated appointment scheduling with machine learning to predict heart disease risk. By bridging the gap between administrative efficiency and early clinical detection, SmartMed empowers both doctors and patients to make proactive, data-driven health decisions.</p>
                            <div className="project-tech">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Machine Learning (Scikit-learn)</span>
                                <span className="tech-tag">Flask</span>
                                <span className="tech-tag">MySQL</span>
                                <span className="tech-tag">Pandas & NumPy</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={questionPaperLogo}
                            alt="Automated Question Paper Generator System" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Automated Question Paper Generator System</h3>
                            <p className="project-description">Automated Question Paper Generator System is a platform that automates exam creation using an intelligent selection algorithm. It allows educators to generate custom question papers based on difficulty, marks distribution, and subject rules with instant PDF export. By streamlining the question banking and selection process, it eliminates manual errors and saves hours of administrative work.</p>
                            <div className="project-tech">
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Express</span>
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">jsPDF</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/Automated-Question-Paper-Generator-System" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={smartTrafficLogo}
                            alt="Smart Traffic Manipulation Using IOT" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Smart Traffic Manipulation Using IOT</h3>
                            <p className="project-description">Smart Traffic Light Manipulation is an intelligent IoT- and AI-powered traffic management system that dynamically optimizes signal timings using real-time traffic data. By leveraging deep learning and adaptive control mechanisms, it reduces congestion and ensures priority routing for emergency vehicles, enabling safer and more efficient urban mobility.</p>
                            <div className="project-tech">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">TensorFlow</span>
                                <span className="tech-tag">OpenCV</span>
                                <span className="tech-tag">YOLOV8</span>
                                <span className="tech-tag">Raspberry Pi</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/Smart-Traffic-Manipulation-Using-IOT" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={hotelLogo}
                            alt="Hotel Management System" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Hotel Management System</h3>
                            <p className="project-description">Hotel Management System is a Java application designed to manage hotel bookings, guest records, and billing in one place. It uses JDBC to connect directly to a MySQL database, ensuring all information is saved securely and updated in real-time. This system makes hotel management easier by replacing manual logs with a fast, digital interface.</p>
                            <div className="project-tech">
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">Swing</span>
                                <span className="tech-tag">JDBC</span>
                                <span className="tech-tag">MySQL</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/Hotel-Management-System" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={quantumLogo}
                            alt="Quantum LLVM Compiler" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">Quantum LLVM Compiler</h3>
                            <p className="project-description">Quantum-LLVM is a hybrid compiler that unifies quantum (QASM) and classical (NASM) assembly into LLVM Intermediate Representation. It enables seamless cross-platform execution by merging quantum logic with classical register management under a single optimization pipeline. This tool streamlines the development of next-generation hybrid applications through hardware-independent code generation.</p>
                            <div className="project-tech">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">React.js</span>
                                <span className="tech-tag">LLVM</span>
                                <span className="tech-tag">Qiskit</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/Quantum-LLVM-Compiler" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={pdfShiftLogo}
                            alt="PDFShift" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">PDFShift</h3>
                            <p className="project-description">PDFSHIFT is a versatile file transformation platform designed to bridge the gap between documents, images, and audio. Whether you need to merge complex PDFs, convert visuals into documents, or transform text into accessible audio, PDFSHIFT provides a fast and secure ecosystem for all your file conversion needs. It’s an essential tool for productivity, turning static files into dynamic, multi-purpose assets.</p>
                            <div className="project-tech">
                                <span className="tech-tag">HTML</span>
                                <span className="tech-tag">CSS</span>
                                <span className="tech-tag">Javascript</span>
                                <span className="tech-tag">PHP</span>
                                <span className="tech-tag">MySQL</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/PDFShift" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <img
                            src={algoVisLogo}
                            alt="AlgoVis" className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">AlgoVis</h3>
                            <p className="project-description">AlgoVis is an interactive web platform that visualizes complex algorithms in real time, including Dijkstra’s, Kruskal’s, and N-Queen backtracking. Built with Vanilla JavaScript and HTML5 Canvas, it enables step-by-step execution, pseudocode synchronization, and adjustable speeds—helping students and developers intuitively understand data structures and algorithmic logic through hands-on visualization.</p>
                            <div className="project-tech">
                                <span className="tech-tag">HTML5</span>
                                <span className="tech-tag">CSS</span>
                                <span className="tech-tag">Vanilla Javascript</span>
                                <span className="tech-tag">HTML5 Canvas</span>
                                <span className="tech-tag">Bootstrap</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/MaheshKotkar/AlgoVis" target="_blank" rel="noopener noreferrer" className="project-link project-link-github">GitHub →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
