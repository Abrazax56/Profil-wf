import DataComment from './DataComment.jsx'
function HandleClickSubmit(e) {
  e.preventDefault();
}

export default function Comments() {
  return (
    <div className="mainSection p-5 d-flex flex-column align-items-baseline">
      <h1 className="judulkomen judulsection fs-3"><i className="bi bi-chat-dots"></i> Komentar [mendatang...]</h1>
      <div className="mt-5 p-3 komenan jadwal w-100">
        <div className="box-coment d-flex flex-column gap-3 p-3">
          <DataComment/>
        </div>
        <form className="mt-4 formulir" onSubmit={HandleClickSubmit}>
          <label className="text-warning">Masukan nama</label>
          <input type="text" className="comment-nama w-100 p-2 text-warning" placeholder="Masukan nama kamu" disabled={true}/>
          <label className="text-warning mt-4">Masukan komentar</label>
          <textarea className="comment-nama w-100 p-2 text-warning" placeholder="Masukan komentar" disabled={true}></textarea>
          <button type="submit" className="mt-4 p-2 w-100 button">Kirim</button>
        </form>
      </div>
    </div>
  )
}