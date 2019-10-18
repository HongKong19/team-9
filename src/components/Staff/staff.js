import React from "react";
import {
  Container,
  Card,
  Typography,
  Box,
  Grid,
  CardContent,
  CardActions,
  Button,
  LinearProgress
} from "@material-ui/core";
import { makeStyles,withStyles,lighten } from "@material-ui/core/styles";
const patientData = [
  {
    name: "Maxwell Johnson",
    age: 55,
    category: "Diabetic",
    progress: 78,
    nextapp: "12/02/2020"
  },
  {
    name: "Mary Liu",
    age: 46,
    category: "Obese, Diabetic",
    progress: 30,
    nextapp: null
  },
  {
    name: "Robert Daze",
    age: 70,
    category: "Underweight",
    progress: 10,
    nextapp: "01/12/2019"
  }
];

const useStyles = makeStyles({
  card: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten("#000000", 0.9)
    },
    bar: {
      borderRadius: 20,
      backgroundColor: "#007BFF"
    }
  })(LinearProgress);


export default function Staff() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box borderTop={10} style={{ color: "#FFFFFF" }}>
        <Typography
          align="left"
          color="secondary"
          gutterBottom
          variant="h4"
          style={{ color: "#007BFF" }}
        >
          Patient Progress:
        </Typography>
        <Grid container spacing={2}>
          {patientData.map(patient => {
            return (
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      Name: {patient.name}
                    </Typography>
                    <Typography variant="h6">Age: {patient.age}</Typography>
                    <Typography className={classes.pos} variant="h6">
                      Category: {patient.category}
                    </Typography>
                    <Typography className={classes.pos} variant="h6">
                      Next Appintment: {patient.nextapp || "-"}
                    </Typography>
                    <Typography className={classes.pos} variant="h6">
                      Goal Progress:
                      <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={patient.progress}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
