"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [inpValues, setInpValues] = useState<string>("");
  const [decodedName, setDecodedName] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValues(e.target.value);
  };

  const handleSmt = () => {
    router.push(`/posts?search=${inpValues}`);
  };

  useEffect(() => {
    const name = searchParams.get('search');
    if (name) {
      setDecodedName(decodeURIComponent(name));
    }
  }, [searchParams]);

  return (
    <div className='m-5'>
      <div>Search Value: {decodedName}</div>
      <input type="text" className='border border-gray-500 rounded h-10' onChange={handleValue}/>
      <button className='bg-gray-800 text-white p-2 ml-2 rounded' onClick={handleSmt}>Tìm kiếm
</button>
    </div>
  );
}
