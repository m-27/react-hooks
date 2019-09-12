import * as React from 'react';
import { useSetState } from "react-use";

const Demo = () => {
  
  const [state, setState] = useSetState({});

  const handleName = () => {
    setState({ name: "mmm" });
  }; 
  const handleNum = () => {
    setState({ num: "0000123" });
  }; 

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={handleName}>Name</button>
      <button onClick={handleNum}>number</button>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Demo />
      </div>
    );
  }
}

export default App;
