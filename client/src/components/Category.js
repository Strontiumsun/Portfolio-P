import React from "react";

function Category(props) {
    console.log(props.categories)
    return (
        <div className="category-box">
            <h1>This box is {props.categories.name}</h1>
        </div>

    )

}

export default Category;