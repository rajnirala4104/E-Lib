function Category(props) {
    const catBtn = messageTitle =>{
        console.log(messageTitle)
    }
    return (
        <>
            <div className="categorySection">
                <button type="button" className="btn btn-outline-warning" onClick={ () => catBtn("SelfDevelopment")}>Self Development</button>
                <button type="button" className="btn btn-outline-warning" onClick={ () => catBtn("Soft Skills")}>Soft Skills</button>
                <button type="button" className="btn btn-outline-warning" onClick={ () => catBtn("Fictional Story")}>Fictional Story</button>
                <button type="button" className="btn btn-outline-warning" onClick={ () => catBtn("Philosophy")}>philosophy</button>
                <button type="button" className="btn btn-outline-warning" onClick={ () => catBtn("Educational")}>Educational</button>
            </div>
        </>
    )
}


export default Category;
