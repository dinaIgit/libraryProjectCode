import {connect} from "react-redux";
import {getAllBooks} from "../store/booksReducer/BooksActionCreator";
import {useEffect} from "react";
import Loader from "./Loader";
import Comments from "./Comments";
import NewComment from "./NewComment";
import Stars, {emptyStars} from "./Stars";

const BookInfo = ({match, history, books, getBooks}) => {
    useEffect(() => {
        if (books.length === 0)
            getBooks()
        // eslint-disable-next-line
    }, [])
    const bookId = +match.params.id
    const book = books.find(b => b.id === bookId);

    return (
        books.length === 0 ? <Loader/> :
            <div className='container mt-5 '>
                <div className='row'>
                    <div className="card col-4 text-center mb-3 px-3">
                        <div className="card-body">
                            <h3 className="card-title">{book.title}</h3>
                            <h5>by: {book.author}</h5>
                            <img src={book.cover} className="card-img-top w-75" alt="..."/>
                            <p className="mt-3">{book.description}</p>
                            {book.rate ? <Stars rate={+book.rate}/> : <p style={{fontSize:'16px', color:'blue'}}>{emptyStars()}</p>}
                        </div>
                        <p className="text-danger">{book.pageQnt} pages</p>
                        <hr/>

                        <button className="btn btn-secondary btn-sm mb-3 p-2"
                                onClick={() => {
                                    history.push(`/books`)
                                }}>Back to list
                        </button>
                    </div>
                    <div className='col-8 px-5'>
                        <h3>Commentary</h3>
                        <Comments comments={book.comments}/>
                        <NewComment bookId={book.id}/>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = ({BooksReducer}) => {
    return {
        books: BooksReducer.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(getAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo)