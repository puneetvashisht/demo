import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Feature",
      "Some Other Feature",
      "Yet Another Feature",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adImage = [
      "Random Image #1",
      "Random Image #2",
      "Random Image #3",
      "Random Image #4",
      "Random Image #5",
    ];

    const randomImage = adImage[Math.round( Math.random() * (adImage.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomImage}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}
