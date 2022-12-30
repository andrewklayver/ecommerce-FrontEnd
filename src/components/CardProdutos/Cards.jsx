import "./Cards.css"

function Cards() {
    return (
        <>
        <div className="card">

            <div className="imgBox">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fpt%2Fpng-wxjhz&psig=AOvVaw1utavjkta9WwaTZ72LOcap&ust=1672516832921000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjTn_CQovwCFQAAAAAdAAAAABAE" alt="mouse corsair" className="mouse" />
            </div>

            <div className="contentBox">
                <h3>Mouse Corsair M65</h3>
                <h2 className="price"> R$ 123.<small>98</small></h2>
                <a href="#" className="buy">Comprar</a>
            </div>
        </div>  

     </>

    )
}

export default Cards;




