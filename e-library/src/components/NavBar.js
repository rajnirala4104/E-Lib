import { Link } from "react-router-dom"
import bookData from '../mybooks.json'
 
function NavBar(props) {

    const searchFunction = (e)=>{

        bookData.Books.forEach(bookDic=>{
            // console.log(`--${e.target.value} --${bookDic.BookName}`)
            const bookN = bookDic.BookName.toLowerCase()
            if(e.target.value === bookN){
                console.log(console.log(`${bookDic.BookName}\n${e.target.value}`))
            }
        })
        
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">E<span className="libText">.Lib</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/">Fictional Story</Link>
                                <Link className="dropdown-item" to="/">Love Story</Link>
                                <Link className="dropdown-item" to="/">Business</Link>
                                <Link className="dropdown-item" to="/">Philosophy</Link>
                                <Link className="dropdown-item" to="/">Self Development</Link>
                                <Link className="dropdown-item" to="/">Edicational</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={searchFunction} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={searchFunction} className="btn btn-outline-warning my-2 my-sm-0 searchBtn" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}


export default NavBar

