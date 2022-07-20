import Field from "./Field";
import {useForm, set} from "react-cool-form";
import Textarea from "./Textarea";
import * as yup from 'yup'
import {connect} from "react-redux";
import {addBookToBooks} from "../store/booksReducer/BooksActionCreator";

const AddBookForm = ({addBook, history}) => {
    const validateWithYup = (schema) => async (values) => {
        let errors = {};
        try {
            await schema.validate(values, {abortEarly: false});
        } catch (yupError) {
            yupError.inner.forEach(({path, message}) => set(errors, path, message));
        }
        return errors;
    };
    const yupSchema = yup.object().shape({
        title: yup.string().min(3).required(),
        author: yup.string().min(3).required(),
        cover: yup.string().url(),
        description: yup.string().required().min(15),
        pageQnt: yup.number().required().positive().integer()
    });

    const {form, use} = useForm({
        defaultValues: {title: "", author: "", cover: "", description: "", pageQnt: ""},
        validate: validateWithYup(yupSchema),
        onSubmit: (values, {reset}) => {
            console.log("onSubmit: ", values)
            addBook({...values, id: Date.now(), comments: []})
            reset()
            history.push('/books')
        }
    });
    const errors = use("errors", {errorWithTouched: true});
    return (
        <div className='container mt-5'>
            <h2>Add your favorite book</h2>
            <form className='w-50 mx-auto mt-5 text-start' ref={form} noValidate>
                <Field autoFocus
                    label='Book title'
                    id='title'
                    name='title'
                    placeholder="type book title"
                    error={errors.title}
                />
                <Field
                    label='Book author'
                    id='author'
                    name='author'
                    placeholder="book author"
                    error={errors.author}
                />
                <Field
                    label='Book cover'
                    id='cover'
                    name='cover'
                    placeholder="type book cover link"
                    error={errors.cover}
                />
                <Textarea
                    label='Book description'
                    id='description'
                    name='description'
                    placeholder="type book description"
                    error={errors.description}>
                </Textarea>
                <Field
                    label='Page Quantity'
                    id='pageQnt'
                    name='pageQnt'
                    placeholder="type book Page Quantity"
                    error={errors.pageQnt}
                />

                <input type='submit' className='btn btn-secondary w-100'/>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => dispatch(addBookToBooks(book))

    }
}

export default connect(null, mapDispatchToProps)(AddBookForm)