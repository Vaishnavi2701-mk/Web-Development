import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
              newsUrl="TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}
