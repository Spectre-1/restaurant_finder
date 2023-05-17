import { Fragment } from 'react'

// import icon from '../../assets/icon.svg'
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
      <header className={classes.header}>
            <h1> Random Restaurant Finder </h1>
        </header>
        {/* <div>
            <img src={icon} alt="icon" />
        </div> */}
    </Fragment>
}

export default Header