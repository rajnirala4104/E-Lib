

function Card(props) {
    return (
        <>
            <div className="card shadow">
                <img src="/e-library/public/books.jpg" className="card-img-top" alt="Oops!!"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="/" className="btn btn-warning">Buy Now</a>
                        <a href="/" className="btn btn-outline-warning">Add to card</a>
                    </div>
            </div>
        </>
    )
}

export default Card

