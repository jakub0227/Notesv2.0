/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC, useState } from "react";
import {
  AppBar,
  Hidden,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { NavigationItems } from "./NavigationItems/NavigationItems";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const Navigation: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      margin-right: ${theme.spacing(4)} px;
      background: linear-gradient(135deg, #e0a631 15%, #d6cb83 80%);
      display: flex;
    `,
    toolBar: css`
      ${theme.customMixins.flexCentered};
    `,
    title: css`
      flex-grow: 1;
    `,
    menuButton: css`
      margin-right: ${theme.spacing(1)}px;
      color: #000a;
    `,
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar css={styles.root} position="static" color="primary">
      <Toolbar css={styles.toolBar}>
        <Hidden smUp>
          <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
          <IconButton
            css={styles.menuButton}
            onClick={() => setDrawerOpen(true)}
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>
        <Typography css={styles.title} variant="h5">
          Your Personal: Notes v2.0 Redux
        </Typography>
        <Hidden xsDown>
          <NavigationItems />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
