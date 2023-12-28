export default function Jadwal() {
  return (
    <div className="hty mt-5 jadwal w-100">
      <p className="jad px-3 pb-2 text-white mt-3 fs-5 fw-bold"><i className="bi bi-journal-text"></i> Jadwal <span className="text-warning">Wattpad Formal</span></p>
      <div className="px-3 pb-3 pt-1 d-grid box-hari gap-3">
        <div className="hari">
          <p className="hariny text-warning px-3 py-1"><i className="bi bi-bookmark-check"></i> Senin</p>
          <p className="info-jadwal px-3 pb-1">Chat berbahasa Indonesia Formal. <span className="wajib fs-7 px-2 fw-bold">wajib</span></p>
        </div>
        <div className="hari">
          <p className="hariny text-warning px-3 py-1"><i className="bi bi-bookmark-check"></i> Sabtu</p>
          <p className="info-jadwal px-3 pb-1">Event, Konten, Game & Menfess <span className="wajib fs-7 px-2 fw-bold">wajib</span></p>
        </div>
        <div className="hari">
          <p className="hariny text-warning px-3 py-1"><i className="bi bi-bookmark-check"></i> Minggu</p>
          <p className="info-jadwal px-3 pb-1">Sharing Quotes <span className="wajib fs-7 px-2 fw-bold">wajib</span></p>
        </div>
      </div>
      <div><p className="peringatan fs-7 fw-bold px-3 pt-3 h-100"><i className="bi bi-exclamation-triangle text-danger"></i> Jika tidak mengerjakan jadwal selama tiga kali berturut-turut maka akan mendapatkan hukuman dari admin.</p></div>
    </div>
  )
}