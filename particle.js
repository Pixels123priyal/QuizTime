import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particleconfig";

function ParticleBackground(){
    return(
        <Particles params={particlesConfig}></Particles>
    );
}

export default ParticleBackground