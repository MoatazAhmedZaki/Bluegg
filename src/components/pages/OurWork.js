import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../pages/ourCss.css";
export default class OurWork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="our-work-page pt-5">
        <h1 className="px-3">
          What makes
          <br />
          us tick.
        </h1>
        <p className="px-3 pb-5 mb-5 ">
          Challenging. Bold. Big thinking. Fast moving. Grown up. Juvenile. This
          is us.
        </p>

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
          </div>
        </div>

        <div className="our-work-section">
          <div className="mazuma ">
            <img
              src={require("../../images/digital.png")}
              className=" img-fluid"
              alt="pic"

            />
          </div>

          <p>
            <strong>Web Design </strong>
            <Link to="/">
              A bold new website with character for Digital Profile
            </Link>
          </p>
        </div>

        <div className="random-work-section py-5 my-5">
          <div className="row  ">
            <div className="col-lg-7  col-md-12 col-sm-12 hena my-3 ">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/Llanech.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Web Design </strong>
                <Link to="/">
                  How we created a new brand experience and website for Llanerch
                </Link>
              </p>
            </div>

            <div className="col-lg-5 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/Yolk.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">
                  A bold new brand for a company reshaping recruitment
                </Link>
              </p>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-5  col-md-12 col-sm-12 hena my-3 ">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/carercake.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">
                  Giving the power back to this confidence provider
                </Link>
              </p>
            </div>

            <div className="col-lg-7 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/vision.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Campaigns </strong>
                <Link to="/">
                  A sport campaign to inspire the nation for Sport Wales
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/b.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">How we brought clothing brand Harry Bear to life</Link>
              </p>
            </div>

            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/fly.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">Getting this service business ready to fly</Link>
              </p>
            </div>
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/afr.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Campaigns </strong>
                <Link to="/">
                  A digital campaign about Automated Facial Recognition for
                  South Wales Police
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/cover-2.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">Property maintenance branding, managed</Link>
              </p>
            </div>

            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/sisonai.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong> <Link to="/">Branding a legend </Link>
              </p>
            </div>
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/ukls.png")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Web Design </strong>
                <Link to="/">Shaping a bold new brand and website </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/candleston (1).jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">
                  Shining light on this naming and brand design for Candleston
                </Link>
              </p>
            </div>

            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/candleston (2).jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Web Design </strong>
                <Link to="/">A connected website for a high tech VC firm </Link>
              </p>
            </div>
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/candleston (3).jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">Quantum's leap to a fresh new look </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/3chillies-thumbnail.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">A modern take on a care home brand for Whitgift</Link>
              </p>
            </div>

            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img
                    src={require("../../images/whitgift-care-thumb.jpg")}
                    className="img-fluid"
                    alt="pic"

                  />
                </Link>
              </div>
              <p>
                <strong>Branding </strong>
                <Link to="/">Hot new brand & style guide for 3Chillies</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
