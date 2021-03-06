////renders the header style dropdown menu
import React from "react";

class HeaderStyleDropdown extends React.Component {
  onToggle = (event) => {
    let value = event.target.value;
    this.props.onToggle(value);
  };

  render() {
    return (
      <select value={this.props.active} onChange={this.onToggle}>
        <option value="">Header Levels</option>
        {this.props.headerOptions.map((heading, i) => {
          return (
            <option key={i} value={heading.style}>
              {heading.label}
            </option>
          );
        })}
      </select>
    );
  }
}

export default HeaderStyleDropdown;
