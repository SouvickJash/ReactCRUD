import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './Context/StyleProduce.css'



const Product = () => {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState();
  let { id } = useParams();

  useEffect(() => {
    const apiUser = async () => {
      const userdata = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setUser(userdata?.data);
    };
    apiUser();
  }, []);

  return (
    <>
       <div className="container">
       
        <div className="product">
          <div className="product-small-img">
            {user?.images?.map((item) => {
              return (
                <>
                  <img
                    src={item}
                    onClick={() => {
                      setProduct(item);
                    }}
                    alt=""
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="img-container">
          <img id="imageBox" src={product} alt="" />
        </div>
      </div>
      <div className="column">
        <h1>{user.title}</h1>
        <hr />
        <h3>{user.id}</h3>
        <p>{user.description}</p>
        <input defaultValue={1} type="number" />
        <Link className="btn btn-dark" to="#">
          Add to Cart
        </Link>
      </div>
        </>
  )
}


export default Product
