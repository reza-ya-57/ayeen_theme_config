import React , {useState} from 'react'
import {useSelector} from "react-redux"

function DropDown() {
    const [value, setValue] = useState('fruit');
    const counter = useSelector((state) => state.questions.index)
    const data = useSelector((state) => state.questions.datas)

    const options = data[counter].options
    console.log(counter)
    console.log(options)
 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div>

       <select value={value} onChange={handleChange}>
            {options.map((item) => {
                return (<option>{item}</option>)
            })}
       </select>

   </div>

 );
}

export default DropDown