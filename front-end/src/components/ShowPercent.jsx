import React from 'react'

function ShowPercent({ answer }) {
  return (
    <div className="percent">
      <div className="percentName">
        <spam>
          {`Quantidade ${answer.name}`}
        </spam>
        <section className="value">
          <spam>
            {answer.value}
          </spam>
        </section>
      </div>
      <div className="percentName">
        <spam>
          {`% ${answer.name}`}
        </spam>
        <section className="value">
          <spam>
            {`${answer.percent}%`}
          </spam>
        </section>
      </div>
    </div>
  );
}

export default ShowPercent;