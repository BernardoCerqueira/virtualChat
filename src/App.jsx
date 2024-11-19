import { CommentDiv } from "./components/commentDiv"
import { CommentForm } from "./components/CommentForm"
import { useComments } from "./hooks/useComments"

export default function App(){
  const commentsHook = useComments()
  const {email, setEmail, content, setContent, comments, handleSubmit} = commentsHook

  return(
    <div id="app">
      <section id="commentsSection">
        <h1>Seção de comentários</h1>
        <CommentForm content={content} email={email} handleSubmit={handleSubmit} setContent={setContent} setEmail={setEmail}/>
        <hr style={{width: "100%", marginTop: "2rem"}}/>
        <CommentDiv comments={comments}/>
      </section>
    </div>
  )
}