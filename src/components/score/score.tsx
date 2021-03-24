import { useEffect, useState } from "react";

interface ScoreProps {
    score:number,
}
export default function Score(props: ScoreProps) {
    const [currentScore, setCurrentScore] = useState(props.score - 100);
    useEffect(() => {
        let counter=0;
        const interval = setInterval(() => {
            setCurrentScore(Math.abs(Math.floor(Math.random() * ((props.score + 50)-((props.score - 50)) + (props.score - 50)))));
            counter += 1;
            if(counter >= 10) {
                clearInterval(interval);
                setCurrentScore(props.score);
            }
        }, 50)
    }, [props.score])

    return(
        <span>{currentScore}</span>
    )
}