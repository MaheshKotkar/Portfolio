import React from 'react';

const Education = () => {
    return (
        <section id="education">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">My academic background</p>
                </div>
                <div className="education-grid">
                    {/* 10th - SSC */}
                    <div className="education-card">
                        <div className="education-icon">🏫</div>
                        <h3 className="education-degree">10th - SSC</h3>
                        <div className="education-school">Shree JairamBhai High School, Nashik</div>
                        <div className="education-score-container">
                            <div className="education-score">94.60%</div>
                        </div>
                    </div>

                    {/* Diploma */}
                    <div className="education-card">
                        <div className="education-icon">🎓</div>
                        <h3 className="education-degree">Diploma in Information Technology</h3>
                        <div className="education-school">Government Polytechnic Nashik</div>
                        <div className="education-score-container">
                            <div className="education-score">94.24%</div>
                        </div>
                    </div>

                    {/* B.Tech */}
                    <div className="education-card">
                        <div className="education-icon">💻</div>
                        <h3 className="education-degree">B.Tech in Information Technology</h3>
                        <div className="education-school">Vishwakarma Institute of Technology, Pune</div>
                        <div className="education-score-container">
                            <div className="education-score">CGPA: 9.03</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
