import React from "react";

import "./App.css";



class App extends React.Component {
  render() {
    const onChangeListener (event) {
      if (event.target.value.includes("cebolla")) {
        alert('¡Te he dicho que no digas "cebolla"!');
      }
    };
    return (
      <div className="App">
        <textarea
          onChange={this.onChangeListener}
          name="textarea"
          rows="10"
          cols="50"
        >
          No escribas c e b o l l a
        </textarea>
      </div>
    );
  }
}

export default App;
