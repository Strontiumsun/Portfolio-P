import React from 'react';
import { Button } from 'reactstrap';

function HomePage() {
    return (
        <div>
            <Button outline size="lg" block href="/coding" className="button-big">Coding</Button>
            {/* <Button outline size="lg" block href="/about" className="button-big">About</Button> */}
        </div>
    )
}

export default HomePage;