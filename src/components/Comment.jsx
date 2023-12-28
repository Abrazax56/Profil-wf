export default function Comment() {
  return (
    <div className="mainSection p-5 d-flex flex-column align-items-baseline">
      <h1 className="judulsection text-white fs-3"><i className="bi bi-chat-dots"></i> Komentar</h1>
      <div className="mt-5 p-3 jadwal w-100">
        <div className="box-coment comment-nama d-flex flex-column gap-3 p-3">
          <div className="komentar">
            <p className="nama-komen px-3 pb-1 pt-1 text-warning"><i className="bi bi-person"></i> Ahmad Beni Rusli</p>
            <div><p className="text-white px-3 h-100">Wiihhh bagus banget kak</p></div>
            <div className="px-3 d-flex justify-content-baseline"><p className="wajib fs-7 px-2"><i className="bi bi-clock"></i> 27/12/2023</p></div>
          </div>
        </div>
        <form className="mt-4">
          <label className="text-warning">Masukan nama</label>
          <input type="text" className="comment-nama w-100 p-2 text-warning" placeholder="Masukan nama kamu"/>
          <label className="text-warning mt-4">Masukan komentar</label>
          <textarea className="comment-nama w-100 p-2 text-warning" placeholder="Masukan komentar"></textarea>
          <button type="submit" className="mt-4 p-2 w-100 button">Kirim</button>
        </form>
      </div>
    </div>
  )
}