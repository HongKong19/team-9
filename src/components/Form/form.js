import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Radio from '../Radio/radio'
import Checkbox from '../Checkbox/checkbox'
import OutlinedButtons from '../Button/button'
import { InputBase } from '@material-ui/core';
// import Slider from '../Slider/slider'

const currencies = [
  {
    value: 'zero',
    label: '0',
  },
  {
    value: 'one',
    label: '1',
  },
  {
    value: 'two',
    label: '2',
  },
  {
    value: 'three',
    label: '3',
  },
  {
    value: 'four',
    label: '4',
  },
];
const choice = [
  {
    value: '1',
    label: 'Male',
  },
  {
    value: '0',
    label: 'Female',
  },

];
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  dense: {
    marginTop: theme.spacing(1),
  },
  menu: {
    width: 2000,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'John',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
    <div style={{
      textAlign: "center",
      padding: "50px",
  }}>
      <p style={{ color: "black", fontSize: "48px", fontFamily: "Verdana" }}>Please Fill in Your Personal Info</p>
  </div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        fullWidth
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="Last Name"
        defaultValue="Mall"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Age"
        fullWidth
        defaultValue="35"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <br />
      <TextField
        error
        id="outlined-error"
        label="BMI"
        fullWidth
        defaultValue="22.3"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <div className="style1" style={{ display: "flex", flexDirection: "column" }}>
        <Radio />
        <div className="style1" style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="outlined-select-currency"
            select
            label="No. of Children"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Number of Children"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Gender"
            className={classes.textField}
            value={values.choice}
            onChange={handleChange('choice')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please tell your gender"
            margin="normal"
            variant="outlined"
          >
            {choice.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Checkbox />
        {/* <Slider/> */}
        <Link to="/homePage" style={{ color: '#FFF' }}>
          <button style = {{
            backgroundColor: "white",
            border: "2px solid #008CBA",
            color: "blue",
            padding: "8px 17px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "8px 42px",
            cursor:" pointer"
          }}>Submit</button>
        </Link>
      </div>
    </form>
    </div>
  );
}