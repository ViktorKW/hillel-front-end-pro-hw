import React, { Component } from "react";
import Slider from "react-slick";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <img src="https://media.istockphoto.com/photos/shot-of-a-young-woman-using-a-laptop-and-having-coffee-while-working-picture-id1353356088?s=612x612"></img>
          <img src="https://media.istockphoto.com/photos/digital-shield-3d-rendering-stock-photo-picture-id1397398956?s=612x612"></img>
          <img src="https://media.istockphoto.com/photos/server-configuration-command-lines-on-a-monitor-picture-id619051530?s=612x612"></img>
        </Slider>
      </div>
    );
  }
}
