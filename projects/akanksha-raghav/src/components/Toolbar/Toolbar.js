import React, { Component } from "react";
import DrawerToogleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";


export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 0.1;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    return (
      <div>
        <header
          className={
            this.state.scrolled ? "toolbar toolbar-scrolled" : "toolbar"
          }
        >
          <nav className="toolbar__navigation" style={{ zIndex: "1000px" }}>
            <div className="toolbar__logo">
              {/* <img src="" width="60%" alt="SCodex Logo"/> */}
              <span className="is-size-4 has-text-weight-medium">
                {" "}
                Student Mantras{" "}
              </span>
            </div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
              <ul>
                <li>
                  <a href="/#home"> Home</a>
                </li>
                <li>
                  <a href="/#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="toolbar__toggle-button">
              <DrawerToogleButton click={this.props.drawerClickHandle} />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
