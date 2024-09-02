import './index.scss'

export default function Card(props) {
    return (
        <div className='comp-card' style={{backgroundColor: props.tema}}>
            <h1 style={{backgroundColor: props.tituloCor}}>{props.titulo}</h1>

            <div className='info'>
                <h2>Assuntos</h2>
                <p>{props.topicos}</p>
            </div>

            <div className='botao'>{props.data}</div>

            {props.entrega != '' && 
                <div className='botao2'>{props.entrega}</div>
            }
        </div>
    )
}