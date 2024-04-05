import { useState } from 'react';
import './Todolist.css';
const Todolist = () => {
    const [recard, setRecard] = useState([]);
    const [name, setName] = useState("");
    const [editIndex, setEditIndex] = useState(-1);

    const CreateRecard = () => {
        if(editIndex !== -1) {
            recard[editIndex] = name;
        } else if(name !== ""){
            const recardlist = [...recard,name];
            setRecard(recardlist);
        }
            setName("");
    }

    const deleteRecard = ( index ) => {
           const filteredRecard = recard.filter( (data, ind) => ind !== index);
           setRecard(filteredRecard); 
    }

    const editRecard = ( index ) => {
          setEditIndex(index);
          setName(recard[index]); 
    }

    return (
         <div className='container mt-5'>
            <div className="todolistbox">
                 <div className="inputbox">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{outline:'none',textIndent:'7px'}}/>    
                </div>
                <div className="addbox">
                    <input type="button" className='createbtn' value="Create" onClick = {CreateRecard}/>    
                </div>  
            </div>

           {
              recard.map( ( data, index ) => {
                   return(
                     <div className="todolistbox">
                         <div className="inputbox">
                             <div className="namebox" style={{color:'white'}}>{data}</div>    
                         </div>
                        <div className="addbox">
                            <button className='createbtn' onClick={() => editRecard(index)}>Edit</button> 
                            <button className='createbtn' onClick={() => deleteRecard(index)}>Delete</button>      
                       </div>  
                     </div>
                   )
              })
           }
        </div>   
    )
}
export default Todolist;