import "./links.css";
import newton4 from "../images/newton4.png";
import newton5 from "../images/newton5.jpeg";
import einstein8 from "../images/einstein8.png";
import einstein3 from "../images/einstein3.jpg";

function Links() {
    return (
        <div>
            <div className="linkbar">
                <h1>LINKS</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <img src={newton4} className="full-image" />
                    <img src={newton5} className="full-image" />
                </div>
                <div className="column col-4 col-light-blue">
                    <h2><em>More Physics Collections</em></h2>
                    <a href="https://museum.aapm.org/"><p>AAPM Virtual Museum of Medical Physics</p></a>
                    <a href="https://www.aip.org/history-programs"><p>AIP History Programs</p></a>
                    <a href="https://www.asrt.org/main/about-asrt/museum-and-archives"><p>ASRT Museum and Archives</p></a>
                    <a href="https://www.aip.org/history-programs/niels-bohr-library"><p>The Niels Bohr Library & Archives</p></a>
                    <a href="https://visit.cern/"><p>CERN Virtual Visitor Center</p></a>
                    <a href="https://newenergytimes.com/v2/sr/Rutherford-Blackett/IOP-Centenary-Transmutation-News-20190528.pdf"><p>IOP History of Physics Group</p></a>
                    <a href="https://www.aps.org/programs/honors/history/historicsites/index.cfm"><p>APS Historic Sites Initiative</p></a>
                    <a href="https://www.eps.org/page/distinction_sites"><p>EPS Historic Sites</p></a>
                </div>
                <div className="column col-4 col-dark-blue">
                    <h2><em>Professional Societies</em></h2>
                    <a href="https://ui.adsabs.harvard.edu/"><p>NASA Astrophysics Data System (ADS)</p></a>
                    <a href="https://scientific-info.cern/search-and-read/online-resources/cern-document-server-cds"><p>CERN Document Server</p></a>
                    <a href="https://arxiv.org/archive/physics"><p>Physics arXiv</p></a>
                    <a href="https://perimeterinstitute.ca/"><p>Perimeter Institute for Theoretical Physics Library</p></a>
                    <a href="https://www.aps.org/"><p>American Physical Society (APS)</p></a>
                    <a href="https://www.eps.org/"><p>European Physical Society (EPS)</p></a>
                    <a href="https://www.iop.org/"><p>Institute of Physics (IOP)</p></a>
                    <a href="https://www.aapt.org/"><p>American Association of Physics Teachers (AAPT)</p></a>
                </div>
                <div className="column col-2">
                    <img src={einstein3} className="full-image" />
                    <img src={einstein8} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Links;
