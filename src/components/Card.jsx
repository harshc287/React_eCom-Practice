import React from 'react'
import { useNavigate } from 'react-router-dom'

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

        <button
          className="btn btn-primary mt-auto"
          onClick={() => navigate(`/product/${prod.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default Card
