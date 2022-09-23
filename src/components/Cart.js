import '../styles/Cart.css'

const Cart = ({data}) =>  {
    return (
        <div className="cart">
            <h1>{data.name.english}</h1>
            {<ul>
                {Object.keys(data.base).map((value) => {
                    return (
                        <li key={`${'pokemon' + data.id + '-' + value}`}>{value} : {data.base[value]}</li>
                    )
                })}
            </ul>}
        </div>
    );
};

export default Cart;