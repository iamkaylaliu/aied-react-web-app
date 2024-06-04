import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import Bottom from "./bottom";
import Home from "./home";
import Galleries from "./explore/galleries";
import Events from "./explore/events";
import Links from "./explore/links";
import Contributors from "./explore/contributors";
import Contact from "./explore/contact";
import Exhibit1 from "./exhibit/exhibit1";
import Exhibit2 from "./exhibit/exhibit2";
import Exhibit3 from "./exhibit/exhibit3";
import Exhibit4 from "./exhibit/exhibit4";
import Exhibit5 from "./exhibit/exhibit5";
import Exhibit6 from "./exhibit/exhibit6";
import Event1 from "./event/event1";

function Project() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/project/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/galleries" element={<Galleries />} />
                <Route path="/events" element={<Events />} />
                <Route path="/links" element={<Links />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/exhibit/exhibit1" element={<Exhibit1 />} />
                <Route path="/exhibit/exhibit2" element={<Exhibit2 />} />
                <Route path="/exhibit/exhibit3" element={<Exhibit3 />} />
                <Route path="/exhibit/exhibit4" element={<Exhibit4 />} />
                <Route path="/exhibit/exhibit5" element={<Exhibit5 />} />
                <Route path="/exhibit/exhibit6" element={<Exhibit6 />} />
                <Route path="/event/event1" element={<Event1 />} />
            </Routes>
            <Bottom />
        </>
    );
}

export default Project;
