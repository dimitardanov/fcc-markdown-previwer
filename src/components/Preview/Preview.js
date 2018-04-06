import React from 'react';
import marked from 'marked';
import highlight from 'highlightjs';



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
    let content = '';
    let classes = ['preview'];
    if (this.state.render === 'html') {
      classes.push('code');
      marked.setOptions({
        renderer: new marked.Renderer(),
        xhtml: true
      });
      content = marked(this.props.text);
      content = highlight.highlightAuto(content).value;
    } else if (this.state.render === 'preview') {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
          return highlight.highlightAuto(code).value;
        }
      });
      content = marked(this.props.text);
    }
    return (
      <div className="preview-container">
        <header>
          <select onChange={this.optionsHandler}>
            <option value="preview">Preview</option>
            <option value="html">HTML</option>
          </select>
        </header>
        <div className={classes.join(' ')} dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }
}

export default Preview;
