import React from 'react';

export default function Homepage() {
  const bodyStyle = {
    backgroundColor: 'mediumpurple'
  }
  const wText = {
    color: 'antiquewhite'
  }

  return (
    <div style={bodyStyle}>
      <h1 style={wText}>Dylan Mcgrann</h1>
      <div>
        <h3 style={wText}>projects</h3>
        <h3 style={wText}>languages</h3>
        <h3 style={wText}>frameworks</h3>
      </div>
    </div>
  )
}