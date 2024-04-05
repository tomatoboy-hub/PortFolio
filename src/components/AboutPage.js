import React from 'react'
import History from './History'
import './styles/AboutPage.css'
import profileImage from './img/face.JPG';
function AboutPage() {
  return (
    <div className="about">
        <h1>About</h1>
        <img src={profileImage} alt="Profile" />
        <div className="profile">
					<h2>清水駿太　Hayata Shimizu</h2>
		    </div>
        <p className="description">慶應義塾大学 理工学部 情報工学科 3年<br/>AI、人工知能などを専攻とする</p>
        <History/>
        


    
    </div>
  )
}

export default AboutPage