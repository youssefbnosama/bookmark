import img from "./images/illustration-hero.svg"

export default function Header(){


    return(
        <div className="header">
            <div className="blue"></div>
            <div className="left">
                <h3>A Simple Bookmark <br/> Manager</h3>
                <p>A clean and Simple interface to organize your favourite Websites Open a new Browser Tap and see 
                    you Sites load instantly try it for free
                </p>
                <div className="btns">

                         <button>Get it on Chrome</button>
                <button>Get it on Firefox</button>       </div>

            </div>
            <div className="Right">
                <img src={img} />
            </div>
        </div>
    )
}