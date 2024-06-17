import QuesChildren from "./QuesChildren";

export default function Ques(){

    return(
        <>
        <div className="ques">
             <div className="text">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you hava any other Qustions you would like answered please feel free to email us</p>
            </div> 
            <div className="bottom">
                <hr />
                <QuesChildren h3="What is Bookmark?" />
                <QuesChildren h3="How can i request a new browser?" />
                <QuesChildren h3="Is there a mobile app?" />
                <QuesChildren h3="What about other chromium browsers?" />
            </div>
        </div>
            <button className="btn">More Info</button></>
   )
}