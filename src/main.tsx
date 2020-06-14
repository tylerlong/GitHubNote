import React from 'react';
import { SubxObj } from 'subx/build/types';
import { Component } from 'react-subx';

export interface Props { store: SubxObj; }

class App extends Component<Props> {
  render() {
    const store = this.props.store;
    return <>
      <h1>{store.hello}</h1>
      <button onClick={e => store.hello = 'clicked'}>click me</button>
    </>;
  }
}

export default App;
