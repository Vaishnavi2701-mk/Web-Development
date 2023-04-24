import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";

// export default class News extends Component {
//   constructor() {
//     super();
//     console.log("Hello I am a constructor!");
//     this.state = {
//       data: null,
//       loading: false,
//       page: 1,
//     };
//   }

//   async componentDidMount() {
//     let url =
//       "https://newsapi.org/v2/top-headlines?country=in&apiKey=39d9f8338db24e769f33a41a7c849434&page=1&pageSize=10";
//     fetch(url).then((res) => {
//       res.json().then((result) => {
//         console.log(result.articles);
//         this.setState({
//           data: result.articles,
//           totalResults: result.totalResults,
//         });
//       });
//     });
//   }

//   handlePrevClick = () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=39d9f8338db24e769f33a41a7c849434&page=${
//       this.state.page - 1
//     }$pageSize=20`;
//     fetch(url).then((res) => {
//       res.json().then((result) => {
//         console.log(result.articles);
//         this.setState({ data: result.articles });
//       });
//     });
//     this.setState({
//       page: this.state.page - 1,
//       data: this.articles,
//     });
//   };

//   handleNextClick = () => {
//     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
//     } else {
//       let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=39d9f8338db24e769f33a41a7c849434&page=${
//         this.state.page + 1
//       }$pageSize=20`;
//       fetch(url).then((res) => {
//         res.json().then((result) => {
//           console.log(result.articles);
//           this.setState({ data: result.articles });
//         });
//       });

//       this.setState({
//         page: this.state.page + 1,
//         data: this.articles,
//       });
//     }
//   };

//   render() {
//     return (
//       <>
//         <div className="container my-3">
//           <h2>NewsMonkey Top Headlines</h2>
//           <div className="row">
//             {this.state.data
//               ? this.state.data.map((element) => (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title?.slice(0, 45)}
//                       description={element.description?.slice(0, 88)}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                     />
//                   </div>
//                 ))
//               : null}
//           </div>
//         </div>

//         <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             className="btn btn-dark"
//             disabled={this.state.page <= 1}
//             onClick={this.handlePrevClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             disabled={
//               this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
//             }
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </>
//     );
//   }
// }
