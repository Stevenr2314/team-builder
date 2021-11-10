import logo from './logo.svg';
import React, { useState } from 'react';
import Form from './Form/Form';
import './App.css';

function App() {

  const [teamList, setTeamList] = useState('');

  return (
    <div className="App">
      <Form teamList={teamList} setTeamList={setTeamList}></Form>
      <div>
        <p>{teamList}</p>
      </div>
    </div>
  );
}

export default App;
