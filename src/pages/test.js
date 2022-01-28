import * as React from 'react';
import {Typography, Slider,Paper} from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'

import {Container, Box} from '@mui/material'

const useStyles = makeStyles({
      rootBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 'auto',
      },
      grid:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
}, { name: "Mui" });

const  Variants = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const classes = useStyles();
  return (
      <>
            <Container
             // className={classes.root}
              disableGutters={true}
              maxWidth={false}
            >
                <Box 
                className={classes.grid}
                >
                    
                        <Paper variant="outlined" >
                            <Box m={2}>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography
                                    component="span"
                                    sx ={{flex: 0.45}}
                                    >
                                    Span text
                                    </Typography>
                                    <Slider my={2} sx={{flex:1}} aria-label="Volum" value={value} onChange={handleChange} valueLabelDisplay="auto"/>
                                </Box>
                            </Box>
                        </Paper>
                <Box 
                className={classes.rootBox}
                >
                    <Paper variant="outlined" >
                        <Box m={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography
                                component="span"
                                sx ={{flex: 0.45}}
                                >
                                Span text
                                </Typography>
                                <Slider my={2} sx={{flex:1}} aria-label="Volum" value={value} onChange={handleChange} valueLabelDisplay="auto"/>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
                </Box>
            </Container>
      </>
    
  )
};

export default Variants;