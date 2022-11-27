import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


function ListiFy() {
  // Variable for state of route from navigate in loginPage
  
  const { state } = useLocation();

  return (
    <div>
      <p>Hello, {state.name}. You have Successfully logged in with { state.email }</p>
    </div>
  )
}

export default ListiFy
