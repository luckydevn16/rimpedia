import React from 'react'

function InputGroup({total, name, setID}) {
  return (
    <div className="input-group mb-3">
        <select onChange={(e) => setID(e.target.value)} id={name} className="form-select" defaultValue="1">
            {[...Array(total).keys()].map((item) => {
                return (
                    <option key={item + 1} value={item + 1}>
                        {name} {item + 1}
                    </option>
                )
            })}
        </select>
    </div>
  )
}

export default InputGroup;