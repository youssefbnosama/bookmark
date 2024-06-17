import Card from "./Card";
import chrome from "./images/logo-chrome.svg"
import firefox from "./images/logo-firefox.svg"
import opera from "./images/logo-opera.svg"
export default function Download(){


    return(
        <div className="download">
            <div className="text">
                <h2>Download the extension</h2>
                <p>We've got moer Browsers in the pipeline. Please do let us know if you've got  a favourite you'd like us to prioritize</p>
            </div>
            <div className="cards">
                <Card src={chrome} name="Chrome" number="62"/>
                <Card src={firefox} name="Firefox" number="55"/>
                <Card src={opera} name="Opera" number="46"/>
            </div>
        </div>
    )
}