import React, { Component } from 'react';

import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';

import sampleText from './sampleText';

let text = (process.env.NODE_ENV === 'development') ? sampleText : '';

class App extends Component {
  state = {
    text: text
  }

  textChangeHandler = (event) => {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <Editor onChange={this.textChangeHandler} text={this.state.text} />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default App;
