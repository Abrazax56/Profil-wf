import DataComment from './DataComment.jsx'
import React, {useState, useRef} from 'react';

const scriptURL = 'https://script.google.com/macros/s/AKfycbz5ET1VmY5i2zyNEYsNqlOaBDUf8LQ4mOk12taACnTiDPtm3eb7AWKpOiR9HsWFX24yzw/exec';

export default function Comments() {
  const form = useRef(null);
  function HandelSubmit (e) {
    e.preventDefault();
    document.querySelector(".kirim").classList.toggle('d-none')
    document.querySelector(".loading").classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form.current)})
     .then(response => {
       document.getElementById('formulir').reset()
       document.querySelector(".kirim").classList.toggle('d-none')
       document.querySelector(".loading").classList.toggle('d-none')
       window.location.reload(false)
     })
     .catch(error => console.error('Error!', error.message));
  }
  return (
    <div className="mainSection px-3 pb-5 d-flex flex-column align-items-baseline">
      <div className="p-3 komenan jadwal w-100">
        <div className="box-coment d-flex flex-column align-items-baseline gap-3 p-3">
          <DataComment/>
        </div>
        <form id="formulir" ref={form} name="submit-to-google-sheet" className="mt-4 formulir" onSubmit={HandelSubmit}>
          <label className="label text-white px-3">Masukan nama</label>
          <input type="text" name="nama" className="namakomen comment-nama w-100 p-2 text-warning" placeholder="Masukan nama kamu" minlength="4" maxlength="25" required/>
          <label className="label text-white mt-4 px-3">Masukan komentar</label>
          <textarea name="komen" className="komentarny comment-nama w-100 p-2 text-warning" placeholder="Masukan komentar" minlength="4" maxlength="2500" required></textarea>
          <button type="submit" className="kirim mt-4 p-2 w-100 button">Kirim</button>
          <button className="mt-4 p-2 w-100 button d-none loading" type="button" disabled>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status"> Mengirim...</span>
          </button>
        </form>
      </div>
    </div>
  )
}