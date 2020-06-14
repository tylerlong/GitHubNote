import SubX from 'subx';

const store = SubX.create({
  ready: false,
  hello: 'world',
  async init() {
    console.log('init');
  },
});

export default store;
