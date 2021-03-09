import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className="footer mb-5 py-5 px-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h5> Got a project you’d like to talk about?</h5>
            <p>
              
              <strong>
                
                Call us on <Link to="/">029 2049 3819 </Link>
              </strong>
            </p>
            <p>
              <strong>
                
                Or fill in our <Link to="/">Project Form </Link>
              </strong>
            </p>
            <p>
              <strong> Where the magic happens… </strong>
              <br />
              Portland House, 113–116 Bute Street, Cardiff, CF10 5EQ
            </p>
          </div>

          <div className="col-md-6 col-sm-12 text-right footer-icons">
            <Link>
              <i class="fab fa-2x fa-twitter  px-2"></i>
            </Link>
            <Link>
              <i class="fab fa-2x fa-instagram px-2"></i>
            </Link>
            <Link>
              <i class="fab  fa-2x fa-linkedin px-2"></i>
            </Link>
            <Link>
              
              <i class="fab  fa-2x fa-github px-2"></i>
            </Link>
          </div>
        </div>
        <p className="legal">
          © 2019 Bluegg
          <Link exact to="LegalStuff" >
            Legal Stuff
          </Link>
        </p>
      </div>
    );
  }
}
