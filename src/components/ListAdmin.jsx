import Admins from '.././data/Admin.json'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '/img/wf.jpg';

function ListAdmins() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div activeIndex={index} onSelect={handleSelect} className="mainSection px-5 mt-1 pb-5 d-flex flex-column align-items-center">
      <Carousel className="carousel-admin" controls={false}>
        {
          Admins.map(e => (
            <Carousel.Item className="w-100" key={e.nama}>
              <div className="ket-admin">
                <h1 className="nama-admin fs-5 p-3 fw-bold text-warning"><i className="bi bi-person"></i> {e.nama}</h1>
                <div className="d-flex justify-content-between">
                  <img className="img-adm ml-2 mb-2" src={e.photo} alt={e.nama}/>
                  <div className="d-flex flex-column justify-content-between"><div><p className="text-white mt-3 px-3 fw-bold fs-6"><span className="px-3 py-1 jabatan">{e.jabatan}</span></p>
                    <div><p className="quote px-3 mt-1 pb-3 h-100">{e.quote}</p></div></div>
                    <div className="d-flex flex-wrap gap-3 px-3 mb-3">
                      <a href={e.wa} target="_blank" className="sosmed px-3 py-1 fs-7 text-warning"><i className="bi bi-whatsapp"></i> Whatsapp</a>
                      <a href={e.ig} target="_blank" className="sosmed px-3 py-1 fs-7 text-warning"><i className="bi bi-instagram"></i> Instagram</a>
                      <a href={e.idc} target="_blank" className="sosmed px-3 py-1 fs-7 text-warning"><i className="bi bi-box-arrow-up-right"></i> Kartu nama</a>
                    </div>
                  </div>
                </div>
              </div>
              <img src={e.photo} className="gambar w-100" />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default ListAdmins;