import Field from "./Field";
import Textarea from "./Textarea";
import Select from "./Select";
import {useForm} from "react-cool-form";
import {connect} from "react-redux";
import {addComment} from "../store/booksReducer/BooksActionCreator";

const NewComment = ({bookId, addCommentToBook}) => {
    const {form, use} = useForm({
        defaultValues: {name: '', comment: '', note: ''},
        onSubmit: (values, {reset}) => {
            console.log('onSubmit', values)
            addCommentToBook(bookId, {...values, id:Date.now()})
            reset()
        }
    })

    const errors = use('errors', {errorWithTouched: true})

    return (
        <div className='row g-2 w-75 mt-5 text-start m'>
            <h5>Add your comment</h5>
            <form ref={form} noValidate className='w-100 mx-auto mt-2 mb-3 text-start'>
                <Field
                    label='name'
                    id='name'
                    name='name'
                    placeholder="your name"
                    reqired
                    error={errors.name}
                />
                <Textarea
                    label='comment'
                    id='comment'
                    name='comment'
                    placeholder="type your comment"
                    reqired
                    error={errors.comment}>
                </Textarea>
                <Select
                    label='your note'
                    id='note'
                    name='note'
                    reqired
                    error={errors.note}
                >
                    <option value='' disabled>Choice your note</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </Select>
                <input type='submit' className='btn btn-primary w-100'/>

            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentToBook: (bookId, comment) => dispatch(addComment(bookId, comment))
    }
}

export default connect(null, mapDispatchToProps)(NewComment)