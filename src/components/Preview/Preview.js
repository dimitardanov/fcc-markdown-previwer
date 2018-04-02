import React from 'react';
import marked from 'marked';
import highlight from 'highlightjs';


marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
})

const Preview = (props) => {
  return (
    <div className="preview-container">
      <h1>Preview</h1>
      <div className="preview" dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
    </div>
  );
};

export default Preview;
