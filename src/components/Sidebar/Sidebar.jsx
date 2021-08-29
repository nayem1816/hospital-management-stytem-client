import React from "react";
import { useTheme } from "@material-ui/core/styles";
import AccordingComponent from "./AccordingComponent/AccordingComponent";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Divider, Drawer, IconButton, List } from "@material-ui/core";
import "./Sidebar.css";
import userImage from "../../utilities/images/user.png";

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
                <div className="">
                    <h2 className="me-3">Hospital</h2>
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
            <div className="text-center my-4">
                <img
                    className="img-fluid image-style border  border-4 rounded-circle"
                    src={userImage}
                    alt={userImage}
                />
                <h5 className="mt-2">Admin</h5>
            </div>
            <List>
                <AccordingComponent />
            </List>
        </Drawer>
    );
};

export default Sidebar;
