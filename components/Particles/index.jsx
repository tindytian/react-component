import React, {Component} from 'react';
import config from '../../config.js';
import {loadScript} from '../util.js';

const particles_Config = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: !0,
                value_area: 1E3
            }
        },
        color: {
            value: "#e1e1e1"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 15,
            random: !0,
            anim: {
                enable: !1,
                speed: 180,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 650,
            color: "#cfcfcf",
            opacity: .26,
            width: 1
        },
        move: {
            enable: !0,
            speed: 2,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "repulse"
            },
            onclick: {
                enable: !1,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
};

export default class Particles extends Component {
    static defaultProps = {
        particlesConfig: particles_Config,
        id: 'particles',
        parentElementId: 'root'
    };
    constructor(props) {
        super(props);
        this.createParticlesDiv = this.createParticlesDiv.bind(this);
    }
    createParticlesDiv() {
        const elemDiv = document.createElement('div');
        const id = this.props.id;
        elemDiv.id = id;
        elemDiv.style.cssText = 'position: absolute;bottom: 3px; z-index: 0; width: 100%; height:100% ';
        document.getElementById(this.props.parentElementId).appendChild(elemDiv);

        window.particlesJS && window.particlesJS(id, this.props.particlesConfig);
    }
    componentDidMount() {
        if (!!window.HTMLCanvasElement && !window.particlesJS) {
            const src = config.particlesUrl;
            const localSource = '';
            loadScript(src)
                .catch(loadScript.bind(null, localSource))
                .then(this.createParticlesDiv, (null));
        }
    }
    render() {
        return <div></div>
    }
}
