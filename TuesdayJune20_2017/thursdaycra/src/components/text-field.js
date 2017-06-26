import React from 'react'

const TextField = props => {
  return (
    <div>
      <label className="Blue">
        {props.label}
      </label>
      <input
        className="bc-black20 border width-100p display-block"
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
      <h6>
        ({props.description})
      </h6>
    </div>
  )
}

export default TextField

/*      value={props.value}
      onChange={event => props.OnChange(event.target.value)}
    */
