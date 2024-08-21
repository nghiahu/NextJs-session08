"use client"
import Link from 'next/link';
import React from 'react'
import slug from "slug"
//bài 9 + 10
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
  return (
    <div className='flex m-10 gap-16'>
        {product.map((item:any)=>{
            return <div className='border border-gray-500 text-center'>
                <img src={item.image} alt="" className='h-32'/>
                <div>{item.title}</div>
                <Link className='border border-gray-400 p-1 m-2' href={`/bai9/${slug(item.title, {lower: true})}`}>Xem chi tiết</Link>
            </div>
        })}
    </div>
  )
}
