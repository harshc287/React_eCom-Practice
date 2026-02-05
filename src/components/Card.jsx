import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({prod}) => {
    const navigate = useNavigate()

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={prod.thumbnail}
        className="card-img-top"
        alt={prod.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{prod.title}</h5>

        <p className="card-text text-muted">
          ₹ {prod.price}
        </p>

        <Link
          to={`/${prod.id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default Card
