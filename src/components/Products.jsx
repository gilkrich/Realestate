import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import { Outlet, Link, useParams, useLocation } from 'react-router-dom'
import Heart from "react-animated-heart";
import HeartButton from './heart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';

const Products = ({ value, setvalue, fakevalue }) => {
  const [bed, setbeds] = useState()
  const [price, setprice] = useState()
  let { state } = useLocation()

  useEffect(() => {
    if (state !== null) {
      for (let index = 0; index < fakevalue.length; index++) {
        if (state.inp.toLowerCase() == fakevalue[index].city.toLowerCase()) {
          setvalue(fakevalue.filter((Obj) => Obj.city.toLowerCase() == state.inp.toLowerCase()))
        }
      }
    }
  }, []);

  function filterd(bed, price) {
    if ((price==null||price=='' )&&( bed==null||bed=='')) {
      setvalue(fakevalue)
    }
    else if ((price == null||price=='') && bed != null ) {
      setvalue(fakevalue.filter((Obj) => Obj.bedrooms == bed))
    } else if ((bed == null || bed =='' )&& price != null) {
      setvalue(fakevalue.filter((Obj) => price.split(' ')[0] <= Obj.price && Obj.price <= price.split(' ')[1]))
    }
    else {
      setvalue(fakevalue.filter((Obj) => Obj.bedrooms == bed && price.split(' ')[0] <= Obj.price && Obj.price <= price.split(' ')[1]))
    }
  }

  function heart(item) {
    if (item.fav == true) {
      item.fav = false
    } else if (item.fav == false) {
      item.fav = true
    }
  }

  function changeopt(e) {
    if (e.target.value == "highprice") {
      setvalue(value.toSorted((a, b) => b.price - a.price))
    } else
      if (e.target.value == "lowprice") {
        setvalue(value.toSorted((a, b) => a.price - b.price))
      } else
        if (e.target.value == "mostbeds") {
          setvalue(value.toSorted((a, b) => b.bedrooms - a.bedrooms))
        } else
          if (e.target.value == "lessbeds") {
            setvalue(value.toSorted((a, b) => a.bedrooms - b.bedrooms))
          } else
            if (e.target.value == "mostbaths") {
              setvalue(value.toSorted((a, b) => b.bathrooms - a.bathrooms))
            } else
              if (e.target.value == "lessbaths") {
                setvalue(value.toSorted((a, b) => a.bathrooms - b.bathrooms))
              } else if (e.target.value == "default") {
                setvalue(fakevalue)
              }else if (e.target.value == '') {
                setvalue(fakevalue)
              }
  }

  return (
    <div >
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Explore Our Available Properties: Houses for Sale and Rent</h1>
      <div className='sort-filter-area'>
       <div className='sort-area'>
      <SortIcon/>
      <select name="" id="sort" onChange={e => changeopt(e)} >
        <option selected disabled value=''>Sort</option>
        <option  value=''>default</option>
        <option value="highprice">Price high to low</option>
        <option value="lowprice">Price low to high</option>
        <option value="mostbeds"> Bedrooms high to low</option>
        <option value="lessbeds"> Bedrooms low to high</option>
        <option value="mostbaths"> Bathrooms high to low</option>
        <option value="lessbaths"> Bathrooms low to high</option>
      </select>
       </div>
          <div className='filter-area'>
  <div>
      <button onClick={()=>setvalue(fakevalue)} className='filter-buttons'>Clear</button>

      <select name="" id="" onChange={e => setbeds(e.target.value)} className='filter-option'>
        <option selected disabled >Bedrooms</option>
        <option value=''>Default</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
        <option value="5">5 Bedrooms</option>
      </select>


      <select name="" id="" onChange={e => setprice(e.target.value)} className='filter-option'>
        <option selected disabled >Price </option>
        <option value=''>Default</option>
        <option value='0 250000'>0-250k</option>
        <option value="250000 500000">250k-500k</option>
        <option value="500000 1000000">500k+</option>
      </select>

  </div>
          <div style={{display:'flex', justifyContent:'center'}}>

        <button onClick={() => filterd(bed, price)} className='filter-buttons'><FilterAltIcon/></button>
        
          </div>
          </div>
      </div>
      <div id='out'>
        {
          value?.length!=0?
          value.map((item, index) =>
            <div id='Product-card' key={index}>
              <div className='product-image-container'><Link to={`${item.zpid}`}><img className='product-image' src={item.imgSrc} alt="" width='100%' height='100%' /></Link></div>
              <div className='product-card-text'>
                <h3>{`price : $${item.price}`}</h3>
                <div><span>{`${item.bedrooms} Bedrooms |`}</span> <span> {`${item.bathrooms} Bathrooms |`}</span> </div>
                <p>{`${item.country}. ${item.city} ${item.streetAddress} `}</p>
                <div className='products-buttons'>
                <HeartButton place={index} heart={heart} item={item} fakevalue={fakevalue} value={value}/>
                <Link to={`${item.zpid}`} style={{height:'30px'}}><button class="buy-button">see more</button></Link>
                </div>
              </div>
            </div>):
            <div style={{width:'80vw' ,textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}} >
              <h1>No Houses matches your conditions</h1>
               <h2> You can clear up and may try diffrent terms</h2>
               <button onClick={()=>setvalue(fakevalue)} style={{width:'150px',height:'40px',borderRadius:'20px' ,backgroundColor:'#1976d2',border:'0',color:'white'}}>clear</button>
               <img src="https://media.istockphoto.com/id/1357284048/vector/no-item-found-vector-flat-icon-design-illustration-web-and-mobile-application-symbol-on.jpg?s=612x612&w=0&k=20&c=j0V0ww6uBl1LwQLH0U9L7Zn81xMTZCpXPjH5qJo5QyQ=" alt="" />
            </div>
        }
      </div>
    </div>
  )
}

export default Products
