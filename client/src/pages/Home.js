import React from "react";

const Home = () => {
    return (
        <div className="container about">
            <h1>About Me</h1>
            <div className="row">
                <div className="col-4">
                    <img id="me" src="./me.jpg" />
                </div>
                <div className="col-8">
                    <p>Hi, my name is Jon Erik Beckstrand, though I go by my middle name, Erik. I'm 32 years old, although I know that I look about 20, at the most. I was born in Salt Lake City, and have been here my whole life. My dream, however, is to move somewhere else in the country to start, and then possibly move out of the country. At the very least I'd like to travel to as many countries as I possibly can.</p>


                    <p>My interests and hobbies are all pretty nerdy. I guess you could say I'm a stereotypical nerd. Video games are by far my favorite, and I spend most of my free time and extra cash on them. I also love movies, especially Quentin Tarantino. I'm a big animal lover and I really wish I had the extra cash for a pet, but they're so darn expensive! I looooooooove food, especially anything Asian.</p>


                    <p>As far as coding goes, I'm not afraid to admit that I'm a beginner. I had some self-taught experience prior to entering the bootcamp, but nothing to write home about. I am finding that little bit of knowledge to be invaluable, however. It would certainly be much harder to keep up without it. I'm hoping to secure a job as a web developer once I graduate, mostly because I enjoy coding but also because it pays quite well!</p><br></br>

                    <a className="btn btn-primary" href="https://docs.google.com/document/d/10X0Sa-ivegEu0MiVMPskheyuaER5BqlA6aTHPkvfCLo/edit?usp=sharing" target="_blank">My Resume</a>

                </div>
            </div>
        </div>
    );
}

export default Home;