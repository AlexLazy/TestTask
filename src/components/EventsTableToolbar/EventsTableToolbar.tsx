import React, { FC, ChangeEvent, Fragment } from 'react';

import { connect } from 'react-redux';
import { setIsEventDialogAddOpen } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

import EventsAddDialog from '../EventsAddDialog';

const useStyles = makeStyles({
  search: {
    marginLeft: 'auto'
  }
});
//@ts-ignore
const EventsTableToolbar: FC = ({ setIsEventDialogAddOpen }) => {
  const classes = useStyles();
  const handleChange = () => {};
  return (
    <Fragment>
      <Toolbar>
        <Tooltip title='Добавить событие'>
          <IconButton
            aria-label='добавить событие'
            onClick={() => setIsEventDialogAddOpen(true)}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Удалить выбранные события'>
          <IconButton aria-label='удалить выбранные события'>
            <RemoveIcon />
          </IconButton>
        </Tooltip>
        <TextField
          label='Поиск'
          className={classes.search}
          onChange={handleChange}
          margin='dense'
          variant='outlined'
        />
      </Toolbar>
      <EventsAddDialog />
    </Fragment>
  );
};

const mapDispatchToProps = { setIsEventDialogAddOpen };

export default connect(
  null,
  mapDispatchToProps
)(EventsTableToolbar);
