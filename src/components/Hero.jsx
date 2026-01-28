import React, { useState, useEffect } from 'react';
import resume from '../assets/Mahesh_Kotkar_Resume.pdf';
import Logo from './Logo';

const Hero = () => {
    const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Thinker', 'Aspiring Software Engineer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [fadeRole, setFadeRole] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeRole(false);
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFadeRole(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Logo className="hero-logo" />
                </div>
                <div className="hero-greeting">Hello, I'm</div>
                <h1 className="hero-name">Mahesh Kotkar</h1>
                <div
                    className="hero-role"
                    id="heroRole"
                    style={{ opacity: fadeRole ? 1 : 0, transition: 'opacity 0.3s ease' }}
                >
                    {roles[currentRoleIndex]}
                </div>
                <p className="hero-tagline">
                    Crafting elegant solutions to complex problems. Passionate about building exceptional
                    digital experiences that make a difference.
                </p>
                <div className="hero-cta">
                    <a href={resume} download="Mahesh_Kotkar_Resume.pdf" className="btn btn-primary">Download Resume</a>
                    <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
