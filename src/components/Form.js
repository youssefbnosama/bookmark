import { useRef } from "react"

export default function Form(){
    let error = useRef()
    let validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let input = useRef()
    function inp(){
        input.current.style.border =`none`
        error.current.innerHTML = ``
        error.current.style.display = `none `
    }
    function submit(e){
        e.preventDefault()
        if(input.current.value.match(validate) != null){
            input.current.value = ``
        }else{
            input.current.style.border = `2px solid hsl(0, 94%, 66%)`
            error.current.style.display = `block`
            error.current.innerHTML = `Whoops, Enter a valid Email`
        }
    }
    return(
        <div className="form">
            <div className="container">

            <p className="p">35,000+ already joined </p>
            <h2>Stay up-to-date with what we're doing</h2>
            <form className="sub" onSubmit={(e)=>{submit(e)}}>
                <div className="input">
                <input type="text" placeholder="Your Email" ref={input} onInput={inp} />
                <p className="error" ref={error}></p>
                </div>
                <button type="submit">Contact Us</button>
            </form>
            </div>
        </div>
    )
}