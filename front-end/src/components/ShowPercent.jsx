import React from 'react'

function ShowPercent({ answer }) {
  return (
    <div>
      <div>
        {`Quantidade ${answer.name}: ${answer.value}`}
      </div>
      <div>
        {`% ${answer.name}: ${answer.percent}%`}
      </div>
    </div>
  )
}

export default ShowPercent