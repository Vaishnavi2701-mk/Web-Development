import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://www.aljazeera.com/wp-content/uploads/2023/04/2023-04-21T205655Z_826655361_UP1EJ4L1M6UDH_RTRMADP_3_SOCCER-ENGLAND-ARS-SOU-REPORT-1682156630.jpg?resize=1920%2C1411"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
