import React, { useContext, useEffect, useRef, useState } from 'react'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../..'
import Button from '../UI/Button/Button'
import './Chat.scss'

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const f: any = null
  const ref = useRef(f)
  const [ user ] = useAuthState(auth)
  const [ value, setValue ] = useState('')
  const [ messages ] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
  useEffect(() => {
    scrollFix()
  }, [messages])
  
  const onTextareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const enterPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") onSendMessage()
  }

  const scrollFix = () => {
    const elem = document.querySelector('.chat-column__message-block')
    if (elem) {
      elem.scrollTop = elem.scrollHeight
    }
  }

  const onSendMessage = async() => {
    if (value.length >= 1) {
      firestore.collection('messages').add({
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
  
      setValue('')
      ref.current.focus()
    }
  }

  return(
    <div className="Chat">
      <div className="Chat__chat-column">
        <div className="chat-column__message-block">
        { messages?.map(message => {
          if (message.uid === user?.uid) return (
            <div key={message.createdAt} className="message reverse">
            <span>{message.text}</span>
            <img src={message.photoURL} alt={message.displayName}/>
          </div>
          )
          return (
            <div key={message.createdAt} className="message">
              <img src={message.photoURL} alt={message.displayName}/>
              <span>{message.text}</span>
          </div>
          )
        })}
        </div>
        <div className="chat-column__input-block">
          <textarea ref={ref} onKeyDown={enterPressHandler} onChange={onTextareaChangeHandler} value={value} className="input-block__textarea" />
          <Button onClick={onSendMessage} size="large" text=">" />
        </div>
      </div>
    </div>
  )
}

export default Chat
