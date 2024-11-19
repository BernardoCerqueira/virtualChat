import PropTypes from "prop-types"

CommentDiv.propTypes = {
    comments: PropTypes.array
}

export function CommentDiv({comments}){
    return(
        <div id="commentsDiv">
            {comments.length > 0
                ?(
                    comments.map((el) => (
                    <div key={el.id}>
                        <h2 style={{fontWeight: "700"}}>{el.email}</h2>
                        <p>{"Em " + el.date + ", " + el.time}</p>
                        <p className="message">{el.content}</p>
                    </div>
                    ))
                )
                :(
                    <h2>Seja o primeiro a comentar!</h2>
            )}
        </div>
    )
}