import React from 'react';
import marked from 'marked';
import highlight from 'highlightjs';


marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
});

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 'preview'
    };
  }

  optionsHandler = (event) => {
    this.setState({render: event.target.value});
  }

  render() {
    let preview = null;
    let content = marked(this.props.text);
    if (this.state.render === 'html') {
      preview = <div className="preview code">{content}</div>
    } else if (this.state.render === 'preview') {
      preview = <div className="preview" dangerouslySetInnerHTML={{__html: content}}></div>;
    }
    return (
      <div className="preview-container">
        <header>
          <select onChange={this.optionsHandler}>
            <option value="preview">Preview</option>
            <option value="html">HTML</option>
          </select>
        </header>
        {preview}
      </div>
    );
  }
}

export default Preview;
