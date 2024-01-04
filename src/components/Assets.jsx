import Jadwal from './Jadwal.jsx'
import License from './License.jsx'
import Aset from './Aset.jsx'

export default function Assets() {
  return (
    <div className="mainSection py-5 px-3 d-flex flex-column align-items-baseline">
      <h1 className="judulsection text-white fs-3"><i className="bi bi-info-circle"></i> Informasi <span className="text-warning">Wattpad Formal</span></h1>
      <Jadwal/>
      <License/>
      <Aset/>
    </div>
  )
}