import { styled } from "@mui/material/styles";
import 'font-awesome/css/font-awesome.min.css';

const AnimatedButton = styled("button")(({ theme }) => ({
    backgroundColor: "#dba39a",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    textTransform: "capitalize",
    fontFamily: "'Montserrat', sans-serif",
    overflow: "hidden",
    transition: "all 0.2s linear 0s",
    color: "#250d00",
    textDecoration: "none",
    padding: "10px 10px",
    border: "none",
    width: "10rem",
    borderRadius: "7px",
    fontWeight: "600", // semi-bold
    fontSize: "15px",
    '&:before': {
        content: "'\\f054'",
        fontFamily: "FontAwesome",
        fontSize: "15px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        top: 0,
        opacity: 0,
        height: "100%",
        width: "40px",
        transition: "all 0.2s linear 0s",
    },
    '&:hover': {
        textIndent: "-20px",
        backgroundColor: "#e5c5c5",
        // color: "white",
        '&:before': {
            opacity: 1,
            textIndent: "0px",
        },
    },
}));

export default AnimatedButton;

// import React from 'react';
// import { styled } from "@mui/material/styles";
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const StyledButton = styled(Button)(({ theme }) => ({
//     backgroundColor: "#dba39a",
//     color: "#250d00",
//     textTransform: "capitalize",
//     fontFamily: "'Montserrat', sans-serif",
//     transition: "all 0.2s linear 0s",
//     padding: "10px 10px",
//     width: "10rem",
//     borderRadius: "7px",
//     fontWeight: "600", // semi-bold
//     fontSize: "15px",
//     position: "relative",
//     overflow: "hidden",
//     '&:hover': {
//         backgroundColor: "#e5c5c5",
//         textIndent: '-30px',
//     },
//     '& .Icon': {
//         position: "absolute",
//         right: 0,
//         top: 0,
//         opacity: 0,
//         // height: "100%",
//         // width: "40px",
//         transition: "all 0.2s linear 0s",
//     },
//     '&:hover .Icon': {
//         opacity: 1,
//         transform: 'translateX(-20px)'
//     },
// }));

// const AnimatedButton = () => {
//     return (
//         <StyledButton>
//             Learn More
//                 <ArrowForwardIosIcon className="Icon" fontSize="small"/>
//         </StyledButton>
//     );
// };

// export default AnimatedButton;
