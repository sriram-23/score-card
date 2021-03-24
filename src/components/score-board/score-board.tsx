import { useEffect, useState } from "react";
import constant from "../../constant"
import ScoreCard from "../score-card/score-card";
import './score-board.scss';

export default function ScoreBoard() {
    const data:any = constant.data;
    const [finalData, updateFinaData]= useState(data);
    const updateScore = function() {
        const renderData:any = []
        setTimeout(async () => {
            data.map((el:any, i:number) => {
                let random = Math.floor(Math.random() * 45000000 +5000000);
                el.score = random;
                renderData[i] = el;
            })
            const sortedData = sort(renderData);
            updateFinaData(sortedData);
        }, 2000);
    }
    const sort = function(data:any) {
        const sorted = data.sort((a:any, b:any) => (a.score>b.score?-1:1));
        return sorted;
    }
    useEffect(() => updateScore(), [finalData]);
    return (
        <div className="table-set">
            {finalData.map((athlete:any, i:number) => <div className="score-card" key={i}><ScoreCard key={i} name={athlete.displayName} score={athlete.score} rank={i+1} avatar={athlete.picture} uid={athlete.userID}/></div>)}
        </div>
    )
}