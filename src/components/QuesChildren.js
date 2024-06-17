export default function QuesChildren(props){
    let x = false
    function click(e){
        if( x == false){
            e.currentTarget.children[1].style.transform = ` rotateZ(135deg)`
            e.currentTarget.children[1].style.borderTopColor = `red`
            e.currentTarget.children[1].style.borderRightColor = `red`
            e.currentTarget.nextElementSibling.style.display = `block`
            x = true
        } else{
            e.currentTarget.children[1].style.transform = ` rotateZ(-45deg)`
            e.currentTarget.children[1].style.borderTopColor = `hsl(231, 69%, 60%)`
            e.currentTarget.children[1].style.borderRightColor = `hsl(231, 69%, 60%)`
            e.currentTarget.nextElementSibling.style.display = `none`
            x = false
        }
    }
    return(<>
        <div className="child">
            <div className="top"onClick={(e)=>{click(e);}}>
            <h4>{props.h3}</h4>
            <button className="icon" ></button>
            </div>
            <div className="none">
                <p >

                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
            </div>
        </div>
            <hr />
  </>  )
}