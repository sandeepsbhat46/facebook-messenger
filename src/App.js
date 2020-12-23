import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import { Button, FormControl,Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput]=useState('');
  const [messages, setMessages]=useState([])
  const [username, setUsername]=useState('')

  //console.log(input)
  //console.log(messages)
//useState= is a variable
//useEffect= run code on condition

useEffect(()=>{
   //run once when app componenet is loaded
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(sanpshot => {
    setMessages(sanpshot.docs.map(doc=>({id:doc.id, message: doc.data()})/*usename:'abc',text:'hi'*/))
  })
}, [])

useEffect(() => {
  //run code here... and after , condition
  //if its blank inside [] then, code run only once when component loaded
  //if we have variable like input [input], its run every time input change
  setUsername(prompt('please enter username'))
},
  [])//condition 

  const sendMessage=(event)=>{
    event.preventDefault(); //it will prevent auto refresh when clicking submit button

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setMessages([...messages,{username:username, text:input}]);//It will add the input to the array
    setInput('');
  }

  return (
    <div className="App">
    <img src="data:image/jpeg;base64,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"
    width="50px"
    height="50px"/>
     <h1>Facebook Messenger App</h1>
     <p>Sandeep S Bhat</p>
     <h2>welocome {username}</h2>
     <form className="app-form">
        <FormControl className="app-formcontrol">
        <Input className="app-input" placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className="app-icon"
        disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}
        >
        <SendIcon />
        </IconButton>
       
        </FormControl>
     </form>
     <FlipMove>
        {
          messages.map(({id, message})=>(
          <Message key={id} username={username} message={message} />  
          ))
          }
      </FlipMove>
      </div>
  
  );
}

export default App;
