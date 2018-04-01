import React from 'react';
import marked from 'marked';
import highlight from 'highlightjs';

import '../../../node_modules/highlightjs/styles/solarized-dark.css';

import './Preview.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
})

const Preview = (props) => (
  <div className="preview" dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
);

export default Preview;
