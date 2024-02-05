import './App.css';
import Header from './Componentes/Header';
import FormAddMoney from './Componentes/FormAddMoney';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <Header />
      <FormAddMoney setCount={setCount} />
    </div>
  );
}

export default App;
