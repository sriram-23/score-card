import Score from '../score/score';
import './score-card.scss';

interface ScoreDetails {
    rank: number,
    avatar: string,
    name: string,
    score: number,
    uid: string,
}
const rankClass = ['red','orange','yellow','blue']

function ScoreCard(props: ScoreDetails) {
    return(
        <div key={props.name} className={`${props.rank % 2 === 0 ? 'score-card-dark' : 'score-card-light'} ${props.rank === 1? 'first-card' : props.rank === 10 ? 'last-card':''}`}>
            <div className="athlete-details">
                <div className={props.rank>3?rankClass[3]:rankClass[props.rank-1]}>{props.rank}</div>
                <div className="avatar">
                    <img src={`${props.avatar}?u=${props.uid}`} alt="athlete profile"/>
                </div>
                <div className="name">{props.name}</div>
            </div>
            <div className="score"><Score score={props.score}></Score> pt</div>
        </div>       
    )
}

export default ScoreCard;