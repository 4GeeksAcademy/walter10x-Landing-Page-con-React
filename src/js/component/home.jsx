import React from "react";
import Jumbotron from "/workspaces/walter10x-Landing-Page-con-React/src/js/component/jumbotron.jsx";
import Navbar from "/workspaces/walter10x-Landing-Page-con-React/src/js/component/navbar.jsx";
import Card from "/workspaces/walter10x-Landing-Page-con-React/src/js/component/card.jsx";
import Footer from "/workspaces/walter10x-Landing-Page-con-React/src/js/component/footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
        </div>
			<Footer />
		</>
	);
};

export default Home;
