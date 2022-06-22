import TagCloud from 'TagCloud';
import { useEffect, useRef } from "react"

const texts = [
    'JavaScript', 'CSS', 'HTML', 'C', 'C++', 'React', 'Python', 'Java', 'git', 'django', 'Node.js', 'OpenCV', 'GCP', 'MySQL', 'jQuery',
];
const options = {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true
};

const Skill = () => {
    const tag = useRef();
    useEffect(
        () => {
            const container = tag.current;
            TagCloud(container, texts, options);
        }, [])

    return (
        <span ref={tag}></span>
    )
}

export default Skill