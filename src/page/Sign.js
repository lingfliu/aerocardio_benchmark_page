import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

function mapStateToProps(state) {
    return {
    }
};

function mapDispatchToProps(dispatch) {
    return {
    }
};

class Sign extends  Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Grid container spacing={8}>

            </Grid>
        )
    }
}

Sign.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(Sign));

