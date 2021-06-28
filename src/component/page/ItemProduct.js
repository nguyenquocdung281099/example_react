export default function ItemProduct(props) {
    let data=[];
    for(let i =1; i<=5;i++){
        if(i <= props.item.rating){
            data[data.length]=<i className="fas fa-star" key ={i}></i>
        }
        else{
            data[data.length]=<i className="far fa-star" key ={i}></i>
        }
    }
    return(
        <div className="card">
            <img className="card-img-top" src={props.item.image} alt="Card cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}e</h5>
                <div className='d-flex justify-content-between'>
                    
                    <div className='star'>
                        {
                            data.map(item=>item)
                        }
                    </div>
                    <p className="card-text">{props.item.price}$</p>
                </div>
            </div>
        </div>
    )
}