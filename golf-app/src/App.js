import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './Firebase';

function App() {
  const [message, setMessage] = useState({
    text: '',
    id: ''
  });
  const addMessage = (e) => {
    e.preventDefault();
    fire.database().ref('message').push(inputEl.value);
    inputEl.value = '';
  }

  useEffect(() =>{
    let messageRef = fire.database().ref('message').orderBykey().limitToLast(100);
    messageRef.on('child_added', snapshot => {
      let memo = { text: snapshot.val(), id: snapshot.key };
      setMessage([...message, memo]);
    });
  }, []);
  return (
    <form onSubmit={addMessage}>
      <input type="text" ref={el => inputEL = el} />
      <input type="submit" value="등록" />
      <ul>
        {
          message.map(memo => <li key={memo.id}>{memo.text}</li>)
        }
      </ul>
    </form>
  );
}

export default App;
