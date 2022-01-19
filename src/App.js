import React from 'react';
import Form from './components/Form';
import Lists from './components/Lists';
import './App.css';

const App = () => (
    <main className="app">
      <h1 className="app__h1">ToDos</h1>
      <Form />
      <section className="app__lists">
        <Lists />
      </section>
    </main>
);

export default App;
