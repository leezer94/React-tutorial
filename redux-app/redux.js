function reducer(state, action) {
  console.log(state, action);
  if (state === undefined) {
    return { color: 'yellow' };
  }
  let newState;
  if (action.type === 'CHANGE_COLOR') {
    // State 을 직접적으로 바꾸는 것 보다 복제된 값을 주입 시키는 것이 좋다.

    newState = Object.assign({}, state, { color: 'red' });
  }
  return newState;
}

const store = Redux.createStore(reducer);

const state = store.getState();

function red() {
  document.querySelector('#red').innerHTML = `
  <div class='container' id="component_red" style="background-color:${state.color}">
    <h1>Red</h1>
    <input type="button" value="fire" onClick="
    store.dispatch({type:'CHANGE_COLOR', color:'red'})
    ">
  </div>
  `;
}

store.subscribe(red);

red();
