import img from "./images/logo-bookmark.svg"
export default function Navbar(){
    let arr = [630,1350,1801]
    function nav(e){
        window.scrollTo({
        left: 0,
        top: arr[e.currentTarget.id],
        behavior: "smooth",
      });
    }
    //1475
    return(
        <div className="navbar">
            <img src={img} alt="book" />

            <ul>
                <li id="0" onClick={(e)=>{nav(e)}}>features</li>
                <li id="1" onClick={(e)=>{nav(e)}}>pricing</li>
                <li id="2" onClick={(e)=>{nav(e)}}>contact</li>
                <li  >log in</li>
            </ul>
        </div>
    )
}