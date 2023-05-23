import './css/noPage.css'
import { Link } from 'react-router-dom';

function NoPage(props) {
    return (
        <>
            <div className="PageNotFound">
                <div className="noPageContent">
                    <span className="heading display-2">
                        Oops!!
                    </span>
                    <div className="errorDetails">
                        <h2>404 Error</h2>
                        <h4>Page not Found</h4>
                    </div>
                    <div className="homePageBtn">
                        <Link className='btn btn-warning' to="/">Go Back To Home Page</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoPage;