import { Box, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField, capitalize } from '@mui/material'
import React, { ChangeEvent, useContext, useMemo, useState } from 'react'

const CurriculumForm = () => {

    return (
        <Box>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada:`}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada"
                                autoFocus
                                multiline
                                label="Nueva entrada"

                            />

                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                            </FormControl>

                        </CardContent>

                        <CardActions>
                            <Button
                                variant="contained"
                                fullWidth
                            >
                                Save
                            </Button>
                        </CardActions>

                    </Card>

                </Grid>

            </Grid>


            <IconButton sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'error.dark'
            }}>
                Delete
            </IconButton>




        </Box>
    )
}

export default CurriculumForm;