import React, { useState } from 'react';
import firebase from '../firebase';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Input from '../components/Input';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./images/logo.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  login: {
    backgroundColor: 'black',

  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  
}));

export default function Login() {
  const classes = useStyles();
//  const [email, setEmail] = useState('')
//  const [password, setPassword] = useState('')

  return (

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} className={classes.login}>
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5" className= "welcome">
            <h1><img src="./images/fri.png"/> <br></br><img src="./images/burguer.png"/></h1> 
            <h2 className="sub-title">BEM VINDO(A)!</h2>       
          </Typography>
          <form className={classes.form} noValidate>
            <Input placeholder= "E-mail" type= "email"/>
            <Input placeholder= "Senha" type= "password"/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              className= "btn"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className= "link-login">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" className= "link-login">
                  {"Não tem conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  
    }
 