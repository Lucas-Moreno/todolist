import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

state = {
  apiResponse:[]
}

componentDidMount = () => {
  axios.get('https://test.wertkt.com/api/biz/')
  .then(response => {
    this.setState( { apiResponse: response.data } )
  })
  .catch(error => {
    console.log(error);
  });
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO-List</h1>
        {
          this.state.apiResponse.map(apiResponse =>(
            <div key={apiResponse.id}>
                <input type="checkbox" id="todo" name="todo" />
                <label for="todo">{apiResponse.name}</label>
            </div>
          ))
        }
        
      </header>
    </div>
  );
}
}

export default App;
