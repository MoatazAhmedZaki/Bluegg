import React, { Component } from "react";
import "../pages/whatCss.css";

export default class WhatWeDo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="what-page ">
        <div className="col-lg-8 col-sm-12 py-5">
          <h1>Do what you love, they say.</h1>
          <p>
            We help clients tell their story, raise awareness, engage their
            audience and make money with branding, websites and campaigns.
          </p>
        </div>

        <div className=" py-5">
          <div className="holder pt-5 ">
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

        <div className="Technologies  py-5">
          <h2 className="next-level-title my-5 pl-5 col-sm-8">
            Technologies we ❤︎
          </h2>

          <div className="holder ">
            <div className="row   my-5 px-5 keda">
              <div className="col-lg-4 pt-5 col-md-12 col-sm-12">
                
                <img
                  src={require("../../images/craft.svg")}
                  className="img-fluid"
                  alt="pic"
                />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 my-5  ">
                <p>
                  Craft CMS is our content management system of choice. It’s
                  easy to use, flexible and seriously powerful. Craft is perfect
                  for creating beautiful, effective websites of all sizes.
                </p>
              </div>
            </div>

            <div className="row   my-5 px-5 keda">
              <div className="col-lg-4 pt-5 col-md-12 col-sm-12">
                
                <img
                  src={require("../../images/craft-commerce.svg")}
                  className="img-fluid"
                  alt="pic"
                />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 my-5  ">
                <p>
                  Craft Commerce is the online store add-on for websites running
                  Craft CMS. Easy to manage, flexible and incredibly powerful,
                  Commerce is perfect for selling products online.
                </p>
              </div>
            </div>

            <div className="row   my-5 px-5 keda">
              <div className="col-lg-4 pt-5 col-md-12 col-sm-12">
                
                <img
                  src={require("../../images/digital.svg")}
                  className="img-fluid"
                  alt="pic"
                />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 my-5  ">
                <p>
                  Digital Ocean is our go-to hosting provider because it’s the
                  best in the business. We could get nerdy about it, but all
                  that really matters is that your website is super fast and
                  reliable.
                </p>
              </div>
            </div>

            <div className="row   my-5 px-5 keda">
              <div className="col-lg-4 pt-5 col-md-12 col-sm-12">
                
                <img
                  src={require("../../images/shopify.svg")}
                  className="img-fluid"
                  alt="pic"
                />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 my-5  ">
                <p>
                  We love Shopify for building online stores. It's flexible,
                  reliable and incredibly powerful. We've used it for everything
                  from single product sites to £multi-million Shopify Plus
                  stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
