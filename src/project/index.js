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
                <Route path="/event/event1" element={<Event1 />} />
            </Routes>
            <Bottom />
        </>
    );
}

export default Project;
