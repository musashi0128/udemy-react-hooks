import React, {useState,useEffect} from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log('userEffect in invoked')
  },[])

  useEffect(() => {
    console.log('This callbacl is for name')
  },[name])

  const reset = () => {
    setState(props)
  }

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={(reset)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: 'サンプル', price: 1000
}

export default App;
