import DataComment from './DataComment.jsx'
function HandleClickSubmit(e) {
  //e.preventDefault();
  alert("hello world")
}

export default function Comments() {
  return (
    <div className="mainSection p-5 d-flex flex-column align-items-baseline">
      <h1 className="judulkomen judulsection fs-3"><i className="bi bi-chat-dots"></i> Komentar [mendatang...]</h1>
      <div className="mt-5 p-3 komenan jadwal w-100">
        <div className="box-coment d-flex flex-column align-items-baseline gap-3 p-3">
          <DataComment/>
        </div>
        <form name="submit-to-google-sheet" className="mt-4 formulir">
          <label className="text-warning">Masukan nama</label>
          <input type="text" name="nama" className="namakomen comment-nama w-100 p-2 text-warning" placeholder="Masukan nama kamu" required/>
          <label className="text-warning mt-4">Masukan komentar</label>
          <textarea name="komen" className="komentarny comment-nama w-100 p-2 text-warning" placeholder="Masukan komentar" required></textarea>
          <button type="submit" className="mt-4 p-2 w-100 button">Kirim</button>
        </form>
      </div>
    </div>
  )
}