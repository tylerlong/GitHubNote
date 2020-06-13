import react from 'react';
import { ProxyObj } from 'subx/build/types';

export interface Props { store: ProxyObj; }

class App extends react.Component<Props> {
  render() {
    const store = this.props.store;
    return store.hello;
  }
}

export default App;
