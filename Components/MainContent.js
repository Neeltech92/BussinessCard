import React from "react"

export default function MainContent() {
    
    return (
        <main>
            <img className="profile-pic" src="./images/neel.jpg" />
            <div className="profile-info">
                <div className="desc">
                    <h2>Mrityunjay Mishra</h2>
                    <h3>Frontend Developer</h3>
                    <p>MrityunjayMishra.Website</p>
                    <div className="btn-section">
                        <button className="btn-light" href="#">
                            <i className="fa-solid fa-envelope icon-btn"></i>
                            Email
                        </button>
                        <button className="btn-blue" href="#">
                            <i className="fa-brands fa-linkedin icon-btn"></i>
                            LinkedIn
                        </button>
                    </div>
                </div>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
    
}