import './index.css';
import {useState} from "react";

const Animation = () =>  {
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (id) => {
        setActiveLink(id);
        updateStyles(id);
    };

    const updateStyles = (id) => {
        const border = document.querySelector(".border-effect");
        const home = document.getElementById("home-icon");
        const explore = document.getElementById("explore-icon");
        const messages = document.getElementById("messages-icon");
        const profile = document.getElementById("profile-icon");

        switch (id) {
            case "home":
                border.style.left = "30px";
                break;
            case "explore":
                border.style.left = "130px";
                break;
            case "messages":
                border.style.left = "230px";
                break;
            case "profile":
                border.style.left = "330px";
                break;
        }

        removeStyles();
        document.getElementById(id).classList.add("active");
        document.getElementById(`${id}-icon`).classList.add("active-fill");
    };

    const removeStyles = () => {
        const links = document.querySelectorAll("li");
        const svgs = document.querySelectorAll("svg");

        links.forEach((link) => {
            link.classList.remove("active");
        });

        svgs.forEach((svg) => {
            svg.classList.remove("active-fill");
        });
    };

    return (
        <nav>
            <ul>
                <div className="border-effect"></div>
                <li id="home" className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>
                    <svg
                        className="active-fill"
                        id="home-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            id="home-no-touch"
                            d="M12 17.99V14.99"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>

                    <p>Home</p>
                </li>
                <li id="explore" className={activeLink === "explore" ? "active" : ""}
                    onClick={() => handleLinkClick("explore")}>
                    <svg
                        id="explore-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="my-cool-gradient" x2="1" y2="1">
                                <stop offset="5%" stop-color="black"/>
                                <stop offset="95%" stop-color="black"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p>Explore</p>
                </li>
                <li id="messages" className={activeLink === "messages" ? "active" : ""}
                    onClick={() => handleLinkClick("messages")}>
                    <svg
                        id="messages-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="my-cool-gradient" x2="1" y2="1">
                                <stop offset="5%" stop-color="black"/>
                                <stop offset="95%" stop-color="black"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p>Messages</p>
                </li>
                <li id="profile" className={activeLink === "profile" ? "active" : ""}
                    onClick={() => handleLinkClick("profile")}>
                    <svg
                        id="profile-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="my-cool-gradient" x2="1" y2="1">
                                <stop offset="5%" stop-color="black"/>
                                <stop offset="95%" stop-color="black"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p>Profile</p>
                </li>
            </ul>
        </nav>
    );
}

export {Animation};
