import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import {navItems} from '../data/nav'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
}

class MaterialNavBar extends React.Component {
  // { classes } = props
  constructor (props) {
    super(props)
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render () {
    const navList = (
      <div className={this.props.classes.list}>
        <List>{navItems}</List>
      </div>
    )
    return (
      <div className={this.props.classes.root}>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
            >
            {navList}
          </div>
        </Drawer>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton className={this.props.classes.menuButton} color='inherit' aria-label='Menu' onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={this.props.classes.flex}>
              React PWA
            </Typography>
            <Button color='inherit'>site</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MaterialNavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MaterialNavBar)
