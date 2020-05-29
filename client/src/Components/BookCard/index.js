import React from 'react';

function BookCard(props) {
  return (
    <>
      <div className="card mb-3" key={props.id}>
        <h3 className="card-title">
          {props.title} by {props.authors}
        </h3>
        <div>{props.description}</div>
        <div>
          <div className="col-md-2">
            <img alt={props.title} className="img-fluid" src={props.image} />
          </div>
        </div>
        <br></br>
        <div>
          <a href={props.link} className="btn btn-outline-dark mr-3">
            View
          </a>

          <button
            onClick={() => this.handleBookSave(props.id)}
            className="btn btn-outline-dark mr-3"
          >
            Save
          </button>
        </div>
      </div>

      <hr></hr>
    </>
  );
}

export default BookCard;
