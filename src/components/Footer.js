import facebook from "./images/facebook.png"
import logo from "./images/logo-bookmark.svg"
import twitter from "./images/twitter.png"
export default function Footer(){
    let arr = [630,1350,1801]
    function nav(e){
        window.scrollTo({
        left: 0,
        top: arr[e.currentTarget.id],
        behavior: "smooth",
      });
    }
    return(
        <div className="footer">
            <ul className="left">
            <li><img src={logo} /></li>
            <li id="0" onClick={(e)=>{nav(e)}}>features</li>
            <li id="1" onClick={(e)=>{nav(e)}}>pricing</li>
            <li id="2" onClick={(e)=>{nav(e)}}>contact</li>
            </ul>
            <ul className="right">
            <li><img src={facebook} /></li>
            <li><img src={twitter} /></li>
            </ul>
        </div>
    )
}