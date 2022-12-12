import { useNavigate } from "react-router-dom"



function Button(){
    const navigate=useNavigate()
        function button1(){
       
            navigate('/ap')
        }
        function button2(){
       
            navigate('/bb')
        }
        function button3(){
       
            navigate('/cc')
        }
    
    
    
    
    
    
   
   
    return(
        <>
        <div className="hari">
        <button onClick={button1}>go to my  App</button>
        <button onClick={button2}>goo</button>
        <button onClick={button3}>welcome</button>
        </div>
        </>
    )


}

export default Button