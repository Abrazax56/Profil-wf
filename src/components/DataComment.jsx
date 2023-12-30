import React, { useState, useEffect, Component } from 'react';

const sheetId = '1Pzs_XrQAukXfUgUTzdAtqBNw9P6hj52hRvfFfhxvvik';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'komentar';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

export default function Datas() {
  const [data, setData] = useState('');
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      .then(response => response.text())
      .then(res => {
        const jsonData = JSON.parse(res.substring(47).slice(0, -2));
        const newData = jsonData.table.rows
        const komen = [...jsonData]
        setData(newData[0].c[0].f)
        setDatas(komen)
      });
    };
    fetchData();
  }, []);
  
  return (
    <>
     {
       datas.map(komen => (
         <div className="komentar" key={komen.c[0].v}>
           <p className="nama-komen px-3 pb-1 pt-1 text-warning"><i className="bi bi-person"></i> {komen.c[1].v}</p>
           <div><p className="text-white px-3 h-100">{komen.c[2].v}</p></div>
           <div className="px-3 d-flex justify-content-baseline"><p className="wajib fs-7 px-2"><i className="bi bi-clock"></i> {komen.c[0].f}</p></div>
         </div>
       ))
     }
   </>
  )
}