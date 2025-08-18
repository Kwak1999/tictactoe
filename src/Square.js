import React from "react";
import "./Square.css";

// default로 해두면 메인으로 가져옴
export default class Square extends React.Component{
    // // 상태 저장은 state 이용
    // // Board로 옮김
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     }
    // }

    render() {
        return(
            <button className="square"
                    onClick={() => {this.props.onClick()}}>
                {/*props*/}
                {this.props.value}
            </button>
        )
    }
}