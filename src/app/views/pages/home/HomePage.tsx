import { useEffect, useContext } from 'react';
import { ProductService } from '../../../services/ProductService';
import { ProductsContext } from '../../contexts/ProductsContext';


export function HomePage (){

    const { stateProducts, dispatchProducts }:any = useContext(ProductsContext)

    useEffect(()=>{
       (async function () {
         const response = await ProductService.service.getProducts()
         dispatchProducts({type:"LIST_PRODUCTS", payload:response});
       })(); 
      
    },[dispatchProducts])

    return (
        <>
        <div className="container">
        <div className="row mt-4">   
          { stateProducts.listProducts.map((item:any) => (
          <div key={item.id}  className="col-md-4">
            <div className="card p-3 m-2 border-primary" style={{width: "18rem"}}>
                <img src={item.image} alt={item.name} className="card-img-top" style={{height:110}}/>
               <p>Nombre: {item.name}</p>
               <p>Price: {item.price}</p>  
               <div className="d-flex flex-row-reverse"></div>
          </div>
          </div>
        ))} 
        </div>
        </div> 
        </>
    );
}