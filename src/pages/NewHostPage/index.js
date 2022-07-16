import React from 'react'
import { Link } from 'react-router-dom'

function NewHostPage({ user_id }) {
  return (
    <div>
      <p>{user_id}</p>
      <Link to='/createAddress' >

        <button>Tạo địa điểm </button>
      </Link>
    </div>
  )
}

export default NewHostPage