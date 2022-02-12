import React from "react";

export default class Cart extends React.Component {
    getOneGood(articul) {
        const allGoods = this.props.goodsData;

        for (const good of allGoods) {
            if (articul === good['articul']) return good;
        }
    }

    showGoodsInCart = () => {
        const changeCartState = this.props.changeCartState;
        const cartState = this.props.cartState;
        const goodsToShow = [];

        for (const goodArticul in cartState) {
            const currentGood = this.getOneGood(goodArticul);

            goodsToShow.push(
                <tr key={goodArticul}>
                    <td>{currentGood['title']}</td>
                    <td>{cartState[goodArticul]}</td>
                    <td>{currentGood['cost'] * cartState[goodArticul]}</td>
                    <td>
                        <button
                            className="remove-from-cart"
                            data-key={goodArticul}
                            onClick={changeCartState}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            );
        }

        return goodsToShow;
    }

    render() {
        return(
            <div className="cart-field">
                <h2>Goods in Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Total Cost</th>
                        </tr>
                        {this.showGoodsInCart()}
                    </tbody>
                </table>
            </div>
        );
    }
}
