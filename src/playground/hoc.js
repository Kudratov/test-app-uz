import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info: {props.info}</p>
    </div>
);

ReactDOM.render(<Info info='These are the details'/>, document.getElementById('app'));