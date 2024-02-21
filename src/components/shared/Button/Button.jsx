import { styled } from '@mui/system';

const StyledButton = styled("button")({
    backgroundColor: "#dba39a",
    color: "#250d00",
    textDecoration: "none",
    border: "none",
    width: "9rem",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "600", // semi-bold
    fontSize: "15px",
    borderRadius: "7px",
    padding: "10px 10px",
    marginTop: "20px",
    "&:hover": {
        backgroundColor: "#F0DBDB",
        color: "#250D00",
    },
});

export default StyledButton;