import React, { Component } from "react";
import "../pages/ContactCss.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
export default class ContactUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="contact-page pt-5 ">
        <h1 className="px-4 pt-5 ">Let’s get to work.</h1>
        <div className="col-sm-6 my-5">
         
          <p>
            Everything starts with a conversation. Let’s start ours. Send us a
            message, <Link to="">drop us an email</Link> or call us on 029 2049
            3819
          </p>
        </div>
        <div className="col-lg-10">
          <Form className="contact-form">
            <div className="row">
              <div className="col-lg-6 my-2">
                <Form.Group controlId="UserName">
                  <Form.Label>Your Name </Form.Label>
                  <Form.Control type="text" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </div>
              <div className="col-lg-6  my-2">
                <Form.Group controlId="Usercompany">
                  <Form.Label>Your Company</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="col-lg-6  my-2">
                <Form.Group controlId="UserEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="col-lg-6  my-2">
                <Form.Group controlId="UserTelephone">
                  <Form.Label>Your Telephone</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-sm-12 ">
                <h3>What's the project?</h3>
                <p>Please select at least one</p>
              </div>
              <Form.Group controlId="Branding" className="mx-2">
                <Form.Check type="checkbox" label="Branding" />
              </Form.Group>
              <Form.Group controlId="WebDesign" className="mx-2">
                <Form.Check type="checkbox" label="Web Design" />
              </Form.Group>
              <Form.Group controlId="Campaign" className="mx-2">
                <Form.Check type="checkbox" label="Campaign" />
              </Form.Group>
              <Form.Group controlId="SomethingElse" className="mx-2">
                <Form.Check type="checkbox" label="Something Else" />
              </Form.Group>
            </div>

            <div className="row ">
              <div className="col-sm-12 ">
               
                <h3>Give us some details about the project</h3>
                <p>
                  Useful things to tell us are what you’re aiming to acheive,
                  what you have now, and your approximate budget and timescales
                  for the project.
                </p>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    size="lg"
                    as="textarea"
                    rows="10"
                    placeholder="Please enter your massage... "
                  />
                </Form.Group>{" "}
              </div>
            </div>

            <Button className="formbtn my-5" type="submit">
              Send your massage
            </Button>
          </Form>
        </div>
        <div className="Jump-aboard">
          {/* <div className="row"> */}
          {/* <div className=" col-sm-12 " > */}
          <h2 className="py-5 px-4">Jump aboard</h2>
          {/* </div> */}
          {/* <div className=" col-sm-6 float-right" > */}
          <p className="px-4 py-5">
            We don’t hire often, but when we do we only take on the best in the
            business. If that’s you and you want to talk to us about jobs,
            placements or internships drop an email to{" "}
            <Link>work@bluegg.co.uk</Link>
          </p>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}
