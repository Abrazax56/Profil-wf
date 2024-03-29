import React, { useState, useEffect, Component } from 'react';

const sheetId = '1Pzs_XrQAukXfUgUTzdAtqBNw9P6hj52hRvfFfhxvvik';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'komentar';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

export default function Datas() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      .then(response => response.text())
      .then(res => {
        const jsonData = JSON.parse(res.substring(47).slice(0, -2));
        const comment = jsonData.table.rows
        setArr([...comment].reverse())
      });
    };
    fetchData();
  }, []);
  return (
    <>
      { 
        arr.map((comments, indexs)=> (
         <div className="komentar" key={comments.c[2].v}>
           <div><p className="h-100 w-100 nama-komen px-3 pb-1 pt-1 text-warning"><i className="bi bi-person"></i> {comments.c[1].v} {" "}<span className="text-white indexs fw-bold px-2">index : {arr.length - indexs}</span></p></div>
           <div><p className="kom text-white px-3 h-100">{comments.c[2].v}</p></div>
           <div className="px-3 d-flex justify-content-baseline"><p className="kom time px-2"><i className="bi bi-clock"></i> {comments.c[0].f}</p></div>
         </div>
        ))
      }
    </>
  )
}