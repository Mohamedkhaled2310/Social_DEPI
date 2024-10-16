// src/scenes/Loading.js
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";

// مكون Typography مع تأثير الأنيميشن الملون
const AnimatedTypography = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontSize: "2rem",
  animation: "rainbow 2s linear infinite",
  "@keyframes rainbow": {
    "0%": { color: "red" },
    "14%": { color: "orange" },
    "28%": { color: "yellow" },
    "42%": { color: "green" },
    "57%": { color: "blue" },
    "71%": { color: "indigo" },
    "85%": { color: "violet" },
    "100%": { color: "red" },
  },
}));

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" // ملء الشاشة بالكامل
      bgcolor="#000" // لون خلفية هادئ
    >
      <AnimatedTypography variant="h6" marginTop={2}>
        TRIBEHUB
      </AnimatedTypography>
      <Box
        sx={{
          width: "100px",
          height: "5px",
          backgroundColor: "#2221",
          borderRadius: "5px",
          position: "relative",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "orange",
            position: "absolute",
            top: 0,
            left: 0,
            animation: "loading 1.5s infinite",
          }}
        />
      </Box>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Loading;
