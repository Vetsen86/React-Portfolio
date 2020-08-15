import React from "react";

const Portfolio = () => {
    return (
        <div className="container portfolio">
            <h1>My Portfolio</h1>
            <div className="row">
                <div className="col-4">
                    <img className="portfolio-image" src="./news-scraper.png" />
                    <h3 className="text-center">News Scraper</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://news-scraper-erikb.herokuapp.com/">Deployed Version</a>
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/News-Scraper">Github Repository</a>
                    </div>
                </div>
                <div className="col-4">
                    <img className="portfolio-image" src="./price-tracker.png" />
                    <h3 className="text-center">Project 2: Video Game Price Tracker</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://video-game-price-tracker.herokuapp.com/">Deployed Version</a>
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/project-2">Github Repository</a>
                    </div>
                </div>
                <div className="col-4">
                    <img className="portfolio-image" src="./news-scraper.png" />
                    <h3 className="text-center">Bamazon</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/bamazon">Github Repository</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <img className="portfolio-image" src="./news-scraper.png" />
                    <h3 className="text-center">News Scraper</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://news-scraper-erikb.herokuapp.com/">Deployed Version</a>
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/News-Scraper">Github Repository</a>
                    </div>
                </div>
                <div className="col-4">
                    <img className="portfolio-image" src="./news-scraper.png" />
                    <h3 className="text-center">News Scraper</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://news-scraper-erikb.herokuapp.com/">Deployed Version</a>
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/News-Scraper">Github Repository</a>
                    </div>
                </div>
                <div className="col-4">
                    <img className="portfolio-image" src="./news-scraper.png" />
                    <h3 className="text-center">News Scraper</h3>
                    <div className="button-container">
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://news-scraper-erikb.herokuapp.com/">Deployed Version</a>
                        <a className="btn btn-primary portfolio-button" target="_blank" href="https://github.com/Vetsen86/News-Scraper">Github Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;