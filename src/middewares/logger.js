export default store => next => (action) => {
  console.log('state before:', store.getState());
  console.log('action: ', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};
