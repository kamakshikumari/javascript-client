/* eslint-disable no-console */
import React from 'react';
import { Button } from '@material-ui/core';
import { AddDialog } from './components/AddDialog.';
import { Navbar } from '../components';

class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: false });
    return open;
  }

  handleSubmit = (data) => {
    this.setState({
      open: false,
    }, () => {
      console.log(data);
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Navbar />
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          <b>ADD TRAINEE</b>
        </Button>
        <AddDialog
          open={open}
          onClose={this.handleClose}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default Trainee;
