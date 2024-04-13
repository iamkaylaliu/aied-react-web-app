import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Bottom from "./bottom";
import Home from "./home";
import Galleries from "./explore/galleries";
import Links from "./explore/links";
import Contributors from "./explore/contributors";
import Contact from "./explore/contact";

import Exhibit1 from "./exhibit/exhibit1";

function Project() {
    return (
        <div className="container-fluid pt-3">
            <div className="row">
                <div className="col">
                    <Nav />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Routes>
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/galleries" element={<Galleries />} />
                        <Route path="/links" element={<Links />} />
                        <Route path="/contributors" element={<Contributors />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/exhibit/exhibit1" element={<Exhibit1 />} />
                    </Routes>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Bottom />
                </div>
            </div>
        </div>
    );
}

export default Project;
