import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articals = [
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title: "Sports news live: Arteta defiant after Arsenal stumble yet again",
      description:
        "Al Jazeera’s Saturday sports blog: The latest action in football, cricket, tennis, combat sports and more.",
      url: "http://www.aljazeera.com/sports/liveblog/2023/4/22/sports-news-live-football-premier-league-cricket-tennis-boxing-mma",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/04/2023-04-21T205655Z_826655361_UP1EJ4L1M6UDH_RTRMADP_3_SOCCER-ENGLAND-ARS-SOU-REPORT-1682156630.jpg?resize=1920%2C1411",
      publishedAt: "2023-04-22T10:02:25Z",
      content:
        "Welcome to Al Jazeeras live sports news blog. Here are the major sports stories, interviews, opinions, fixtures and results on Saturday, April 22:\r\nRead more",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello I am a constructor!");
    this.state = {
      articals: this.articals,
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=39d9f8338db24e769f33a41a7c849434";
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
      });
    } catch (e) {
      console.log("something is not working");
    }
  }

  render() {
    console.log("I am a render");
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articals.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element ? element.title.slice(0, 45) : " "}
                  description={element ? element.description.slice(0, 88) : " "}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
