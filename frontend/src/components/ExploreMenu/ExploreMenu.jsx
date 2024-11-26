import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Khám phá thực đơn của chúng tôi</h1>
        <p className='explore-menu-text'>Thưởng thức thực đơn đa dạng với những món ăn tươi ngon, kết hợp tinh tế giữa hương vị truyền thống và hiện đại. Mỗi món đều được chuẩn bị chu đáo để mang đến trải nghiệm ẩm thực tuyệt vời.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
