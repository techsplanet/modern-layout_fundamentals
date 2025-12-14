import React from 'react'

const BasicGrid = () => {
  return (
    <section>
        <h1>Implemented Basic Grid</h1>
        <div className='show-container' id='parent'>
      <div className="item-2">
        <h1>footer</h1>
      </div>
      <div className="item-3">
        <h1>header</h1>
      </div>
      <div className="item-4">
        <h1>sidebar</h1>
      </div>
      <div className="item-1">
        <h1>main</h1>
      </div>
    </div>

    </section>
  )
}

export default BasicGrid