import React from 'react'

const TextArea = props => {
  return (
    <div className="measure">
      <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
        {props.label}
      </label>
      <textarea
        className="input-reset display-block width-100p border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
      <small className="f6 black60 display-block marginbottom-xxsmall">
        ({props.description})
      </small>
    </div>
  )
}

export default TextArea
