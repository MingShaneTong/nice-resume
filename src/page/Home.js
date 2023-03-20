import React, { Component } from "react";
import $ from "jquery";
import Header from "../Components/Home/Header";
import Footer from "../Components/layout/Footer";
import About from "../Components/Home/About";
import CV from "../Components/Home/CV";
import Contact from "../Components/shared/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getWebsiteData() {
    $.ajax({
      url: "./websiteData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getWebsiteData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <CV data={this.state.data.cv} />
        <Contact data={this.state.data.main} />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
