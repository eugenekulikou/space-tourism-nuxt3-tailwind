import type { IApiData } from '~/types';

export const data: IApiData = {
  home: [
    {
      slug: 'home',
      name: 'Space',
      content: {
        heading: 'So, you want to travel to Space',
        button: {
          to: '#explore-button',
          label: 'Explore',
        },
        description:
          "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
      },
      title: '',
      keywords: '',
      description: '',
    },
  ],
  destinations: [
    {
      slug: 'moon',
      name: 'Moon',
      content: {
        heading: '01 pick your destination',
        images: {
          png: './assets/images/pages/destination/image-moon.png',
          webp: './assets/images/pages/destination/image-moon.webp',
          alt: 'The image of the Moon',
        },
        description:
          'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        info: [
          { avgDistance: 'Avg. distance', distance: '384,400 km' },
          {
            estTravel: 'Est. travel time',
            travel: '3 days',
          },
        ],
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'mars',
      name: 'Mars',
      content: {
        heading: '01 pick your destination',
        images: {
          png: './assets/images/pages/destination/image-mars.png',
          webp: './assets/images/pages/destination/image-mars.webp',
          alt: 'The image of Mars',
        },
        description:
          'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',

        info: [
          { avgDistance: 'Avg. distance', distance: '225 mil. km' },
          {
            estTravel: 'Est. travel time',
            travel: '9 months',
          },
        ],
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'europa',
      name: 'Europa',
      content: {
        heading: '01 pick your destination',
        images: {
          png: './assets/images/pages/destination/image-europa.png',
          webp: './assets/images/pages/destination/image-europa.webp',
          alt: 'The image of  Europa, the satelite of the Jupiter',
        },
        description:
          'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        info: [
          { avgDistance: 'Avg. distance', distance: '628 mil. km' },
          {
            estTravel: 'Est. travel time',
            travel: '3 years',
          },
        ],
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'titan',
      name: 'titan',
      content: {
        heading: '01 pick your destination',
        images: {
          png: './assets/images/pages/destination/image-titan.png',
          webp: './assets/images/pages/destination/image-titan.webp',
          alt: '',
        },
        description:
          'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        info: [
          { avgDistance: 'Avg. distance', distance: '1.6 bil. km' },
          {
            estTravel: 'Est. travel time',
            travel: '7 years',
          },
        ],
      },
      title: '',
      keywords: '',
      description: '',
    },
  ],
  crew: [
    {
      slug: 'douglas-hurley',
      name: 'Douglas Hurley',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: './assets/images/pages/crew/image-douglas-hurley.png',
          webp: './assets/images/pages/crew/image-douglas-hurley.webp',
          alt: '',
        },
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'mark-shuttleworth',
      name: 'Mark Shuttleworth',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: './assets/images/pages/crew/image-mark-shuttleworth.png',
          webp: './assets/images/pages/crew/image-mark-shuttleworth.webp',
          alt: '',
        },
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'victor-glover',
      name: 'Victor Glover',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: './assets/images/pages/crew/image-victor-glover.png',
          webp: './assets/images/pages/crew/image-victor-glover.webp',
          alt: '',
        },
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'anousheh-ansari',
      name: 'Anousheh Ansari',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: './assets/images/pages/crew/image-anousheh-ansari.png',
          webp: './assets/images/pages/crew/image-anousheh-ansari.webp',
          alt: '',
        },
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      },
      title: '',
      keywords: '',
      description: '',
    },
  ],
  technology: [
    {
      slug: 'launch-vehicle',
      name: 'Launch vehicle',
      content: {
        subheading: 'THE TERMINOLOGY…',
        heading: '03 Meet your crew',
        images: {
          portrait:
            './assets/images/pages/technology/image-launch-vehicle-portrait.jpg',
          landscape:
            './assets/images/pages/technology/image-launch-vehicle-landscape.jpg',
          alt: '',
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'spaceport',
      name: 'Spaceport',
      content: {
        subheading: 'THE TERMINOLOGY…',
        heading: '03 Meet your crew',
        images: {
          portrait:
            './assets/images/pages/technology/image-spaceport-portrait.jpg',
          landscape:
            './assets/images/pages/technology/image-spaceport-landscape.jpg',
          alt: '',
        },
        description:
          'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      },
      title: '',
      keywords: '',
      description: '',
    },
    {
      slug: 'space-capsule',
      name: 'Space capsule',
      content: {
        subheading: 'THE TERMINOLOGY…',
        heading: '03 Meet your crew',
        images: {
          portrait:
            './assets/images/pages/technology/image-space-capsule-portrait.jpg',
          landscape:
            './assets/images/pages/technology/image-space-capsule-landscape.jpg',
          alt: '',
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
      title: '',
      keywords: '',
      description: '',
    },
  ],
};
