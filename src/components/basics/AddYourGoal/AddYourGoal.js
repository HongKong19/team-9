import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class AddYourGoal extends Component {
  constructor(props) {
    super(props);
    this.addGoal = this.addGoal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      loading: false,
      list_of_goals: [],
      section4dataArray: [],
      dialogopen: false,
      section4Heading:'Add your goals here',
    };
  }

  addGoal(){

  }

  handleOpen(){
    this.setState({
      dialogopen: true
    });
  }

  handleClose(){
    this.setState({
      dialogopen: false
    })
    let current_list = this.state.list_of_goals;
    current_list.push('Loose 5kgs in 30 days');
    this.setState({
      list_of_goals: current_list
    })
  }

  render() {

    return (

      <section className='section' id='smart-data'>
        <div className='section__container container'>
          <Dialog open={this.state.dialogopen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Enter</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your goal
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Enter
              </Button>
            </DialogActions>
          </Dialog>
          <div className='row'>
            <div className='col'>
              <div className='heading  text-center'>
                <h2>{this.state.section4Heading}</h2>
              </div>
              <Button onClick={this.handleOpen}>Add a goal</Button>
              <List >
                <ListItem component="div">
                  <ListItemText >
                      Speed Walking 30 minutes Everyday
                    <Checkbox/>
                  </ListItemText>


                  <ListItemText >
                    Take Stairs everyday
                    <Checkbox/>
                  </ListItemText>


                  <ListItemText >
                      Perform elbow Exercise
                    <Checkbox/>
                  </ListItemText>
                </ListItem >

              </List>
              {
               this.state.list_of_goals.map((goal)=> {
                 return (
                   <Link to = '/goal' style={{ textDecoration: 'none', color: '#1D1D1D' }}>
                    <div>
                      {goal}
                      <Checkbox/>
                    </div>
                   </Link>
                 )
               }
               )
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddYourGoal;
