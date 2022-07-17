import './styles.css';


//definindo timpagem 
//Exportando typagem para os demais componentes
export type CardsProps = {
    name: string;
    time: string;
}
export function Card(props: CardsProps) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small> {props.time}</small>
        </div>
    )
}