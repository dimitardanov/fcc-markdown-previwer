import React from 'react';


const Editor = (props) => {
  return (
    <div className="editor-container">
      <h1>[M&darr;]</h1>
      <textarea
        className="editor"
        onChange={props.onChange}
        value={props.text}
      placeholder="Your Markdown Here..."></textarea>
    </div>
  );
}

export default Editor;
