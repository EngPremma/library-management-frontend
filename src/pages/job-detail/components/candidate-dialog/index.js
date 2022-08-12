import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const CandidateDialog = ({ data, open, onClose, handleShortListCandidate }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
        <DialogTitle>Candidate Detail</DialogTitle>
        <DialogContent>
          <DialogContentText>{data?.name}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            close
          </Button>
          <Button onClick={handleShortListCandidate} disableElevation color='primary' variant='contained'>
            short list
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CandidateDialog;
