import React from 'react'

const StatusBar = ({stat, type}) => {
  return (
    <div>
      <span className="modal-stats-bar">
        <div className={`${type}-pokemon`.replace(/,/g, '-')} style={{width: `${stat}%`}}>{stat}</div>
        <div className="modal-stats-back"/>
      </span>
    </div>
  )
}

export default StatusBar
