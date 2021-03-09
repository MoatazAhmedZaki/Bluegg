import React, { Component } from "react";
import "../pages/blogCss.css";
import { Link } from "react-router-dom";

import dataa from "../../database/datafinal.json";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { datatoShow: dataa };
  }
  DropValue = (e) => {
    const val = e.target.value;

    const dataHolder = [];
    val === "All"
      ? this.setState({ datatoShow: dataa })
      : dataa.map((item, i) =>
          val === item.category
            ? dataHolder.push(item) && this.setState({ datatoShow: dataHolder })
            : null
        );
    console.log(dataHolder);
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="blog-page pt-5">
        <h1 className="px-3">Behind the scenes</h1>
        <p className="px-3 pb-5 mb-5 ">
          Our thoughts, ideas and ramblings about design, web development and
          studio life.
        </p>
        <p>Filter :</p>
        <select className="select" onChange={this.DropValue}>
          <option value="All">All</option>

          <option value="Insights">Insights</option>
          <option value="Ramblings">Ramblings</option>
          <option value="Web dev">Web dev</option>

          <option value="Design">Design</option>
        </select>

        <div className="row">
          {this.state.datatoShow.map((item, i) => (
            <div className="col-lg-4 col-md-12  col-sm-12 hena my-3">
              <div className="work">
                <Link to="/">
                  <img src={item.imgs} className="img-fluid" alt="pic" />
                </Link>
              </div>
              <p>
                <strong>{item.category} </strong>
                <Link to="/">{item.description}</Link>
              </p>
            </div>
          ))}

          {}
        </div>
      </div>
    );
  }
}
