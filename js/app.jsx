import React from 'react';
import ReactDOM from 'react-dom';






class App extends React.Component {
  render () {
    return (
      <p>assfsaf</p>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
