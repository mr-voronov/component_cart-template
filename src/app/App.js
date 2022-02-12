import React from "react";

import Goods from "./goods/Goods";
import Cart from "./cart/Cart";
import "./App.css";

import goodsData from "../goodsData/goodsData.json";

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            "cart": {},
            count: 0,
        }
    }

    changeCartState = (event) => {
        let countState = this.state.count;
        let cartState = this.state.cart;
        let goodArticul = event.target.dataset.key;

        if (event.target.classList.contains('add-to-cart')) {
            this.addToCart(countState, cartState, goodArticul);
        } else {
            this.removeFromCart(countState, cartState, goodArticul);
        }

    }

    addToCart = (countState, cartState, goodArticul) => {    
        cartState[goodArticul]
            ? cartState[goodArticul]++
            : cartState[goodArticul] = 1;

        this.setState({"cart": cartState});

        countState++;
        this.setState({"count": countState});
    }

    removeFromCart = (countState, cartState, goodArticul) => {
        cartState[goodArticul] > 1
            ? cartState[goodArticul]--
            : delete cartState[goodArticul];

        this.setState({"cart": cartState});

        countState--;
        this.setState({"count": countState});
    }

    
    render() {
        let showCart = this.state.count !== 0
            ? <Cart
                goodsData={goodsData}
                cartState={this.state.cart}
                changeCartState={this.changeCartState}
                />
            : 'Empty';

        return(
            <div className="container">
                <Goods
                    goodsData={goodsData}
                    changeCartState={this.changeCartState}
                />
                {showCart}
            </div>
        );
    }
}
