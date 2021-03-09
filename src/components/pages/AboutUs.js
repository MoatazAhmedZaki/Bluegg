import React, { Component } from "react";
import "../pages/aboutCss.css";
import { Link } from "react-router-dom";
export default class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-page pt-5">
        <h1 className="px-3">
          Work,
          <br />
          that works.
        </h1>
        <p className="px-3 ">
          Not just pretty pictures. But beautifully designed ways of solving
          communication problems with branding, websites and campaigns.
        </p>


        <div className="grid-container my-5">
          <div className=" item1">
            <img src={require("../../images/team.jpg")} className="img-fluid" alt="pic" />
            <h5>Last minute checks for something new coming on Monday <span role="img"  aria-label="fire">🔥</span></h5>
          </div>
          <div className="item2">
            
            <img src={require("../../images/dog1.jpg")} className="img-fluid" alt="pic" />
            <h5>Productivity at an all time high in the studio! <span role="img"  aria-label="rocket">🚀🐶</span></h5>
          </div>
          <div className="item3">
            
            <img src={require("../../images/dog2.jpg")} className="img-fluid" alt="pic" />
            <h5>
              This good boy is co-working in the studio for the day. 10/10 <span role="img"  aria-label="dog"> 🐶</span>
            </h5>
          </div>
        </div>

        <p className="col-lg-6  col-sm-12 my-5">
          We’re a nice bunch. You’ll enjoy working with us. As a bonus you’ll
          also get to work with some of the best people in the business. Think
          Usain Bolt or Serena Williams, but with design, web and strategy
          skills. We love working with ambitious clients who want to stand out
          in their market and be the leaders in their field.
        </p>

        <div className="row py-5 years">
          <div className="col-lg-4 px-5">
            <h1>17 years</h1>
          </div>
          <div className="col-lg-8  px-5">
            <img
              src={require("../../images/tom-mike.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <p className=" py-5">
              Bluegg was born out of the lofty ambitions and reluctance to get a
              ‘proper job’ by Tom and Mike way back in 2002. Since then the duo
              have built an agency around the simple principals of hiring the
              best people, and doing the best work possible. It’s worked out
              pretty well so far.
            </p>
          </div>
        </div>

        <h1 className="px-3 py-5">What we believe</h1>
        <div className="w-75 float-right my-5">
          <div className="row">
            <div className="col-lg-6 py-5">
              <h3>Think big</h3>
              <p>
                Nothing great ever came from aiming low and thinking small.
                Whatever the project, we go as big as possible with our ideas
                and execution.
              </p>
            </div>
            <div className="col-lg-6  py-5">
              <h3>Make the most</h3>
              <p>
                Creative opportunity is everywhere. Every piece of work is our
                chance to show the world how good we are. Great work gets work.
              </p>
            </div>

            <div className="col-lg-6  py-5">
              <h3>Team work</h3>
              <p>
                Building a great agency means building the best team. We pride
                ourselves on the calibre of our people and the work they’ve
                done.
              </p>
            </div>
            <div className="col-lg-6 mb-5  py-5">
              <h3>Challenge everything</h3>
              <p>
                We don’t do what everyone expects. We challenge our clients.
                Challenge each other. Challenge our first idea. Challenge
                ourselves.
              </p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="grid-container my-5">
          <div className=" item4">
            <img
              src={require("../../images/bluegg.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <h5>
              Some of team Bluegg are taking on the Cardiff 10k this weekend.
              Why not come down and help spur them on!! <span role="img" aria-label="smile">🏃‍♂️🏃‍♀️🥵</span>
            </h5>
          </div>
          <div className="item5">
            
            <img src={require("../../images/pic3.jpg")} className="img-fluid" alt="pic"/>
            <h5>The new Wales Week London website gets underway!</h5>
          </div>
          <div className="item6">
            
            <img src={require("../../images/pic2.jpg")} className="img-fluid" alt="pic"/>
            <h5>Thinking caps on, bringing an awesome design to life!</h5>
          </div>
        </div>

        <div className="row py-5 years">
          <div className="col-lg-4 px-5 py-5">
            <h1>The team</h1>
          </div>
          <div className="col-lg-8  px-5">
            <img
              src={require("../../images/team2.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <p className=" py-5">
              This is the team. No ninjas. No rockstars. Just really nice,
              really talented people who tell it like it is and do the best
              work. We pay them and sometimes give them noodles. Sweet deal.
            </p>
          </div>
        </div>

        <div className="grid-container  py-5 my-5">
          <div className=" item1">
            <img
              src={require("../../images/uncle.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <h5>Last minute checks for something new coming on Monday <span role="img" aria-label="fire"> 🔥</span></h5>
          </div>
          <div className="item2">
            
            <img
              src={require("../../images/team3.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <h5>Productivity at an all time high in the studio! <span role="img" aria-label="rocket">🚀</span> <span role="img" aria-label="dog">🐶</span></h5>
          </div>
          <div className="item3">
            
            <img
              src={require("../../images/team4.jpg")}
              className="img-fluid"
              alt="pic"
            />
            <h5>
              This good boy is co-working in the studio for the day. 10/10  <span role="img" aria-label="dog">🐶</span>
            </h5>
          </div>
        </div>

        <div className="Jump-aboard">
          <h2 className="py-5 px-4">Jump aboard</h2>

          <p className="px-4 py-5">
            We don’t hire often, but when we do we only take on the best in the
            business. If that’s you and you want to talk to us about jobs,
            placements or internships drop an email to
            <Link>work@bluegg.co.uk</Link>
          </p>
        </div>
      </div>
    );
  }
}
