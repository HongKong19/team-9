import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

class GoalPage extends Component {
  constructor(props) {
    super(props);

  }


  render(){
    return(
      <div style = {{padding: '30px'}}>
        <h1>LOOSE 5 KGS in 30 DAYS</h1>
        <List>
          {['Run everyday', 'Drink Green Tea', 'Reduce Sugar Intake', 'Eat Green Vegetables'].map(value => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem key={value} role={undefined} dense button>
                <ListItemIcon>
                  <Checkbox
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    )

  }
}

export default GoalPage