"use client"
import React from 'react'
import slug from 'slug';
export default function page(props:any) {
    const {params} = props;
    const product=[
        {
            id:1,
            title:"Lập trình cơ bản C",
            image:"https://topviecit.vn/blog/wp-content/uploads/2022/07/ngon-ngu-lap-trinh-C-la-gi-topcv.jpg",
            numberofhours:100,
            auther:"Ngọ Văn Quý"
        },
        {
            id:2,
            title:"Lập trình Java cord",
            image:"https://tuyendung.kfcvietnam.com.vn/Data/Sites/1/media/blog/java-la-gi.jpg",
            numberofhours:100,
            auther:"Ngọ Văn Quý"
        },
        {
            id:3,
            title:"Lập trình PHP",
            image:"https://techvccloud.mediacdn.vn/280518386289090560/2021/8/30/php-la-gi-1630265268116752752599.jpg",
            numberofhours:100,
            auther:"Ngọ Văn Quý"
        }
    ] 
    const idPro = product.find((item:any)=> slug(item.title) == params.idProduct)
  return (
    <div>Trang chi tiết : {idPro?.title}
        <div>id: {idPro?.id}</div>
        <div>Số giờ học: {idPro?.numberofhours}</div>
        <div>Tác giả: {idPro?.auther}</div>
    </div>
  )
}
