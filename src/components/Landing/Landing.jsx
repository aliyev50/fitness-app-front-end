import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
      <>

    <section className="content">
      
          <h3>Good Morning Champ</h3>
          <button className="contact-btn" >CONTACT US</button>
          </section>


          <div className="subject">
            <p className="p1">
              It's a new day,
              <span>
                a new opportunity to sculpt the best version of yourself.
                Embrace the energy, </span>
              feel the burn, and conquer your fitness goals with unwavering
              determination.
            </p>
          </div>
        
        
      

      <section id="schedules" className="schedule">
      <div className="container">
          <div className="table-wrapper">
         
              <h2>Weekly Schedule</h2>
              <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Scheduled Exercise</th>
                  <th>Time</th>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>Running</td>
                  <td>6:00 AM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>Swimming</td>
                  <td>7:00 AM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>Cycling</td>
                  <td>6:30 AM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>Yoga</td>
                  <td>6:00 AM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>Weight Training</td>
                  <td>8:00 AM</td>
                </tr>
                </thead>
              </table>
            </div>

            <div className="table-wrapper class" >
              <h2>Last 5 Exercises</h2>
              <table>
              <tbody>
                <tr>
                  <th>Exercise</th>
                  <th>Duration</th>
                </tr>
                <tr>
                  <td>Running</td>
                  <td>30 min</td>
                </tr>
                <tr>
                  <td>Swimming</td>
                  <td>45 min</td>
                </tr>
                <tr>
                  <td>Cycling</td>
                  <td>60 min</td>
                </tr>
                <tr>
                  <td>Yoga</td>
                  <td>40 min</td>
                </tr>
                <tr>
                  <td>Weight Training</td>
                  <td>50 min</td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>

        <div className="showcase">
          <video
            autoPlay
            loop
            muted
            poster="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/images/poster.webp"
            role="none"
          >
            <source src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/landing-page-with-scroll-driven/assets/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="plans" className="cards">
        
          <div className="container1">
            <a className="Card">
              <div>
                <h2> 🏆 Personal Bests</h2>
                <ul>
                  <li>Fastest 5K Run: 22 min</li>
                  <li>Heaviest Deadlift: 250 lbs</li>
                  <li>Longest Plank: 3 min</li>
                </ul>
              </div>
            </a>
            <a className="Card">
              <div>
                <h2> 🏁 Challenges</h2>
                <ul>
                  <li>30-Day Running Streak</li>
                  <li>1000 Pushups in a Month</li>
                  <li>Swim 20km in a Month</li>
                </ul>
              </div>
            </a>
            <a className="Card">
              <div>
                <h2> 👥 Friends Activity</h2>
                <ul>
                  <li>Jane just set a new record in cycling: 30 miles!</li>
                  <li>Mike completed the 30-Day Running Streak Challenge!</li>
                  <li>Anna shared a new workout: 'Hill Sprints Interval'.</li>
                </ul>
              </div>
            </a>
          </div>
       
      </section>
     
      </>
    );
  };
  
  export default Landing;
  