import React from 'react';
import ProfilePic from "./assets/images/PROFILE-1.png";
import ProfileBackground from './assets/images/Profile-Back-1.png';
import resumeFile from './assets/Resume/MyResume.pdf';
import data from './assets/data.json';
import './assets/css/Header.css';

function Header() {
    const { name, bio } = data;
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="">
            <section>
                <div className="bg-cover bg-center bg-no-repeat h-full " style={{ backgroundImage: `url(${ProfileBackground})` }}>
                    <div className="main p-16 flex w-full gap-8">
                        <div className="Intro bg-blue-900 rounded-3xl p-5">
                            <h1 className="text-blue-100 font-extrabold text-3xl underline">{name}</h1>
                            <p className="Bio pt-4 text-wrap text-white">{bio}</p>
                            <div className="mt-4">
                                <button onClick={handleDownloadResume} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Download Resume
                                </button>
                            </div>
                            <div className="SocialMedia">
                                {/* Render social media icons or links here */}
                            </div>
                        </div>
                       <div className="right-0">
                            <img
                                src={ProfilePic}
                                alt="Profile"
                                className="w-80 rounded-full border border-gray-200 shadow-md"

                            />
                          </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
