import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
    return (
        <main>
            <Header />
            <Homepage />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}