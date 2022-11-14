
import { useNavigate } from "react-router-dom"

  

export default function Admin(){
const navigate=useNavigate();
    


    return(
        <>
        
        <button className="testButton" type="button" onClick={()=>navigate('/signin')}>
         Logout
        </button>
        
        </>
    )

 }