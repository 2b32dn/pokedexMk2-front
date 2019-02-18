import React from 'react'

const Image = ({img, name , type}) => {
  return (
    <div>
      <img alt={name} src={img} className="modal-img" />
    </div>
  )
}

export default Image
