import React from "react"

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

    decrementQty(){
        this.setState((prevState: any) => ({quantity: prevState.quantity - 1}));
    }
    
    render(){
        return (
            <div>
                <div><span>quantity:</span></div>
                <div>
                    <div onClick={this.decrementQty}>-
                    </div>
                    <div>
                        <span><strong>{ this.state.quantity }</strong></span>
                    </div>
                    <div onClick={this.incrementQty}>+
                    </div>
                </div>
            </div>
        );
    }
};
