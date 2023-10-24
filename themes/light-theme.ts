import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#B9FFF8',
        },
        primary: {
            main: '#483c3c',
        },
        secondary: {
            main: '#fac4a1',
        },
        error: {
            main: red[500],
        }
    },
    // Para estandarizar como se ven los componentes de material-ui(Se especifica el nombre del componente con el prefijo Mui)
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                main {
                    display: flex;
                    flex-direction: column;
                    
                }
            `,
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    marginLeft: '0px',
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    background: '#FF9551',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'PT Sans, sans-serif',
                    textShadow: '2px 3px 5px #000000',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: 'PT Sans, sans-serif',
                    padding: '0px 10px',
                    borderBottom: 'none',

                },
            },
        },
    }
})