import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import HeartButton from './heart'
import { useState, useEffect } from 'react'

const Favorites = ({ value, setvalue }) => {
   
    const [favorites, setFavorites] = useState(value.filter((item) => item.fav == true));
      
    function removeFromFavorites(item) {
        item.fav = false;
      setFavorites(favorites.filter((Fav) => Fav.zpid != item.zpid));
    }
  
    return (
        <div >
            { favorites?.filter((item,index) => item.fav !=false).length != 0 ? 
                    <div style={{textAlign:'center'}}>
                       <h1>your favorites</h1>
                       <div id='favoritepage' >
                   {favorites?.filter((item,index) => item.fav !=false).map((item,index)=>
                    <div id='Product-card' key={index}>
                        <div className='product-image-container'><Link to={`/products/${item.zpid}`}><img className='product-image' src={item.imgSrc} alt="" width='100%' height='100%' /></Link></div>
                        <div className='product-card-text'>
                            <h3>{`price:${item.price}`}</h3>
                            <div><span>{`${item.bedrooms}Beds |`}</span> <span> {`${item.bathrooms} Bath |`}</span> </div>
                            <p>{`${item.country}. ${item.city} ${item.streetAddress} `}</p>
                            {/* <HeartButton place={index} heart={re} item={item} /> */}
                            <button onClick={()=>removeFromFavorites(item)}>x</button>
                        </div>
                    </div>
                    )}
                    </div>
                    </div>
                    :
                    <div>
                       <div className="empty-favorite-page">
                        <h1>favorites</h1>
      <h1>No Favorites</h1>
      <p>You haven't added any favorites yet.</p>
      <p>Start exploring and add some items to your favorites!</p>
    </div> 
                    </div>

            }
        </div>
    )
}

export default Favorites
