import React from 'react';

import './Editor.css';

const Editor = (props) => {
  return (
    <textarea
      onChange={props.onChange}
      value={props.text}
      placeholder="Your Markdown Here..."></textarea>
  );
}

export default Editor;
