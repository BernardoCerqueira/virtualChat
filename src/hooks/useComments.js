import { useState } from "react"

export function useComments(){
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comment-lib")
        if(!storedComments) return []
        return JSON.parse(storedComments)
    })

    function handleSubmit(ev, email, content){
        ev.preventDefault()
        const date = new Date().toLocaleDateString('pt-BR') //!!
        const time = new Date().toLocaleTimeString('pt-BR', { //!!
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        })
        const id = Math.floor(Math.random() * 1000000)
        const newComment = {id: id, date, time, email, content}
        localStorage.setItem("comment-lib", JSON.stringify([newComment, ...comments])) //!!
        setComments((currentState) => [newComment, ...currentState])
        setEmail("")
        setContent("")
    }

    return {content, setContent, email, setEmail, comments, handleSubmit}
}