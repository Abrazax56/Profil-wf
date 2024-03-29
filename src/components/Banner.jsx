
export default function Banner() {
  return (
    <div className="imgbanner w-100 d-flex justify-content-center align-items-center flex-column">
      <div className="position-absolute z-1 d-flex justify-content-center align-items-center flex-column">
        <h1 className="judul text-warning mb-3 pb-1"><span>W</span>attpad Formal</h1>
        <p className="subJudul text-white fs-5"><i className="bi bi-pen"></i> Loyalitas Tanpa Batas</p>
        <p className="subJudul text-white fs-7">04 April 2022</p>
        <audio id="aud" loop="true" preload="true">
          <source src="/audio/audio.mp3" type="audio/mp3"/>
        </audio>
        <a href="#Tentang" className="start px-5 py-1 fs-7 text-warning" onClick={() => document.getElementById('aud').play()}>Mulai <i className="bi bi-arrow-down-short"></i></a>
      </div>
    </div>
  )
}