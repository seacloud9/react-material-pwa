
import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/MoveToInbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import StarIcon from 'material-ui-icons/Star'
import SendIcon from 'material-ui-icons/Send'
import MailIcon from 'material-ui-icons/Mail'
import DeleteIcon from 'material-ui-icons/Delete'
import ReportIcon from 'material-ui-icons/Report'

export const navItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary='Site' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary='Favorites' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary='Contact' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary='Feed' />
    </ListItem>
  </div>
)
