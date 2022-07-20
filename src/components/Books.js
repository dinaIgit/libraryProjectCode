import {connect} from "react-redux";
import {getAllBooks} from "../store/booksReducer/BooksActionCreator";
import {useEffect} from "react";
import Book from "./Book";

const Books = ({books, getBooks, history})=>{

    useEffect(()=>{
        if (books.length===0)
            getBooks()
        // eslint-disable-next-line
    }, [])

    return(
        <div className='container mt-5 text-secondary'>
            <h2>List Of The Best Books</h2>
            <div className='row row-cols-2 row-cols-md-4'>
                
                {books.map(book=><Book key={book.id} book={book} history={history}/>)}
            </div>
        </div>
    )
}

const mapStateToProps=({BooksReducer})=>{
    return{
        books: BooksReducer.books
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getBooks: ()=>dispatch(getAllBooks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Books)