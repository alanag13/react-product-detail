import React from "react"

require("./styles.css");

export default class QuatityInput extends React.PureComponent<any, any> {
    constructor(props: any){
        super(props);
        this.state = { quantity: 1};

        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }

    incrementQty(){
        this.setState((prevState: any) => ({quantity: prevState.quantity + 1}));
    }

    //dont allow decreasing the quantity below 1.
    decrementQty(){
        this.setState((prevState: any) => {
            if (prevState.quantity > 1){
                return {quantity: prevState.quantity - 1};
            }
            return prevState;
        });
    }
    
    render(){
        return (
            <div className="qty-ctrl space-between-flex">
                <div><span>quantity:</span></div>
                <div className="qty-btn-container">
                    <div className="qty-btn" onClick={this.decrementQty}>
                        <div>&ndash;</div>
                    </div>
                    <div className="qty-label">
                        <span><strong>{ this.state.quantity }</strong></span>
                    </div>
                    <div className="qty-btn" onClick={this.incrementQty}>
                        <div>+</div>
                    </div>
                </div>
            </div>
        );
    }
};
