import React from "react";

const Card = () => {
    return (
        <div className="col mb-3 col-md-12">
            <div className="card">
                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">This is a description for the card.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
