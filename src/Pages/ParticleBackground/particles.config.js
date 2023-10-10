
const particlesConfig = {
    name: 'Snow',
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'remove',
        },
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 0.4,
          opacity: 1,
          size: 80,
        },
        connect: {
          distance: 50,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 180,
          links: {
            opacity: 0.35,
          },
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
          duration: 5,
        },
        slow: {
          factor: 1,
          radius: 0,
        },
      },
    },
    particles: {
      color: {
        value: '#1e9ce6',
      },
      links: {
        blink: false,
        color: {
          value: '#fff',
        },
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.6,
        shadow: {
          blur: 5,
          color: {
            value: 'red',
          },
          enable: false,
        },
        width: 1,
      },
      move: {
        direction: 'top',
        enable: true,
        speed: 1,
      },
      collisions: {
        enable: true,
      },
      number: {
        limit: -1,
        value: 120,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
      },
      shape: {
        type: 'square',
      },
      size: {
        value: {
          min: 4,
          max: 6,
        },
      },
    },
    pauseOnBlur: true,
  };
  
  export default particlesConfig;