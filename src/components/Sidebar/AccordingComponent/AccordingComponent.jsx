import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./AccordingComponent.style.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import menuItemsList from "../SidebarMenuList";

const AccordingComponent = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel);
        setExpanded(isExpanded ? panel : false);
    };

    let count1 = 1;
    let count2 = 1;

    return (
        <div className={classes.root}>
            {menuItemsList?.map((menuList) => (
                <Accordion
                    style={{ margin: "0" }}
                    expanded={expanded === "panel" + count1++}
                    onChange={handleChange("panel" + count2++)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{menuList?.mainMenu}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: "block" }}>
                        {menuList?.subMenu?.map((sub) => (
                            <p>
                                <Link to={sub?.subMenuLink}>
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
