import RulesOne from './Rules1.jsx'
import RulesTwo from './Rules2.jsx'
import RulesThree from './Rules3.jsx'
import RulesFourth from './Rules4.jsx'

export default function Rules() {
  return (
    <div className="mainSection py-5 px-3 d-flex flex-column align-items-baseline">
      <h1 className="judulsection text-white fs-3"><i className="bi bi-gear"></i> Peraturan <span className="text-warning">Wattpad Formal</span></h1>
      <div className="d-flex justify-content-between">
        <div className="garis mt-5"></div>
        <div className="secbox">
          <RulesOne/>
          <RulesTwo/>
          <RulesThree/>
          <RulesFourth/>
        </div>
      </div>
    </div>
  )
}