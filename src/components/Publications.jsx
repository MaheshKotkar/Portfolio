import React from 'react';
import './Publications.css';

const Publications = () => {
    return (
        <section id="publications">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Publications</h2>
                    <p className="section-subtitle">My research work</p>
                </div>

                <div className="publications-grid">
                    <div className="publication-card">
                        <div className="publication-icon-container">
                            <div className="publication-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="publication-content">
                            <h3 className="publication-name">Automated Question Paper Generator System</h3>
                            <p className="publication-conference">ICMEET - 2024 (<span className="publisher-highlight">Springer</span>)</p>
                            <a href="https://doi.org/10.1007/978-981-96-7253-0_2" className="publication-link" target="_blank" rel="noopener noreferrer">
                                View Publication →
                            </a>
                        </div>
                    </div>

                    <div className="publication-card">
                        <div className="publication-icon-container">
                            <div className="publication-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="publication-content">
                            <h3 className="publication-name">Smart Traffic Manipulation Using IOT</h3>
                            <p className="publication-conference">ISAECT - 2025 (<span className="publisher-highlight">IEEE Explore</span>)</p>
                            <a href="https://ieeexplore.ieee.org/document/11318693" className="publication-link" target="_blank" rel="noopener noreferrer">
                                View Publication →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
