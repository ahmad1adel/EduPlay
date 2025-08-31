import React from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar.jsx';
import b1 from '../../imgs/b1.png'
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();

  return <>
    <Navbar/>
<div className="home">
<div className="first">



<div className="left-side">
    <div className="lines-container">

        <div className="left-lines">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
            <div className="line-four"></div>
        </div>

        <div className="right-lines">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
            <div className="line-four"></div>
        </div>

    </div>

    <div className="sd">
        <div className="texting">
            <div className="text-one">
                <span className="fun">Fun Learning <br/>Starts <span className="here">Here!</span></span>
                <span className="edu">At EduPlay, Our website turns learning into an adventure,<br/> keeping kids entertained while they gain new skills.</span>
            </div>

            <div className="btns">
                <button className="b1" onClick={() => navigate('/courses')}>
                📚 Explore library
                </button>

                <button className="b2" onClick={() => navigate('/register')}>
                <i className="fa-duotone fa-solid fa-user"></i> Join Us!
                </button>
            </div>

            <div className="rating">
                <span className="score">4.8/5.0</span>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-alt"></i>
                </div>
                <span className="reviews">based on 2000 reviews</span>
            </div>

        </div>
    </div>



    
</div>


<div className="right-side">

    <div className="container">

        <img src="/imgs/girl.png" className="overlay-image" alt="Overlay Image"/>


        <div className="cross-container">
            <div className="left-cross">
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
                <div className="Lcross"></div>
            </div>
            
            <div className="right-cross">
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
                <div className="Rcross"></div>
            </div>
        </div>
    </div>
</div>





</div>

<div className="second" style={{
backgroundImage: `url(${b1})`,
}}>
<section className="features">
    <div className="feature">
        <div className="f1">
            <img src="/imgs/m.png" alt="Engaging Games" className="feature-icon"/>
            <h3>Engaging Games</h3>
            <p>Kids play engaging, interactive games that are geared toward different subjects, making learning fun and efficient.</p>
        </div>

        <div className="f2">
            <img src="/imgs/v.png" alt="Videos" className="feature-icon"/>
            <h3>Videos</h3>
            <p>Learn with fun through exciting lessons, catchy songs, smart stories, cool science experiments, math tricks, ABC adventures, and amazing facts about the world!</p>
        </div>

        <div className="f3"> 
            <img src="/imgs/r.png" alt="Courses" className="feature-icon"/>
            <h3>Courses</h3>
            <p>Learning with Crossing Knowledge is enjoyable, and research proves its effectiveness! Through quick, bite-sized lessons, you can earn points, unlock new levels, and develop real-world communication skills.</p>
        </div>
    </div>
</section>
</div>




<section className="courses">
<h2>Our Featured Course <br/><span>at EduPlay</span></h2>
<div className="course-grid">
    <div className="course">
        <img src="/imgs/8.png" alt="Kids Science Course"/>
        <h3>Kids Science Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/7.png" alt="Kids Chef Course"/>
        <h3>Kids Chef Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/6.png" alt="Kids Music Course"/>
        <h3>Kids Music Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/5.png" alt="Kids Swimming Course"/>
        <h3>Kids Swimming Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/4.png" alt="Kids Aerobic Course"/>
        <h3>Kids Aerobic Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/3.png" alt="Kids Languages Course"/>
        <h3>Kids Languages Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/2.png" alt="Kids Craft & Art Course"/>
        <h3>Kids Craft & Art Course</h3>
    </div>
    <div className="course">
        <img src="/imgs/1.png" alt="Kids Go Green Course"/>
        <h3>Kids Go Green Course</h3>
    </div>
</div>
</section>





<section className="hero-section">
<div className="hero-content">
    <h1>Explore exciting videos, & play your way to brilliance</h1>
    <p>
        Why settle for ordinary when you can explore the extraordinary? 
        Join us and discover why EduPlay is not just the best – it's the magical 
        key to unlocking creativity for your kids.
    </p>
    <a href="#" className="cta-button">
        <span>🎓 Explore our Videos</span>
    </a>
</div>
<div className="hero-image">
    <img src="/imgs/girl_over_book.png" alt="Kid Jumping Over Books"/>
</div>
</section>



<section className="learning-section" style={{
backgroundImage: `url(${b1})`,
}}>
<div className="top">
    <h2>Join millions of confident learners</h2>
    <div className="stats">
        <div>
            <span>30 million learners</span>
            <p>Loved by over</p>
        </div>
        <div className="bordering"></div>

        <div>
            <span>50 million games</span>
            <p>Browse over</p>
        </div>
        <div className="bordering"></div>

        <div>
            <span>increased confidence in 2 weeks</span>
            <p>80% learners show</p>
            
        </div>
    </div>
</div>

<div className="middle">

    <h3>Unlocking minds, One game at a time 🚀</h3>
    <p className="description">
        Unlock joyful learning with EduPlay: Games that spark brilliance, practice sheets that perfect skills, 
        and the best adventure for growing minds. <a href="#">Explore, Play, Thrive!</a>
    </p>
    
    <div className="pagination">
        <button className="active">1</button>
        <button className="active2">2</button>
        <button className="active3">3</button>
        <button className="active4">4</button>
        <button className="active5">5</button>
        <button className="active6">6</button>
        <div className="type-btn">
            <button className="games-btn">Games (3867+)</button>
            <button className="sheets-btn">Practice sheets (3238+)</button>
        </div>

    </div>


</div>


<div className="game-cards">
    <div className="card">
        <img src="/imgs/dog.jpg" alt="Pre-Kindergarten"/>
        <h4>Pre-Kindergarten</h4>
        <div className="tags">
            <span>Shapes</span> <span>Addition</span> <span>Counting</span>
        </div>
        <a href="#">See all 320 games</a>
    </div>
    <div className="card">
        <img src="/imgs/farm.png" alt="Kindergarten"/>
        <h4>Kindergarten</h4>
        <div className="tags">
            <span>Addition</span> <span>Geometry</span> <span>Number sense</span>
        </div>
        <a href="#">See all 250 games</a>
    </div>
    <div className="card">
        <img src="/imgs/snake.png" alt="Grade 1"/>
        <h4>Grade 1</h4>
        <div className="tags">
            <span>Mathematics</span> <span>Science</span> <span>Subtraction</span>
        </div>
        <a href="#">See all 410 games</a>
    </div>
</div>

<div className="last">
<button className="library-btn">Browse our library</button>
<p className="release-info"><i className="fa-solid fa-bell"></i> We keep releasing new games <a href="#">every three weeks</a></p>
</div>

</section>



<div className="newsletter-container">
<div className="inside">
    <div className="newsletter-content">
        <h2>Newsletter</h2>
        <p>Spark joy in learning 🌟 Join our newsletter to get the latest games, practice sheets, and bedtime stories. 🚀</p>
    </div>
    <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required/>
        <button type="submit">🚀 Subscribe</button>
    </form>
</div>

</div>



<div className="no4" style={{
backgroundImage: `url(${b1})`,
}}>
<section className="testimonials">
    <h2>95% of parents said their<br/>children enjoy using EduPlay</h2>
    <p>Below are some of the reviews parents left on our <a href="#">App Store</a> and <a href="#">Google Play</a></p>
    <div className="reviews">
        <div className="review">
            <i className="fa-solid fa-quote-right"></i>
            <p>I absolutely love this website for my kids! It’s fun, educational, and keeps them engaged without mindless scrolling on social media</p>
            <div className="modify">
                <strong>Mohamed Magdy</strong>
                <div className="stars">★★★★★</div>
            </div>
        </div>
        <div className="review">
            <i className="fa-solid fa-quote-right"></i>
            <p>Finally, a website my kids love that actually teaches them something! The games and videos make learning fun, and I feel good knowing they’re safe online</p>
            <div className="modify">
                <strong>Mohamed Roshdy</strong>
                <div className="stars">★★★★★</div>
            </div>
        </div>
        <div className="review">
            <i className="fa-solid fa-quote-right"></i>
            <p>My son used to spend hours on social media, but now he’s hooked on this site! He’s learning new things every day without even realizing it.</p>
            <div className="modify">
                <strong>Ahmed Mohamed</strong>
                <div className="stars">★★★★★</div>
            </div>
            
        </div>
    </div>
</section>
</div>

<div className="QA">
<div className="faq-container">

    <div className="fq-left">
        <span className="faq-title">Frequently Asked<br/> Questions</span>
    </div>
    

    <div className="fq-right">

        <div className="faq-item">
            <div className="faq-question">What is EduPlay, and how does it work?
                <i className="fas fa-circle-minus icon"></i>
            </div>
            <div className="faq-answer" style={{ display: 'block' }}>
                <h4>EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective.       </h4>             </div>
        </div>
        
        <div className="faq-item">
            <div className="faq-question">Is EduPlay suitable for all age groups?
                <i className="fas fa-circle-plus icon"></i>
            </div>
            <div className="faq-answer">Yes, EduPlay is designed to adapt to different learning styles, making it suitable for various age groups.</div>
        </div>
        
        <div className="faq-item">
            <div className="faq-question">How does EduPlay ensure my child’s safety while using the app?
                <i className="fas fa-circle-plus icon"></i>
            </div>
            <div className="faq-answer">EduPlay prioritizes child safety by implementing strict privacy policies and safe learning environments.</div>
        </div>
        
        <div className="faq-item">
            <div className="faq-question">Can parents track their child’s progress on EduPlay?
                <i className="fas fa-circle-plus icon"></i>
            </div>
            <div className="faq-answer">Yes, parents can monitor their child's progress through detailed reports and analytics provided within the app.</div>
        </div>
        
        <div className="faq-item">
            <div className="faq-question">Are there any costs associated with using EduPlay?
                <i className="fas fa-circle-plus icon"></i>
            </div>
            <div className="faq-answer">EduPlay offers both free and premium subscription plans, giving users flexible options to choose from.</div>
        </div>

    </div>
    
</div>

</div>





<div className="finalDIV">
<div className="containering" style={{
backgroundImage: `url(${b1})`,
}}>
    <div className="image-container">
        <img src="/imgs/girl_on_bike.png" alt="EduPlay Toy"/>
    </div>
    <div className="content">
        <h1>Try EduPlay for free</h1>
        <p>Unlock knowledge through play. Dive into EduPlay's world of fun and discovery. Ready for endless smiles and learning adventures?</p>
        <a href="#" className="btn">Get started for free</a>
    </div>
</div>

</div>


<footer>
<div className="footer-container">
    <div className="footer-section">
        <img src="/imgs/logo.png" alt="EduPlay Logo" className="logo-img"/>
        <p>Where every game is a lesson, and every lesson is a game. <br/>
           Our app transforms education into playful games, <br/>
           captivating young minds with interactive fun.</p>
    </div>

    <div className="footer-section">
        <h4>Quick links</h4>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Videos</a></li>
        </ul>
    </div>

    <div className="footer-section">
        <h4>Company</h4>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
        </ul>
    </div>

    <div className="footer-section social">
        <h4>Connect with us</h4>
        <ul>
            <li><i className="fa-brands fa-facebook"></i> <a href="#">Facebook</a></li>
            <li><i className="fa-brands fa-instagram"></i> <a href="#">Instagram</a></li>
            <li><i className="fa-brands fa-twitter"></i> <a href="#">Twitter</a></li>
            <li><i className="fa-brands fa-tiktok"></i> <a href="#">TikTok</a></li>
        </ul>
    </div>
</div>

<hr/>

<div className="footer-bottom">
    <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Support</a>
    </div>
    <p>© Copyright 2024, All Rights Reserved <br/>
       to our graduation project team</p>
</div>
</footer>
</div>
    </>
}
