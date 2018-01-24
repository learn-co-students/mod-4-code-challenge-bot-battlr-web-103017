import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input" >
      <input
        type="text"
        placeholder={"Search your bots"}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Search
