import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  rootBox: {

    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)', 
    marginTop: "20px",

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    }
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      color: '#55acee'
    },
  },
  footerName: {
    marginRight: "10px",
  },
  footerIcon: {
    marginRight: "20px",
    color: "grey",
    '&:hover': {
      color: '#55acee'
    },
  },

   
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerImg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerText: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
    textDecoration: "none",
    color:"grey",
    '&:hover': {
      color: '#55acee'
    },
  },
}));