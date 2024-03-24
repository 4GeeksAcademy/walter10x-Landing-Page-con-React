import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-light border p-3" style={{ width: "83%", margin: "10px auto" }}>
            <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call To Action!</a>
        </div>
    );
};

export default Jumbotron;
