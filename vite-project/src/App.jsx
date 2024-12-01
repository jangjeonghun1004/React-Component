import './App.css';
import {add, subtract} from './utils.jsx';
import { FunctionComponent, ArrowFunctionExpresstion, ClassComponent } from './components.jsx';

function App() {
  return (
    <>
      <p>add = {add(10,10)}</p>
      <p>subtract = {subtract(20,10)}</p>

      <FunctionComponent />
      <ArrowFunctionExpresstion />
      <ClassComponent />
    </>
  )
}

export default App
