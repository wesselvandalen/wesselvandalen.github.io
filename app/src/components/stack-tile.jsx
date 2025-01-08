import './stack-tile.css';

export default function StackTile(props) {
    return (
        <div className="stack-tile">
            <div className="stack-pic-wrapper">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="stack-info">
                <h6>{props.name}</h6>
                <p>{props.type}</p>
            </div>
        </div>
    )
}