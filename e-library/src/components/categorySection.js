

function Category(props) {
    
    return (
        <>
            <div className="categorySection">
                <button type="button" className="btn btn-outline-warning" onClick={ ()=>props.getCat("Self Development")}>Self Development</button>
                <button type="button" className="btn btn-outline-warning" onClick={ ()=>props.getCat("Soft Skills")}>Soft Skills</button>
                <button type="button" className="btn btn-outline-warning" onClick={ ()=>props.getCat("Fictional Story")} >Fictional Story</button>
                <button type="button" className="btn btn-outline-warning" onClick={ ()=>props.getCat("Philosophy")}>philosophy</button>
                <button type="button" className="btn btn-outline-warning" onClick={ ()=>props.getCat("Educational")}>Educational</button>
            </div>
        </>
    )
}


export default Category;
