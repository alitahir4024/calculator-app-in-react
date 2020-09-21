import React from "react";

export default class OperatorsNumSection extends React.Component {
  render() {
    return (
      <div className="operators-num-section">
        <button
          value="AC"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="clear-buttons"
        >
          AC
        </button>
        <button
          value="CE"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="clear-buttons"
        >
          CE
        </button>
        <button
          value="/"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="operators"
        >
          /
        </button>
        <button
          value="*"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="operators"
        >
          x
        </button>

        <button
          value="7"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          7
        </button>
        <button
          value="8"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          8
        </button>
        <button
          value="9"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          9
        </button>
        <button
          value="-"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="operators"
        >
          -
        </button>

        <button
          value="4"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          4
        </button>
        <button
          value="5"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          5
        </button>
        <button
          value="6"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          6
        </button>
        <button
          value="+"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="operators"
        >
          +
        </button>

        <button
          value="1"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          3
        </button>
        <button
          value="0"
          onClick={(e) => this.props.onClick(e.target.value)}
          className="numbers"
        >
          0
        </button>

        <button
          value="="
          onClick={(e) => this.props.onClick(e.target.value)}
          className="operators"
        >
          =
        </button>
      </div>
    );
  }
}
