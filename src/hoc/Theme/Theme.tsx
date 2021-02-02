import React, { FC } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { css, SerializedStyles } from "@emotion/react";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customMixins: {
      flexCentered: SerializedStyles;
    };
  }

  interface ThemeOptions extends Theme {}
}
export const Theme: FC = (props) => {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          type: "light",
          text: {
            primary: "#ffffff",
            secondary: "#acacac",
          },
          primary: {
            light: "#8e99f3",
            main: "#5c6bc0",
            dark: "#26418f",
          },
          secondary: {
            light: "#62727b",
            main: "#37474f",
            dark: "#102027",
          },
        },
        props: {
          MuiAppBar: {
            variant: "elevation",
            elevation: 5,
          },
          MuiTypography: {
            gutterBottom: true,
            color: "textPrimary",
          },
        },
        customMixins: {
          flexCentered: css`
            display: flex;
            justify-content: center;
            align-items: center;
          `,
        },
      })}
    >
      {props.children}
    </ThemeProvider>
  );
};
