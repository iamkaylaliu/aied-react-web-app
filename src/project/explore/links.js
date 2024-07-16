// import "./links.css";
// import "./newlinks.css";
// import newton4 from "../images/newton4.png";
// import newton5 from "../images/newton5.jpeg";
// import einstein8 from "../images/einstein8.png";
// import einstein3 from "../images/einstein3.jpg";

// function Links() {
//     return (
//         <div>
//             <div className="linkbar">
//                 <h1>LINKS</h1>
//             </div>
//             <div className="links-container">
//                 <div className="column-newlinks col-2-newlinks">
//                     <img src={newton4} className="full-image-newlinks" />
//                     <img src={newton5} className="full-image-newlinks" />
//                 </div>
//                 <div className="column-newlinks col-4-newlinks col-light-blue">
//                     <h2><em>More Physics Collections</em></h2>
//                     <a href="https://museum.aapm.org/"><p>AAPM Virtual Museum of Medical Physics</p></a>
//                     <a href="https://www.aip.org/history-programs"><p>AIP History Programs</p></a>
//                     <a href="https://www.asrt.org/main/about-asrt/museum-and-archives"><p>ASRT Museum and Archives</p></a>
//                     <a href="https://www.aip.org/history-programs/niels-bohr-library"><p>The Niels Bohr Library & Archives</p></a>
//                     <a href="https://visit.cern/"><p>CERN Virtual Visitor Center</p></a>
//                     <a href="https://newenergytimes.com/v2/sr/Rutherford-Blackett/IOP-Centenary-Transmutation-News-20190528.pdf"><p>IOP History of Physics Group</p></a>
//                     <a href="https://www.aps.org/programs/honors/history/historicsites/index.cfm"><p>APS Historic Sites Initiative</p></a>
//                     <a href="https://www.eps.org/page/distinction_sites"><p>EPS Historic Sites</p></a>
//                 </div>
//                 <div className="column-newlinks col-4-newlinks col-dark-blue">
//                     <h2><em>Professional Societies</em></h2>
//                     <a href="https://ui.adsabs.harvard.edu/"><p>NASA Astrophysics Data System (ADS)</p></a>
//                     <a href="https://scientific-info.cern/search-and-read/online-resources/cern-document-server-cds"><p>CERN Document Server</p></a>
//                     <a href="https://arxiv.org/archive/physics"><p>Physics arXiv</p></a>
//                     <a href="https://perimeterinstitute.ca/"><p>Perimeter Institute for Theoretical Physics Library</p></a>
//                     <a href="https://www.aps.org/"><p>American Physical Society (APS)</p></a>
//                     <a href="https://www.eps.org/"><p>European Physical Society (EPS)</p></a>
//                     <a href="https://www.iop.org/"><p>Institute of Physics (IOP)</p></a>
//                     <a href="https://www.aapt.org/"><p>American Association of Physics Teachers (AAPT)</p></a>
//                 </div>
//                 <div className="column-newlinks col-2-newlinks">
//                     <img src={einstein3} className="full-image-newlinks" />
//                     <img src={einstein8} className="full-image-newlinks" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Links;

import React from "react";
import "./links.css";
import "./newlinks.css";
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
                <div className="column-newlinks col-2-newlinks">
                    <img src={newton4} className="full-image-newlinks" alt="Newton" />
                    <img src={newton5} className="full-image-newlinks" alt="Newton" />
                </div>
                <div className="column-newlinks col-4-newlinks col-light-blue">
                    <h2><em>Science Organizations</em></h2>
                    <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer"><p>NASA</p></a>
                    <a href="https://www.cern.ch/" target="_blank" rel="noopener noreferrer"><p>CERN</p></a>
                    <a href="https://www.perimeterinstitute.ca/" target="_blank" rel="noopener noreferrer"><p>Perimeter Institute</p></a>
                    <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer"><p>Massachusetts Institute of Technology (MIT)</p></a>
                    <a href="https://www.caltech.edu/" target="_blank" rel="noopener noreferrer"><p>California Institute of Technology (Caltech)</p></a>
                    <a href="https://www.stem.org.uk/" target="_blank" rel="noopener noreferrer"><p>STEM Learning</p></a>
                    <a href="https://www.science.org.au/" target="_blank" rel="noopener noreferrer"><p>Australian Academy of Science</p></a>
                    <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer"><p>Khan Academy</p></a>
                    <a href="https://www.amnh.org/" target="_blank" rel="noopener noreferrer"><p>American Museum of Natural History</p></a>
                </div>
                <div className="column-newlinks col-4-newlinks col-dark-blue">
                    <h2><em>Magazines & Online Courses</em></h2>
                    <a href="https://www.nationalgeographic.com/" target="_blank" rel="noopener noreferrer"><p>National Geographic</p></a>
                    <a href="https://www.scientificamerican.com/" target="_blank" rel="noopener noreferrer"><p>Scientific American</p></a>
                    <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer"><p>Nature</p></a>
                    <a href="https://www.sciencemag.org/" target="_blank" rel="noopener noreferrer"><p>Science Magazine</p></a>
                    <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer"><p>Coursera</p></a>
                    <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer"><p>edX</p></a>
                    <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer"><p>Codecademy</p></a>
                    <a href="https://www.brainpop.com/" target="_blank" rel="noopener noreferrer"><p>BrainPOP</p></a>
                    <a href="https://www.exploratorium.edu/" target="_blank" rel="noopener noreferrer"><p>Exploratorium</p></a>
                </div>
                <div className="column-newlinks col-2-newlinks">
                    <img src={einstein3} className="full-image-newlinks" alt="Einstein" />
                    <img src={einstein8} className="full-image-newlinks" alt="Einstein" />
                </div>
            </div>
        </div>
    );
}

export default Links;
