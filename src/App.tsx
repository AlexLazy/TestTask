import React, { FC, Fragment } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Events from './components/Events';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    container: {
      marginTop: theme.spacing(4)
    }
  })
);

const App: FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar className={classes.appBar} position='static'>
        <Typography variant='h4' align='center'>
          Мероприятия
        </Typography>
      </AppBar>
      <Container className={classes.container}>
        <Paper>
          <Events />
        </Paper>
      </Container>
    </Fragment>
  );
};

export default App;
