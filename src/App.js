import './App.css';
import Header from './Componentes/Header';
import FormAddMoney from './Componentes/FormAddMoney';
import { useState } from 'react';
import MainControl from './Componentes/MainControl';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid
                    ? <MainControl count={count} />
                    : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />

  return (
    <div className="App">
      {count}
      <Header />
      { component }
    </div>
  );
}

export default App;
