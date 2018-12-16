import React, { Component } from 'react';
import './App.css';
import AppForm from '../components/form';
import Layout from '../components/layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  renderList() {
    return this.state.elements.map(((element, index) => (
      <div key={index} className="ListElement">
        <span role="img" aria-label="party">🎉</span> {element}
      </div>
    )))
  }

  onSubmit(value) {
    this.setState({elements: [...this.state.elements, value]})
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <header className="App-header">
            <div>
              <AppForm onSubmit={this.onSubmit}/>
              {this.renderList()}
            </div>
          </header>
        </Layout>
      </div>
    );
  }
}

export default App;
