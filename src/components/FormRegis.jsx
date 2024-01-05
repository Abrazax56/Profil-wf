import React, {useState, useRef} from 'react';
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ5RLeHOVatLhrLE7nSoL22kEB5s9OTgyOIezKEJIvpYE2ROsYf35UBJMJ2D88WkknhQ/exec';

export default function FormRegis() {
  const form = useRef(null);
  function HandelSubmiit (e) {
    e.preventDefault();
    document.querySelector(".kirm").classList.toggle('d-none')
    document.querySelector(".loadng").classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form.current)})
     .then(response => {
       document.getElementById('formulr').reset()
       document.querySelector(".kirm").classList.toggle('d-none')
       document.querySelector(".loadng").classList.toggle('d-none')
       window.navigator.vibrate(500)
     })
     .catch(error => console.error('Error!', error.message));
  }
  return (
    <div className="mainSection px-3 pb-5 d-flex flex-column align-items-baseline">
      <div className="p-3 komenan jadwal w-100">
        <form id="formulr" ref={form} name="submit-to-google-sheet" className="mt-4 formulir" onSubmit={HandelSubmiit}>
          <label className="label text-white px-3">Masukan nama</label>
          <input type="text" name="nama" className="namakomen comment-nama w-100 p-2 text-warning" placeholder="e.g ahmad beni rusli..." minlength="4" maxlength="25" required/>
          <label className="label text-white mt-4 px-3">Masukan nomor whatsapp</label>
          <input type="number" name="nowa" className="namakomen comment-nama w-100 p-2 text-warning" placeholder="e.g +62 882-xxxx-xxxx" minlength="11" maxlength="18" required/>
          <label className="label text-white mt-4 px-3">Alasan bergabung</label>
          <textarea name="pesan" className="komentarny comment-nama w-100 p-2 text-warning" placeholder="e.g saya ingin mendapatkan banyak teman..." minlength="4" maxlength="2500" required></textarea>
          <button type="submit" className="kirm mt-4 p-2 w-100 button">Kirim</button>
          <button className="mt-4 p-2 w-100 button d-none loadng" type="button" disabled>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status"> Mengirim...</span>
          </button>
        </form>
      </div>
    </div>
  )
}