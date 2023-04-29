function FilterCategory( props ){
    return(
        <>
            <li className="category-item"> 
                <a className={"filter"+props.category}> {props.category} </a>
            </li>
        </>
    )
}

export {FilterCategory};