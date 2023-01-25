import React from 'react'
import { useSelector } from 'react-redux'

function Caption() {
    const counter = useSelector((state) => state.questions.index)
    const data = useSelector((state) => state.questions.datas)
    const caption = data[counter].caption
  return (
    <div>{caption}</div>
  )
}

export default Caption