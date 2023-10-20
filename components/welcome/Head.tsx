

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
        'flexDirection': 'column',
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
        'width': { xs: '80vw', sm: '50vw' },
        'fontFamily': 'sans-serif',
        'fontSize': { xs: '4vw', sm: '1.4vw' },
        'display': 'flex',
        'boxShadow': '0px 64px 300px #ff9551',
        'alignItems': 'flex-end',
        'padding': { xs: '2rem', sm: '30px' },
    },

    //Texto del componente Hijo 2
    typography_h1: {
        'textAlign': 'end',
        'fontSize': { xs: '13vw', sm: '5vw' },
        'color': "#FF9551"
    }
}


const Head = () => {
    return (
        <Container sx={home_Styles.container} >

            <Box sx={home_Styles.head_title} >
                <Typography variant="h3" >Dinamic</Typography>
                <Typography variant="h1" sx={home_Styles.typography_h1}>Curriculum</Typography>
                <Typography variant="h3" >Vitae</Typography>
            </Box>

            <Box sx={home_Styles.head_text}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reiciendis laudantium
                    nobis recusandae illo aliquid expedita! Repellendus, in. Beatae laborum ipsam sit quis
                    vitae sed earum praesentium deleniti asperiores! Molestias?
                </p>
            </Box>

        </Container>
    )
}

export default Head;


