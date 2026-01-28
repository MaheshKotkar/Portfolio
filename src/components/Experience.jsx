import React from 'react';
import './Achievements.css';


const Experience = () => {
    return (
        <section id="experience">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">My professional journey and highlights</p>
                </div>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3 className="experience-title">Java Developer Intern</h3>
                            <div className="experience-company">CodSoft</div>
                            <div className="experience-period">Jan 2025 - Feb 2025</div>
                            <div className="experience-type">Internship type: Virtual Internship</div>
                            <p className="experience-description"> Gained hands-on experience in Java programming by working on real-world application features and basic backend modules. Learned and applied object-oriented concepts, handled debugging and code improvements, and supported the development team in testing and maintaining Java-based systems.</p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-content">
                            <h3 className="experience-title">CyberSecurity Intern</h3>
                            <div className="experience-company">Whiteband Associates LLP</div>
                            <div className="experience-period">Jan 2024 - May 2024</div>
                            <div className="experience-type">Internship type: On-Site</div>
                            <p className="experience-description"> Worked on networking and cybersecurity, focusing on securing infrastructure, identifying vulnerabilities, and
                                implementing effective security solutions.</p>
                        </div>
                    </div>
                </div>

                <div className="achievements-section">
                    <div className="section-header">
                        <h2 className="section-title">Achievements & Competitions</h2>
                        <div className="title-underline"></div>
                        <p className="section-subtitle">Recognition and competitive milestones</p>
                    </div>

                    <div className="achievements-grid">
                        <div className="achievement-card">
                            <div className="achievement-icon-box">
                                <span className="achievement-emoji">🏆</span>
                            </div>
                            <h3 className="achievement-card-title">Avinya 3.0 Hackathon</h3>
                            <div className="achievement-participation">(150+ teams)</div>
                            <div className="achievement-badge runner-up">
                                <span className="badge-emoji">🥇</span> Runner-Up
                            </div>
                            <p className="achievement-description">
                                Built an AI-powered EdTech platform using Flask, React.js, and MongoDB under time constraints.
                            </p>
                            <div className="achievement-year">2025</div>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-icon-box">
                                <span className="achievement-emoji">🚀</span>
                            </div>
                            <h3 className="achievement-card-title">Adobe India Hackathon</h3>
                            <div className="achievement-badge cleared">
                                <span className="badge-emoji">✨</span> Cleared 1st Round
                            </div>
                            <p className="achievement-description">
                                Among 2.5 lakh participants across India, 80,000 were shortlisted for Round 1, and I successfully cleared it.
                            </p>
                            <div className="achievement-year">2025</div>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-icon-box">
                                <span className="achievement-emoji">🧠</span>
                            </div>
                            <h3 className="achievement-card-title">Dsa Problem Solving</h3>
                            <div className="achievement-badge leetcode">
                                <span className="badge-emoji">🎯</span> 400+ Problems
                            </div>
                            <p className="achievement-description">
                                Solved over 400+ competitive programming problems on the platform like LeetCode, focusing on Data Structures and Algorithms.
                            </p>
                            <div className="achievement-year">Ongoing</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
