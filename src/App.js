import * as React from 'react';
import './style.css';
import Data from './db.json'
import { useState } from "react";

export default function App() {
  //useState Hooks
  const [search, setSearch] = useState('');

  //value 값의 변화를 알기 위한 
  const handleSubmit = (e) =>{
    setSearch(e.target.value)
  }

  return(
    <div>
    <input className="search" placeholder="search"/>
    </div>
  )
}
