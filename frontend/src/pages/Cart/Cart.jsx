import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản phẩm</p>
          <p>Tiêu đề</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng cộng</p>
          <p>Xóa</p>

        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                {" "}
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} VND</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} VND</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng Số Giỏ Hàng</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng Phụ</p>
              <p>{getTotalCartAmount()} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Phí Giao Hàng</p>
            <p>{getTotalCartAmount()===0?0:20000} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <b>Tổng Cộng</b>
            <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+20000} VND</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>TIẾP TỤC ĐẾN THANH TOÁN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mãi, hãy nhập ở đây</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="mã khuyến mãi" />
              <button>Áp dụng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
