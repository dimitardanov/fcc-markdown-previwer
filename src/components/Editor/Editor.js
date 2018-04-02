import React from 'react';

// import './Editor.css';

const Editor = (props) => {
  return (
    <div className="editor-container">
      <h1>[M&darr;]</h1>
      <textarea
        onChange={props.onChange}
        value={props.text}
      placeholder="Your Markdown Here..."></textarea>
    </div>
  );
}

export default Editor;
