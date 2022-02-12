import React from "react";

export default class Goods extends React.Component {
    render() {
        const data = this.props.goodsData;
        const changeCartState = this.props.changeCartState;

        return(
            <div className="goods-field" onClick={changeCartState}>
                <h2>All Goods</h2>
                {data.map( (goodItem, index) => {
                    return(
                        <div className="single-good-block" key={index}>
                            <img src={goodItem.image} alt="" />
                            <p>{goodItem.title}</p>
                            <p>{goodItem.cost}</p>
                            <button
                                className="add-to-cart"
                                data-key={goodItem.articul}
                            >
                                Add to cart
                            </button>
                        </div>
                    );
                })}       
            </div>
        );
    }
}
