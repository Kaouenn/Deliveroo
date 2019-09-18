import React from "react";
import axios from "axios";
import Header from "./Header";

class App extends React.Component {
  state = {
    data: {},
    isLoading: true
  };

  // renderData = () => {
  //   if (this.state.isLoading === true) {
  //     return <p>En cours de chargement ...</p>;
  //   } else {
  //     return (
  //       <div>
  //         {/* {Object.keys(this.state.data.restaurant).map((object, i) => (
  //           <p key={i}>{object.path}</p>
  //         ))} */}
  //         hello
  //       </div>
  //     );
  //   }
  // };
  render = () => {
    return (
      <div className="App">
        <Header
          isLoading={this.state.isLoading}
          restaurant={this.state.data ? this.state.data.restaurant : null}
        />
        hello
      </div>
    );
  };

  componentDidMount = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    this.setState({
      data: response.data,
      isLoading: false
    });
  };
}

export default App;
