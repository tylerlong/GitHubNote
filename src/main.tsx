import React from 'react';
import {SubxObj} from 'subx/build/types';
import {Component} from 'react-subx';
import {Spin} from 'antd';

export interface Props {
  store: SubxObj;
}

class App extends Component<Props> {
  render() {
    const store = this.props.store;
    return store.ready ? 'hello' : <Spin size="large" />;
  }
}

export default App;
