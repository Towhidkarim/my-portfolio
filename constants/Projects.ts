import coretimer from '@/assets/coretimer.png'
import demoportfolio from '@/assets/demoportfolio.png'
import restaurant from '@/assets/restaurant.jpeg'
import astar from '@/assets/astar.jpeg'
import { StaticImageData } from 'next/image'

export type project = {
    title: string,
    description: string,
    imgurl: StaticImageData,
    tags: string[]
    source: string,
    demo: string,
    wip?: boolean
}

const projectsData : project[] = [{
    title: "Core Timer",
    description: "A multipurpose timer application for exercise and many other. Set your schedule, save them and use them whenever you want. Includes an interesting feature set",
    imgurl: coretimer,
    tags: ["Web", "React", "MUI", "Javascript"],
    source: 'https://github.com/Towhidkarim/Timer-App',
    demo: 'https://coretimer.netlify.app/' 
},
{
    title: "Restaurant Website",
    description: "A restaurant website with elegant design and a good featureset. ",
    imgurl: restaurant,
    tags: ["Web", "React", "Next.js", "Typescript", "Tailwind", "Work In Progress"],
    wip: true,
    source: '',
    demo: '' 
},
{
    title: "Portofilio",
    description: "A demo portfollio website made with React, and a couple of frameworks : Next, Styled components and more",
    imgurl: demoportfolio,
    tags: ["Web", "React", "Next.js", "Javascript", "StyledComponents"],
    source: 'https://github.com/Towhidkarim/Timer-App',
    demo: 'https://coretimer.netlify.app/' 
},
{
    title: "A* Pathfinder Simulation",
    description: "The A* Pathfinding Algorythm implemented with JavaScript and visualized with HTML5 Canvas",
    imgurl: astar,
    tags: ["Web", "Javascript", "HTML Canvas", "Algorythm"],
    source: 'https://github.com/Towhidkarim/aStarPathfinding',
    demo: 'https://a-star-pathfinding.netlify.app/' 
}]

export default projectsData