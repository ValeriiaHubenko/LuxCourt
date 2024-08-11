import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, title, imgSrc, text, details }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleViewMore = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  const isExpanded = expandedCardId === id;

  return (
    <div className={`card glass-effect shadow-sm py-lg-3 py-sm-2 mb-sm-2  ${isExpanded ? 'expanded-card' : ''}`}>
      <h2 className="fw-bold text-center text-dark pt-3 pb-2 fs-sm-4 fs-lg-2">{title}</h2>
      <img src={imgSrc} className="img-thumbnail card-img-top border-none" alt={title} width="100%" height="225" />
      <div className="card-body">
        <p className="card-text text-dark text-lg-start text-md-center text-sm-center mt-sm-2">{text}</p>
        {isExpanded && (
          <div id={id} className="card-details text-left mt-3">
            <p><strong>Price:</strong> {details.price}</p>
            <p><strong>Age Group:</strong> {details.ageGroup}</p>
            <p><strong>Trainer:</strong> {details.trainer}</p>
            <p><strong>Description:</strong> {details.description}</p>
          </div>
        )}
        <div className="d-flex justify-content-lg-between align-items-lg-start flex-sm-column justify-content-sm-center align-items-sm-center ">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-success fw-bold px-lg-5 py-lg-2 px-sm-5 py-sm-2"
              onClick={() => handleViewMore(id)}
            >
              {isExpanded ? 'View less' : 'View more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  details: PropTypes.shape({
    price: PropTypes.string.isRequired,
    ageGroup: PropTypes.string.isRequired,
    trainer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;