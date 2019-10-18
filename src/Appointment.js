import React from "react";
import {
  Container,
  Typography,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
// import MaterialUIPickers from "./demo"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "50%"
  },
  input: {
    display: "none"
  }
}));

export default function Appointment() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        color="textPrimary"
        gutterBottom
        align="center"
        style={{ marginTop: 10 }}
      >
        Appointment Booking
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Date</InputLabel>
        <Select
          native
          value={24}
          inputProps={{
            name: "Date",
            id: "date-native-simple"
          }}
        >
          <option value="" />
          <option value={10}>24-08-2019</option>
          <option value={20}>25-08-2019</option>
          <option value={30}>26-08-2019</option>
        </Select>
      </FormControl>
      <List dense className={classes.root}>
        {["12:30", "2:00", "5:00"].map(value => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemText id={labelId} primary={`${value}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" color="primary" className={classes.button}>
        Book
      </Button>
    </Container>
  );
}
