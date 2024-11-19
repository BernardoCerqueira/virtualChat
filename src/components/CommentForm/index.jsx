import PropTypes from "prop-types"

CommentForm.propTypes = {
    handleSubmit: PropTypes.func,
    setEmail: PropTypes.func,
    setContent: PropTypes.func,
    email: PropTypes.string,
    content: PropTypes.string
}

export function CommentForm({handleSubmit, email, setEmail, content, setContent}){
    return(
        <form onSubmit={(ev) => handleSubmit(ev, email, content)}>

          <div id="emailInputDiv">
            <label htmlFor="emailInput">Email</label>
            <input
              type="text"
              name="emailInput"
              id="emailInput"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
          </div>

          <div id="commentInputDiv">
            <label htmlFor="commentArea">Comentário</label>
            <textarea
              name="commentArea"
              id="commentArea"
              rows={6}
              value={content}
              onChange={(ev) => setContent(ev.target.value)}
              required>
            </textarea>
          </div>

          <button type="submit">Enviar comentário</button>
        </form>
    )
}