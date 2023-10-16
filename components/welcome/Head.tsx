

//Mui
import { Container, Box, Typography } from "@mui/material";

// Refactorizar los estilos
// Styles
const home_Styles = {
    // Componente padre
    container: {
        'display': 'flex',
        'width': '100%',
        'flexDirection': { xs: 'column', sm: 'row' },
        'alignItems': { xs: 'center', sm: 'flex-end' },
        'padding': '0px',
    },
    // Componente Hijo 1
    head_title: {
        'display': 'flex',
        'width': '50vw',
        'alignItems': 'flex-end',
        'justifyContent': 'flex-end',
        'boxShadow': '4px 4px 0px #ff9551',
        'paddingRight': { xs: '20px', sm: '40px' },
        'paddingBottom': '5px',
        'paddingTop': { xs: '0px', sm: '30px' },
    },

    // Componente Hijo 2
    head_text: {
        'width': '50vw',
        'fontFamily': 'sans-serif',
        'fontSize': { xs: '2vw', sm: '1.4vw' },
        'display': 'flex',
        'boxShadow': '0px 4px 0px #ff9551',
        'paddingLeft': { xs: '10px', sm: '30px' },
        'paddingTop': { xs: '10px', sm: '0px' },
        'alignItems': 'flex-end',
    },

    //Texto del componente Hijo 2
    typography_h1: {
        'textAlign': 'end',
        'fontSize': { xs: '8vw', sm: '5vw' },
    }
}


const Head = () => {
    return (
        <Container sx={home_Styles.container} >

            <Box sx={home_Styles.head_title} >
                <Typography variant="h1" sx={home_Styles.typography_h1}>
                    Dinamic <br /> Curriculum <br /> Vitae
                </Typography>
            </Box>

            <Box sx={home_Styles.head_text}>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reiciendis laudantium
                    nobis recusandae illo aliquid expedita! Repellendus, in. Beatae laborum ipsam sit quis
                    vitae sed earum praesentium deleniti asperiores! Molestias?
                </p>
            </Box>

        </Container>
    )
}

export default Head;


