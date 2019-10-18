import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Health Risk Assessment Form
      </Typography>
      <Container component="main" maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="illness"
              name="illness"
              label="Existing illness (if any)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="current_medication"
              name="current_medication"
              label="Current medication (if any)"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="smoking"
              name="smoking"
              label="Smoking"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="alcohol"
              name="alcohol"
              label="Alcohol"
              fullWidth
              autoComplete="lname"
            />
          </Grid>



          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Pain:
            </Typography>
            <FormControlLabel
              control={<Checkbox color="painno" name="painno" value="yes" />}
              label="Yes"
            />
            <FormControlLabel
              control={<Checkbox color="painyes" name="painyes" value="no" />}
              label="No"
            />
            <TextField
              required
              id="painarea"
              name="painarea"
              label="Area: "
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Suggestion/Notes:
            </Typography>
            <TextField
              id="lastblood"
              name="lastblood"
              label="When is your last time measuring blood sugar level?"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastblood2"
              name="lastblood2"
              label="When is your last time measuring blood pressure?"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="bloodtest"
              name="bloodtest"
              label="Did you conduct any blood test within a year?"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Future follow-up:
            </Typography>
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="lifestyle" />}
              label="daily lifestyle"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="health" />}
              label="health condition"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="eating" />}
              label="eating"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="medication" />}
              label="medication"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="exercising" />}
              label="exercising"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="emotion" />}
              label="emotion"
            />
            <FormControlLabel
              control={<Checkbox color="ff" name="ff" value="emotion" />}
              label="follow-up"
            />

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

          </Grid>


        </Grid>
      </Container>
    </React.Fragment>
  );
}