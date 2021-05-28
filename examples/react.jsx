import React, { useState, useEffect } from "react"
import { string } from "prop-types"

const Example = ({ title }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <h1>{title}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

Example.propTypes = {
  title: string,
}

export default Example
