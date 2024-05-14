import React, { useState } from 'react'

export default function Box(props) {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {props.renderValue(value)}
      {props.renderConcatenation(value)}
    </div>
  )
}
