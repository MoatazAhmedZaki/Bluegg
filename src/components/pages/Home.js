import React, { Component } from "react";
import { Link  } from "react-router-dom";
import "../pages/homeCss.css";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props)
  }
  render() {
    return (
      <div className="homepage">
        <div className="home-header  ">
          <div className="col-sm-10 m-auto tit  d-flex ">
            <h1>
              the design agency <br /> for <br className="res" />
              <span className="glitch"> </span>
            </h1>
          </div>

          <p className="col-sm-10 m-auto tit2">
            We create brands, websites and campaigns for clients who want to
            shake up their industry.
          </p>
        </div>

        <div className="our-work-section">
          <div className="mazuma ">
            <img
              src={require("../../images/mazuma-hero.jpg")}
              className=" img-fluid"
              alt="pic"
            />
          </div>

          <p>
            <strong>Branding </strong>
            <Link to="/">
              A brand for Mazuma that proves accountancy doesn't need to be
              boring
            </Link>
          </p>
        </div>

        <div className="random-work-section pb-5 mb-5">
          <p className="col-md-8 us pb-5 mb-5">
            Hey, we’re Bluegg. We’re a design agency in (sometimes) sunny
            Cardiff. We’ve been creating great work since the days before
            Google. We’re not massive, and not too small—a bit like our clients.
            We’re friendly, but we’re not afraid to challenge things. If you
            want results, you’ll need that.
          </p>

          <div className="row  ">
            <div className="col-lg-5  col-md-12 col-sm-12 hena my-3 ">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/ap-project-cover.jpg")}
                    className="img-fluid"
                    alt="pic"
                  />
                </Link>
              </div>
              <p>
                <strong>Web Design </strong>
                <Link to="/">
                  How we built a stronger brand and website for Absolute
                  Performance
                </Link>
              </p>
            </div>

            <div className="col-lg-7 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/TSC-hero.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">A brand that opens doors for The Skills Centre </Link>
              </p>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7  col-md-12 col-sm-12 hena my-3 ">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/wales-week-video-cover-still.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Web Design </strong>
                <Link to="/">
                  How we built a stronger brand and website for Absolute
                  Performance
                </Link>
              </p>
            </div>

            <div className="col-lg-5 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/sudeley-castle-cover.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">A brand that opens doors for The Skills Centre </Link>
              </p>
            </div>

            <p className="more-projects pt-5 mt-5 pl-3">
              <Link to="/OurWork"> More Projects </Link>
            </p>
          </div>
        </div>

        <div className="next-level-seciton py-5">
          <h2 className="next-level-title my-5 pl-5 col-sm-8">
            We’ll take your brand, website & campaign to the next level.
          </h2>

          <div className="holder ">
            <div className="row  my-5 pr-5 keda">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <img
                  src={require("../../images/branding.gif")}
                  className="img-fluid"
                  alt="pic"

                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 my-5  ">
                <h2>Branding</h2>
                <p>
                  We'll turn up the volume of your brand. Big, bold, beautiful
                  brands that excite, delight, position and elevate. Bursting
                  with energy, ambition and personality. The results speak for
                  themselves.
                </p>
              </div>
            </div>

            <div className="row my-5 pr-5 second keda">
              <div className="col-lg-8 col-md-12 col-sm-12 ">
                <img
                  src={require("../../images/web-design.gif")}
                  className="img-fluid"
                  alt="pic"

                />
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 my-5 ">
                <h2>Web Design</h2>
                <p>
                  We design beautiful, intuitive websites that promote your
                  business, sell your products and convert visitors into
                  customers. Every one focused on goals, results and returning
                  your investment.
                </p>
              </div>
            </div>

            <div className="row  my-5 pr-5 keda">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <img
                  src={require("../../images/shout_5.gif")}
                  className="img-fluid"
                  alt="pic"

                />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 my-5  ">
                <h2>Campaigns</h2>
                <p>
                  We design strategic and engaging campaigns that raise
                  awareness, incite action and amplify your message. Delivered
                  with big, bold visuals across both digital and physical
                  mediums.
                </p>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}
