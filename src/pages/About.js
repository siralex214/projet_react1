import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/logo";

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <div className="about">
                <h1>A propos</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, amet beatae consectetur
                    corporis dolor dolore eos explicabo facilis fuga fugit harum molestiae nisi quae velit veritatis
                    voluptatem? Quisquam, sed.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate deleniti
                    doloribus earum ex, excepturi hic illum incidunt ipsum libero quaerat quas quisquam, similique
                    ullam. Alias asperiores autem commodi consequuntur cum cupiditate distinctio dolorum eos est facilis
                    id illo impedit in incidunt maxime modi nihil nobis non odio officia officiis, placeat praesentium
                    quis repellendus tenetur veniam voluptatum. Explicabo, reiciendis?</p>
            </div>
        </div>
    );
};

export default About;