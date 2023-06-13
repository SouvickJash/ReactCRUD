import React, { useContext } from "react";
import CreateContext from "./Context/CreateContext";
import { Link} from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

  const [loadMore,setLoadMore]= useState(8);//infinite scroll
  const user = useContext(CreateContext);
  const [loading, setLoading] = useState(true);
  console.log(user);


  setTimeout(() => {
   setLoading(false);
 }, 500);
  if (loading) {
   return (
     <>
       
        <div className="spinner">
        <h6>loading...</h6>
         <ScaleLoader color="#0c55d4" size={100} />
       </div>
     </>
   );
 }
  return (
    <>
    {/* infinite scroll */}
     <InfiniteScroll
      dataLength={user.slice(0, loadMore).length}
      next={() => {
         setLoadMore(loadMore + 8);
       }}
       hasMore={true}
      //  loader={<h4>Loading...</h4>}
    />

      <div class="container">
        <div class="row">
         {
            user.slice(0,loadMore).map((item,index)=>{               return(
                  <>
            <div class="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.images} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title: {item.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href="#" className="btn btn-danger" to={`product/${item.id}`} style={{marginLeft: '80px', marginTop: '15px'}}>
                  Details
                </Link>
                {/* <Link to={`product/${item.id}`}>Details</Link> */}
               
              </div>
            </div>
          </div>
                  </>
               )
            })
         }
       
        </div>
      </div>
    </>
  );
};

export default Home;





// return (
//    <>
//    <div className='container'>
//        <div className='row'>
//            <div className='col-sm-3'></div>
//            <div className='col-sm-6'>
//            <div className="card" style={{width: '18rem'}}>
//            <img src={product.images} className="card-img-top" alt="..." />
//            <div className="card-body">
//                <h5 className="card-title">{product.title}</h5>
//                <p className="card-text">{product.description}</p>
//                <p className="card-text">{product.price}</p>
//                <a href="#" className="btn btn-primary">Go somewhere</a>
//            </div>
//            </div>
//    {
//        product?.images?.map((j)=>{
//            console.log('hh',j);
//            return(
//                <>
//            <img src={j} className="card-img-top" alt="..." />
//                </>
//            )
//        })
//    }
//            </div>
//            <div className='col-sm-3'></div>
//        </div>
//    </div>
//        </>
//      )
//    }
   
//    export default Single