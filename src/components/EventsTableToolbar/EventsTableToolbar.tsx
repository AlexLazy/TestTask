import React, { FC, Fragment } from 'react';

import { connect } from 'react-redux';
import {
  setIsEventsDialogAddOpen,
  setIsEventsDialogRemoveOpen,
  searchEvents
} from '../../actions';
import { AppState } from '../..';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

import EventsAddDialog from '../EventsAddDialog';
import EventsRemoveDialog from '../EventsRemoveDialog';

const useStyles = makeStyles({
  search: {
    marginLeft: 'auto'
  }
});

const EventsTableToolbar: FC<LinkStateProps & LinkDispanchProps> = ({
  eventsToDelIds,
  setIsEventsDialogAddOpen,
  setIsEventsDialogRemoveOpen,
  searchEvents
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Toolbar>
        <Tooltip title='Добавить событие'>
          <IconButton
            aria-label='добавить событие'
            onClick={() => setIsEventsDialogAddOpen(true)}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Удалить выбранные события'>
          <div>
            <IconButton
              aria-label='удалить выбранные события'
              onClick={() => setIsEventsDialogRemoveOpen(true)}
              disabled={!eventsToDelIds.length}
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Tooltip>
        <TextField
          label='Поиск'
          className={classes.search}
          onChange={e => searchEvents(e.target.value)}
          margin='dense'
          variant='outlined'
        />
      </Toolbar>
      <EventsAddDialog />
      <EventsRemoveDialog />
    </Fragment>
  );
};

interface LinkStateProps {
  eventsToDelIds: (string | undefined)[];
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  eventsToDelIds: state.eventsToDelIds
});

interface LinkDispanchProps {
  setIsEventsDialogAddOpen(isOpen: boolean): void;
  setIsEventsDialogRemoveOpen(isOpen: boolean): void;
  searchEvents(search: string): void;
}

const mapDispatchToProps = {
  setIsEventsDialogAddOpen,
  setIsEventsDialogRemoveOpen,
  searchEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsTableToolbar);
