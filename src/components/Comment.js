const Comment = ({comment}) => {
    return (
        <div className='card border-1'>
            <div className='card-body'>
                <h5 className='card-title text-secondary'>comment by: <b className='text-success'>'{comment.name}'</b> </h5>
                <p className='card-text h4'><i>{comment.comment}</i></p>
                <p className='card-text text-secondary font-italic'>Note: {comment.note}</p>
            </div>
        </div>
    )
}
export default Comment