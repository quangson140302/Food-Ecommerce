import  { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=> {
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className="title">Thông Tin Giao Hàng</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChageHandler} value={data.firstName} type="text" placeholder='Họ' />
          <input required name='lastName' onChange={onChageHandler} value={data.lastName} type="text" placeholder='Tên'/>
        </div>
        <input required name='email' onChange={onChageHandler} value={data.email} type="text" placeholder='Địa chỉ email' />
        <input required name='street' onChange={onChageHandler} value={data.street} type="text" placeholder='Tên đường'/>
        <div className="multi-fields">
          <input required name='city' onChange={onChageHandler} value={data.city} type="text" placeholder='Huyện' />
          <input required name='state' onChange={onChageHandler} value={data.state} type="text" placeholder='Thành phố'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChageHandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input required name='country' onChange={onChageHandler} value={data.country} type="text" placeholder='Quốc gia'/>
        </div>
        <input required name='phone' onChange={onChageHandler} value={data.phone} type="text" placeholder='Số điện thoại' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Tổng Giỏ Hàng</h2>
          <div>
          <div className="cart-total-details">
              <p>Tổng tạm tính</p>
              <p>{getTotalCartAmount()} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Phí giao hàng</p>
            <p>{getTotalCartAmount()===0?0:20000} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <b>Tổng cộng</b>
            <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+20000} VND</b>
            </div>
          </div>
          <button type='submit'>TIẾP TỤC THANH TOÁN</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
