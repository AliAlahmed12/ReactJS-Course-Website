
import { useEffect,useState } from "react";
import axios from "axios";

const TestFetch = () => {

    const[data,SetData]=useState([])
  
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then(response => {
            SetData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // You can add additional error handling logic here, such as displaying an error message to the user
          });
      }, []);
   
    return ( 
        <>
        <div className="container ">
          {

               
            data.map(post=>(
             
                        <div className="row  d-flex justify-content-center">
                    <div className="col">
                        <div className="card border-primary mb-3">
                            <div className="card-body ">
                                <div className="row">
                                    <div className="col-sm-4 d-flex justify-content-end" >
                                        <img src={post.image} alt=""  width={100} height={100}/>
                                    </div>
                                    <div className="col-sm-8">
                                     <ul  className="list-group list-group-flush">
                                        <li className="list-group-item">Title : {post.title}</li>
                                        <li className="list-group-item">price : {post.price}</li>
                                        <li className="list-group-item">description : {post.description}</li>
                                     </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
               
                

            ))
          
          }
           </div>
        
        </>
     );
}
 
export default TestFetch ;