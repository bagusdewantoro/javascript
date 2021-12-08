import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';


const Chat = () => {
  let params = useParams();
  useEffect(() => {
    console.log(params);
  })
  return (
    <h1>Chat</h1>
  );
}

export default Chat;
