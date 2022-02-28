import './App.css';
import { CONSTANT, Page } from '@mycompany/client-lib';

function App() {
  return (
    <div className="App">
      <p>{CONSTANT.PI}</p>
      <Page />
    </div>
  );
}

export default App;
