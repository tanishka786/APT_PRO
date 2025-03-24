import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter, faDog, faFish, faDragon, faSpider, faDove, faHippo } from "@fortawesome/free-solid-svg-icons";
import "./CardMaker.module.css";

export default function CardMaker() 
{
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        location: "",
        CurrentRole: "",
        specify: "",
        preferredLanguages: "",
        socialLinks: "",
        verificationDocs: "",
        image: "",
    });
    

    function HandleChange(event) {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function HandleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUserData((prevData) => ({
                ...prevData,
                image: imageUrl,
            }));
        }
    }

    function HandleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            setUserData((prevData) => ({
                ...prevData,
                verificationDocs: file.name,
            }));
        }
    }

    function displayIcon() {
        switch (userData.icon) {
            case "otter": return faOtter;
            case "dog": return faDog;
            case "fish": return faFish;
            case "dragon": return faDragon;
            case "spider": return faSpider;
            case "hippo": return faHippo;
            case "dove": return faDove;
            default: return "";
        }
    }
    


    return (
        <main className="col">
            <section className="form">
                <div className="col">
                    <label>First Name</label>
                    <input type="text" name="firstName"  placeholder="Enter your first name" value={userData.firstName} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Enter your last name" value={userData.lastName} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email in abc@xyz.com"value={userData.email} onChange={HandleChange} required />
                </div>
                <div className="col">
                    <label>Password</label> 
                    <input type="password" name="password" placeholder="Enter your password" value={userData.password} onChange={HandleChange} required />
                </div>
                <div className="col">
    <label htmlFor="currentRole">Current Role</label>
    <select
        id="currentRole"
        className="form__input"
        value={userData.currentRole}
        name="currentRole"
        onChange={HandleChange}
        required
    >
        <option value="">Select</option>
        <option value="Student">Student</option>
        <option value="Working">Working</option>
        <option value="Other">Other</option>
    </select>
</div>



{userData.currentRole === "Student" && (
    <div className="col">
        <label htmlFor="Student">Specify please</label>
        <input
            id="Student"
            type="text"
            className="form__input"
            placeholder="Eg. B.Tech, M.Tech, BCA, MCA, etc."
            value={userData.Student}
            name="oStudent"
            onChange={HandleChange}
            required
        />
    </div>
)}

{userData.currentRole === "Working" && (
    <div className="col">
        <label htmlFor="Working">Specify please</label>
        <input
            id="Working"
            type="text"
            className="form__input"
            placeholder="Eg. IT, Finance, Marketing, etc."
            value={userData.Working}
            name="Working"
            onChange={HandleChange}
            required
        />
    </div>
)}

{userData.currentRole === "Other" && (
    <div className="col">
        <label htmlFor="other">Specify please</label>
        <input
            id="otherrole"
            type="text"
            className="form__input"
            placeholder="Enter role"
            value={userData.otherrole}
            name="otherrole"
            onChange={HandleChange}
            required
        />
    </div>
)}


<div className="col">
    <label htmlFor="preferredLanguages">Preferred Language(s)</label>
    <select
        id="preferredLanguages"
        className="form__input"
        value={userData.preferredLanguages}
        name="preferredLanguages"
        onChange={HandleChange}
        required
    >
        <option value="">Select a language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Chinese">Chinese</option>
        <option value="Japanese">Japanese</option>
        <option value="Russian">Russian</option>
    </select>
</div>

                <div className="col">
                    <label>Social Media/Portfolio Links</label>
                    <input type="text" name="socialLinks" placeholder="E.g., LinkedIn, GitHub, Personal Website" value={userData.socialLinks} onChange={HandleChange} />
                </div>
                <div className="col">
                    <label>Verification Documents</label>
                    <input type="file" name="verificationDocs"  onChange={HandleFileUpload} />
                </div>
                <div className="col">
                    <label>Upload Image</label>
                    <input type="file" name="image" accept="image/*" onChange={HandleImageUpload} />
                </div>
            </section>

            <section className="col">
                <h2>Profile Card Output</h2>
                <div id="business__card">
                    <div id="business__card-header">
                        {userData.image && <img src={userData.image} alt="User Profile" />}
                    </div>
                    <div id="business__card-body">
                        <h2>{userData.firstName} {userData.lastName}</h2>
                        <h3>{userData.role}</h3>
                        <p>Email: {userData.email}</p>
                        <p>CurrentRole: {userData.currentRole} ({userData.specify})</p>
                        <p>Preferred Languages: {userData.preferredLanguages}</p>
                        <p>Social Links: {userData.socialLinks}</p>
                        {userData.icon && <FontAwesomeIcon icon={displayIcon()} size="2x" />}
                    </div>
                </div>
            </section>
        </main>
    );



    
}
