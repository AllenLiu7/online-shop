import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { signOutStart } from "../../redux/user/user.action";
import { selectHiddenStatus } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.seletors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ currentUser, hidden, toggleCartHidden, signOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/sign">SIGN IN</Link>
      )}
      <CartIcon onClick={toggleCartHidden} />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHiddenStatus(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
