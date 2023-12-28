import Introduce from './AboutIntroduce.jsx';
import Histories from './AboutHistories.jsx';

export default function About() {
  return (
    <div className="mainSection p-5 d-flex flex-column align-items-baseline">
      <h1 className="judulsection text-white fs-3"><i className="bi bi-book"></i> Tentang <span className="text-warning">Wattpad Formal</span></h1>
      <Introduce/>
      <Histories/>
    </div>
  )
}