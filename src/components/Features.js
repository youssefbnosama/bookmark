import { useState } from "react"
import a from "./images/illustration-features-tab-1.svg"
import b from "./images/illustration-features-tab-2.svg"
import c from "./images/illustration-features-tab-3.svg"
export default function Features(){
    let imgsArr = [a,b,c]
    const [arr,setArr] = useState([{src:a,text:`Organiza your Bookmarks however you like our Simple drag-and-drop interface gives you complete control over how you manage your favourite sites`,h2:`Bookmark in one Click`}])
    function click(e){
        e.currentTarget.parentElement.children[0].classList.remove(`active`)
        e.currentTarget.parentElement.children[1].classList.remove(`active`)
        e.currentTarget.parentElement.children[2].classList.remove(`active`)
        e.currentTarget.parentElement.children[e.currentTarget.id - 1].classList.add(`active`)
        let h2 = ``
        let text = ``
        let img = imgsArr[e.currentTarget.id -1]
        if(e.currentTarget.id == 1){
            h2 = `Bookmark in one Click`
            text = `Organiza your Bookmarks however you like our Simple drag-and-drop interface gives you complete control over how you manage your favourite sites`
        }else if(e.currentTarget.id ==2){
            h2 = `Intelligent Search`
            text = `Our powerful Search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks`

        }else if(e.currentTarget.id == 3){
            h2 = `Share your Bookmarks`
            text = `Eaily share your bookmarks and collections with others. Create a shareable link that you can send at the click of the button`
        }
        
        setArr([{src:img,text:text,h2:h2}])
    }
    return(
    <div className="features">
        <div className="top">
            <h2>Featured</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks syns between your devices so you can access them  on the go</p>
        </div>
    <div className="btns">
    <button id="1" onClick={(e)=>{click(e)}} >Simple Bookmarking</button>
        <button id="2" onClick={(e)=>{click(e)}}>Speedy Searching</button>
        <button id="3" onClick={(e)=>{click(e)}}>Easy Sharing</button>
        </div> 
        <div className="blue"></div>
        {arr.map((e)=>{
            return <div className="bottom" key={e}>
            <img src={e.src} />
            <div className="right">

            <h2>{e.h2}</h2>
            <p>{e.text}</p>
            <button>More Info</button>
            </div>
            </div>
        })}
</div>
)
}