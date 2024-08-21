"use client"
import React from 'react'

export default function page(props:any) {
    const {params} = props;
  return (
    <div>Bạn đang xem blog với đường dẫn: {params.idBlog}</div>
  )
}
