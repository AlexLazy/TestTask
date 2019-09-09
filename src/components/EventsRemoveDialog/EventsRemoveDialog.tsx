import React, { FC } from 'react';

import { connect } from 'react-redux';
import { AppState } from '../../index';
import {
  setIsEventsDialogRemoveOpen,
  removeSelectedEvents
} from '../../actions';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const EventsRemoveDialog: FC<LinkStateProps & LinkDispanchProps> = ({
  isEventsDialogRemoveOpen,
  setIsEventsDialogRemoveOpen,
  removeSelectedEvents
}) => {
  const handleClose = () => setIsEventsDialogRemoveOpen(false);
  const handleRemove = () => {
    removeSelectedEvents();
    setIsEventsDialogRemoveOpen(false);
  };

  return (
    <Dialog
      open={isEventsDialogRemoveOpen}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>Удалить выбранные мероприятия?</DialogTitle>
      <DialogActions>
        <Button color='primary' onClick={handleClose}>
          Нет
        </Button>
        <Button color='primary' onClick={handleRemove}>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface LinkStateProps {
  isEventsDialogRemoveOpen: boolean;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  isEventsDialogRemoveOpen: state.isEventsDialogRemoveOpen
});

interface LinkDispanchProps {
  setIsEventsDialogRemoveOpen(isOpen: boolean): void;
  removeSelectedEvents(): void;
}

const mapDispatchToProps = {
  setIsEventsDialogRemoveOpen,
  removeSelectedEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsRemoveDialog);
