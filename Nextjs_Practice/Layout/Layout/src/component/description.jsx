import React from 'react'

const Description = ({description}) => {
    console.log(description)
  return (
    <div>
      <p> {description.detail_description} </p>
    </div>
  )
}

export default Description
