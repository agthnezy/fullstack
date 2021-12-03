import React from 'react'

const Filter = ({ filterContacts }) => {
    return (
      <div>
        filter shown with <input onChange={filterContacts} />
      </div>
    )
  }
  
  export default Filter