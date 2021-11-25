const particlesConfig=
{
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 750
      }
    },
    color: {
      value: "#00FA9A"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 10
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: true,
        speed: 50,
        opacity_min: 0.1,
        sync: true
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 50,
        size_min: 50,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce:false,
      attract: {
        enable: false,
        rotateX: 900,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "attract"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 500,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 8,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 120,
        duration: 0.1
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
;

export default particlesConfig