import React from 'react'
import History from './History'
import './styles/AboutPage.css'
function AboutPage() {
  return (
    <div className="about">
        <h1>About</h1>
        <p className="description">慶應義塾大学 理工学部 情報工学科 3年<br/>AI、人工知能などを選考とする</p>
        <History/>
        <div class="profile">
					<h2>清水駿太　Hayata Shimizu</h2>
					<dl class="contact-links">
            <dt>Github:</dt><dd><a href="https://github.com/tomatoboy-hub" target="_blanks">tomatoboy-hub</a></dd>
						<dt>Twitter:</dt><dd><a href="https://www.facebook.com/yuichi.tokuda.5"></a></dd>
						<dt>Instagram:</dt><dd><a href="http://instagram.com/underline_t">underline_t</a></dd>
					</dl>
		</div>

    
    </div>
  )
}

export default AboutPage