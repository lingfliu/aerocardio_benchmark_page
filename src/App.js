import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import {createMuiTheme, withStyles, MuiThemeProvider} from '@material-ui/core/styles'

import Sign from './page/Sign'
import './App.css';


/*==================================================*/
const urlMapping = [
    {
        url:'/sign',
        cmp: Sign
    },
];

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#e57373',
            light: '#ffa4a2',
            dark: '#af4448'
        },
        secondary: {
            main:  '#79c9dd',
            light: '#acfcff',
            dark: '#4598ab'
        }
    }

});


const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

class App extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <Route path="/" render={() => (
                <Redirect to={urlMapping[0].url}/>
            )}/>

            {
                urlMapping.map(u => (
                    <Route path={u.url} component={u.cmp} key={u.url}/>
                ))
            }
        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
