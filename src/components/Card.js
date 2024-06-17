
export default function Card(props){

    return(
        <div className="card">
            <img src={props.src}/>
            <h3>Add to {props.name}</h3>
            <p>Minimum version {props.number}</p>
            <div className="hr">
                <span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span>
                <span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span>
                <span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span>
                </div>
            <button>Add & Install Extension</button>
        </div>
    )
}