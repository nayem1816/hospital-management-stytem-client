import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

const Topbar = ({ classes, handleDrawerOpen, open }) => {
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Persistent drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
