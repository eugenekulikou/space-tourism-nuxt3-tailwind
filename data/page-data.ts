import type { IApiData } from '~/types';

export const data: IApiData = {
  home: [
    {
      slug: 'home',
      name: 'Space',
      content: {
        heading: 'So, you want to travel to Space',
        button: {
          to: '/destinations',
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
          png: '/images/pages/destination/image-moon.png',
          webp: '/images/pages/destination/image-moon.webp',
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
      title: 'Explore the Moon: Unforgettable Space Tourism Experience',
      keywords:
        'Moon, space tourism, lunar travel, Luna 2, Apollo 11, space exploration',
      description:
        'Embark on an unforgettable space tourism journey to the Moon. Witness Earth from a new perspective and explore the historic landing sites of Luna 2 and Apollo 11. Experience relaxation and gain fresh insights on this three-day voyage, covering an average distance of 384,400 km.',
    },
    {
      slug: 'mars',
      name: 'Mars',
      content: {
        heading: '01 pick your destination',
        images: {
          png: '/images/pages/destination/image-mars.png',
          webp: '/images/pages/destination/image-mars.webp',
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
      title: 'Journey to Mars: Epic Space Tourism Adventure',
      keywords:
        'Mars, space tourism, Martian landscape, Olympus Mons, space exploration',
      description:
        'Prepare for an epic space tourism adventure to Mars. Explore the rugged Martian landscape and conquer Olympus Mons, the tallest mountain in the solar system. With a travel time of nine months and an average distance of 225 million km, this journey promises unparalleled experiences.',
    },
    {
      slug: 'europa',
      name: 'Europa',
      content: {
        heading: '01 pick your destination',
        images: {
          png: '/images/pages/destination/image-europa.png',
          webp: '/images/pages/destination/image-europa.webp',
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
      title: "Europa: Discover the Frozen Beauty of Jupiter's Moon",
      keywords:
        'Europa, space tourism, icy moon, Galilean moons, Jupiter, space exploration',
      description:
        "Delve into the frozen beauty of Europa, Jupiter's mesmerizing moon. Experience the thrill of ice skating and winter sports on its icy surface, located 628 million km away. Plan your three-year space tourism adventure to Europa and immerse yourself in its enchanting atmosphere.",
    },
    {
      slug: 'titan',
      name: 'titan',
      content: {
        heading: '01 pick your destination',
        images: {
          png: '/images/pages/destination/image-titan.png',
          webp: '/images/pages/destination/image-titan.webp',
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
      title: "Titan: Explore Saturn's Moon and Its Mysteries",
      keywords:
        "Titan, space tourism, Saturn's moon, atmosphere, Rings of Saturn, space exploration",
      description:
        "Discover the mysteries of Titan, Saturn's intriguing moon with a dense atmosphere. Experience its otherworldly landscapes and behold striking views of the Rings of Saturn. Begin your seven-year space tourism journey to Titan, located approximately 1.6 billion km away.",
    },
  ],
  crew: [
    {
      slug: 'douglas-hurley',
      name: 'Douglas Hurley',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: '/images/pages/crew/image-douglas-hurley.png',
          webp: '/images/pages/crew/image-douglas-hurley.webp',
          alt: '',
        },
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      },
      title: 'Meet Douglas Hurley: Your Experienced Commander',
      keywords:
        'Douglas Hurley, space crew, NASA astronaut, Crew Dragon Demo-2, space exploration',
      description:
        'Meet Douglas Hurley, an American engineer and former NASA astronaut who served as the commander of Crew Dragon Demo-2. With his extensive experience and background as a Marine Corps pilot, he brings invaluable expertise to your space journey.',
    },
    {
      slug: 'mark-shuttleworth',
      name: 'Mark Shuttleworth',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: '/images/pages/crew/image-mark-shuttleworth.png',
          webp: '/images/pages/crew/image-mark-shuttleworth.webp',
          alt: '',
        },
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      },
      title: 'Introducing Mark Shuttleworth: Mission Specialist Extraordinaire',
      keywords:
        'Mark Shuttleworth, space crew, space tourist, Ubuntu, Canonical',
      description:
        "Get to know Mark Shuttleworth, the visionary founder of Canonical and the first South African space tourist. As a mission specialist, Mark's pioneering spirit and technological acumen ensure an extraordinary experience for space tourists aboard your journey.",
    },
    {
      slug: 'victor-glover',
      name: 'Victor Glover',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: '/images/pages/crew/image-victor-glover.png',
          webp: '/images/pages/crew/image-victor-glover.webp',
          alt: '',
        },
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      },
      title: 'Meet Victor Glover: Skilled Pilot and Space Explorer',
      keywords:
        'Victor Glover, space crew, NASA astronaut, SpaceX Crew Dragon, space exploration',
      description:
        'Meet Victor Glover, an accomplished pilot in the U.S. Navy and NASA astronaut. As the pilot of the SpaceX Crew Dragon, Victor brings a wealth of experience and expertise to your space adventure, ensuring a safe and thrilling journey to the International Space Station.',
    },
    {
      slug: 'anousheh-ansari',
      name: 'Anousheh Ansari',
      content: {
        heading: '02 Meet your crew',
        images: {
          png: '/images/pages/crew/image-anousheh-ansari.png',
          webp: '/images/pages/crew/image-anousheh-ansari.webp',
          alt: '',
        },
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      },
      title: 'Anousheh Ansari: Your Dedicated Flight Engineer',
      keywords:
        'Anousheh Ansari, space crew, space tourist, Prodea Systems, Iranian American engineer',
      description:
        "Discover Anousheh Ansari, an Iranian American engineer and the fourth self-funded space tourist. As a flight engineer, Anousheh's passion for exploration and innovation enriches your space tourism experience, making it truly unforgettable.",
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
            '/images/pages/technology/image-launch-vehicle-portrait.jpg',
          landscape:
            '/images/pages/technology/image-launch-vehicle-landscape.jpg',
          alt: '',
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      title: 'Explore Our Powerful Launch Vehicle: WEB-X Carrier Rocket',
      keywords:
        'Launch vehicle, carrier rocket, WEB-X, space travel, space exploration',
      description:
        " Discover the WEB-X carrier rocket, our most powerful launch vehicle designed to propel payloads from Earth's surface to space. Standing at an impressive 150 meters tall, it's a remarkable feat of engineering and an awe-inspiring sight on the launch pad.",
    },
    {
      slug: 'spaceport',
      name: 'Spaceport',
      content: {
        subheading: 'THE TERMINOLOGY…',
        heading: '03 Meet your crew',
        images: {
          portrait: '/images/pages/technology/image-spaceport-portrait.jpg',
          landscape: '/images/pages/technology/image-spaceport-landscape.jpg',
          alt: '',
        },
        description:
          'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      },
      title: 'Welcome to Our Spaceport: Launch Site for Extraordinary Journeys',
      keywords:
        'Spaceport, cosmodrome, Cape Canaveral, launch site, space exploration',
      description:
        "Explore our spaceport, strategically located at Cape Canaveral, the renowned launch site synonymous with space exploration. Take advantage of Earth's rotation for optimal launches and embark on extraordinary journeys to space from our state-of-the-art facility.",
    },
    {
      slug: 'space-capsule',
      name: 'Space capsule',
      content: {
        subheading: 'THE TERMINOLOGY…',
        heading: '03 Meet your crew',
        images: {
          portrait: '/images/pages/technology/image-space-capsule-portrait.jpg',
          landscape:
            '/images/pages/technology/image-space-capsule-landscape.jpg',
          alt: '',
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },

      title: 'Welcome to Our Spaceport: Launch Site for Extraordinary Journeys',
      keywords:
        'Space capsule, spacecraft, reentry capsule, space gym, space cinema',
      description:
        ' Immerse yourself in our space capsule, your home away from Earth during the journey. Equipped with amenities like a space gym, cinema, and various entertainment options, our capsule ensures both comfort and adventure as you traverse the cosmos.',
    },
  ],
};
