import React from "react";
import { Button } from 'reactstrap';

function Category(props) {
    return (
        <div className="category-box">
            <Button outline size="lg" block className="button-big" href={props.path}>{props.name}</Button>
            <div className="category-text">{props.description}</div>
        </div>

    )

}

export default Category;