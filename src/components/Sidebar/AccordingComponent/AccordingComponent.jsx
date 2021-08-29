import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@material-ui/core";
import { useStyles } from "./AccordingComponent.style.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import menuItemsList from "../SidebarMenuList";
import "./AccordingComponent.css";

const AccordingComponent = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let count1 = 1;
    let count2 = 1;

    return (
        <div style={{ margin: "0" }} className={classes.root}>
            {menuItemsList?.map((menuList, i) => (
                <Accordion
                    key={i}
                    style={{ margin: "0" }}
                    expanded={expanded === "panel" + count1++}
                    onChange={handleChange("panel" + count2++)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{menuList?.mainMenu}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ display: "block", backgroundColor: "white" }}
                    >
                        {menuList?.subMenu?.map((sub, j) => (
                            <p key={j} className="menu-items">
                                <Link
                                    to={sub?.subMenuLink}
                                    className="menu-item-link"
                                >
                                    {sub?.subMenuName}
                                </Link>
                            </p>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default AccordingComponent;
