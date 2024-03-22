import React from "react";

const Card = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-2">
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 1</h5>
                            <p className="card-text">This is a description for card 1.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 2</h5>
                            <p className="card-text">This is a description for card 2.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 3</h5>
                            <p className="card-text">This is a description for card 3.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card Title 4</h5>
                            <p className="card-text">This is a description for card 4.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
