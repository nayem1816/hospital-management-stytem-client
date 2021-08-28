import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import AddDoctor from "./pages/Doctor/AddDoctor/AddDoctor";
import { CssBaseline } from "@material-ui/core";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import clsx from "clsx";
import { useState } from "react";
import { useStyles } from "./basic-style/App.style";

function App() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className="">
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <Topbar
                        open={open}
                        handleDrawerOpen={handleDrawerOpen}
                        classes={classes}
                    />
                    <Sidebar
                        handleDrawerClose={handleDrawerClose}
                        open={open}
                        classes={classes}
                    />
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <Switch>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/doctor/addDoctor">
                                <AddDoctor />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
