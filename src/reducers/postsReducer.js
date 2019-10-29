export default (state, action) => {
  // bad!
  state[0] = 'Sam';
  state.pop();
  state.push();

  // bad!
  state.name = 'Same';
  state.age = 30;
};
