"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState} from 'react';

export default function page() {
    const [name,setName] = useState<string>("")
    const [category,setCategory] = useState<string>(" ")
    const [decodedName, setDecodedName] = useState<string>("");
    const [decodedCategory, setDecodedCategory] = useState<string>("");

    const searchParams = useSearchParams();

    const handleName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
    const handleCategory=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCategory(e.target.value)
    }
    const route = useRouter();
    const hadleStm=()=>{
        route.push(`/product?name=${name}&category=${category}`)
    }
    useEffect(() => {
        const name = searchParams.get('name');
        const category = searchParams.get("category")
        if (name) {
          setDecodedName(decodeURIComponent(name));
        }
        if(category){
            setDecodedCategory(decodeURIComponent(category))
        }
      }, [searchParams]);
  return (
    <div className='flex flex-col m-10 gap-5'>
        <div>Tên sản phẩm: {decodedName}</div>
        <div>Danh mục: {decodedCategory}</div>
        <input onChange={handleName} type="text" className='border border-gray-600 w-64 h-8' placeholder='Tìm kiếm theo tên'/>
        <input onChange={handleCategory} type="text" className='border border-gray-600 w-64 h-8'placeholder='Tìm kiếm theo danh mục'/>
        <button onClick={hadleStm} className='border bg-gray-800 text-white w-32 h-8'>Tìm kiếm</button>
    </div>
  )
}



