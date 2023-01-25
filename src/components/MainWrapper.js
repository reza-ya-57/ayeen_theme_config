import React from 'react'
import { useDispatch } from 'react-redux'
import { nextButton } from "../store/store"

function MainWrapper(props) {
    const dispatch = useDispatch()

    const nextBtnHandler = () => {
        dispatch(nextButton())
    }

  return (
    <div>
        {props.children}
        <button onClick={nextBtnHandler} disabled={true}>Next</button>
    </div>
  )
}

export default MainWrapper