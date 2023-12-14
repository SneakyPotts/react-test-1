import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <NavLink
        className="logo"
        to='/'
      >
        <img
          src="/assets/logo.svg"
          alt="logo site"
          width="110"
          height="30"
        />
      </NavLink>
    </>
  )
}

export default Logo;