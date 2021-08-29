import React from "react";
import { useTheme } from "@material-ui/core/styles";
import AccordingComponent from "./AccordingComponent/AccordingComponent";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import "./Sidebar.css";

const Sidebar = ({ classes, open, handleDrawerClose }) => {
    const theme = useTheme();
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <div style={{ marginRight: "30px" }} className="">
                    <h1>Hospital</h1>
                </div>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <MenuOpenIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>
                <AccordingComponent />
            </List>
        </Drawer>
    );
};

export default Sidebar;
