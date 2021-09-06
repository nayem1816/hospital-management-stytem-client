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
import { useStyles } from "./utilities/basic-style/App.style";
import DoctorList from "./pages/Doctor/DoctorList/DoctorList";
import AddPatient from "./pages/Patient/AddPatient/AddPatient";
import PatientList from "./pages/Patient/PatientList/PatientList";
import AddDepartment from "./pages/Department/AddDepartment/AddDepartment";
import DepartmentList from "./pages/Department/DepartmentList/DepartmentList";
import AddSchedule from "./pages/DoctorSchedule/AddSchedule/AddSchedule";
import ScheduleList from "./pages/DoctorSchedule/ScheduleList/ScheduleList";
import AddAppointment from "./pages/Appointment/AddAppointment/AddAppointment";
import AppointmentList from "./pages/Appointment/AppointmentList/AppointmentList";
import AddPayment from "./pages/Payment/AddPayment/AddPayment";
import PaymentList from "./pages/Payment/PaymentList/PaymentList";
import PaymentInvoice from "./pages/Payment/PaymentInvoice/PaymentInvoice";
import PatientReport from "./pages/Report/PatientReport/PatientReport";
import DoctorReport from "./pages/Report/DoctorReport/DoctorReport";
import TotalReport from "./pages/Report/TotalReport/TotalReport";
import AddEmployee from "./pages/HumanResource/AddEmployee/AddEmployee";
import AddNurse from "./pages/HumanResource/AddNurse/AddNurse";
import EmployeeList from "./pages/HumanResource/EmployeeList/EmployeeList";
import NurseList from "./pages/HumanResource/NurseList/NurseList";
import AddPharmacist from "./pages/HumanResource/AddPharmacist/AddPharmacist";
import PharmacistList from "./pages/HumanResource/PharmacistList/PharmacistList";
import AddRepresentative from "./pages/HumanResource/AddRepresentative/AddRepresentative";
import RepresentativeList from "./pages/HumanResource/RepresentativeList/RepresentativeList";
import AddBed from "./pages/BedManager/AddBed/AddBed";
import BedList from "./pages/BedManager/BedList/BedList";
import AddNotice from "./pages/Notice/AddNotice/AddNotice";
import NoticeList from "./pages/Notice/NoticeList/NoticeList";

function App() {
    const matchResult = window.matchMedia("(max-width:900px)");
    const mobileScreen = matchResult.matches;
    const classes = useStyles();
    const [open, setOpen] = useState(mobileScreen ? false : true);

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
                            <Route path="/doctor/doctorList">
                                <DoctorList />
                            </Route>
                            <Route path="/patient/addPatient">
                                <AddPatient />
                            </Route>
                            <Route path="/patient/patientList">
                                <PatientList />
                            </Route>
                            <Route path="/department/addDepartment">
                                <AddDepartment />
                            </Route>
                            <Route path="/department/departmentList">
                                <DepartmentList />
                            </Route>
                            <Route path="/doctorSchedule/addSchedule">
                                <AddSchedule />
                            </Route>
                            <Route path="/doctorSchedule/scheduleList">
                                <ScheduleList />
                            </Route>
                            <Route path="/appointment/addAppointment">
                                <AddAppointment />
                            </Route>
                            <Route path="/appointment/appointmentList">
                                <AppointmentList />
                            </Route>
                            <Route path="/payment/addPayment">
                                <AddPayment />
                            </Route>
                            <Route path="/payment/paymentList">
                                <PaymentList />
                            </Route>
                            <Route path="/payment/paymentInvoice">
                                <PaymentInvoice />
                            </Route>
                            <Route path="/report/patientReport">
                                <PatientReport />
                            </Route>
                            <Route path="/report/doctorReport">
                                <DoctorReport />
                            </Route>
                            <Route path="/report/totalReport">
                                <TotalReport />
                            </Route>
                            <Route path="/humanResource/addEmployee">
                                <AddEmployee />
                            </Route>
                            <Route path="/humanResource/employeeList">
                                <EmployeeList />
                            </Route>
                            <Route path="/humanResource/addNurse">
                                <AddNurse />
                            </Route>
                            <Route path="/humanResource/nurseList">
                                <NurseList />
                            </Route>
                            <Route path="/humanResource/addPharmacist">
                                <AddPharmacist />
                            </Route>
                            <Route path="/humanResource/pharmacistList">
                                <PharmacistList />
                            </Route>
                            <Route path="/humanResource/addRepresentative">
                                <AddRepresentative />
                            </Route>
                            <Route path="/humanResource/representativeList">
                                <RepresentativeList />
                            </Route>
                            <Route path="/bedManager/addBed">
                                <AddBed />
                            </Route>
                            <Route path="/bedManager/bedList">
                                <BedList />
                            </Route>
                            <Route path="/notice/addNotice">
                                <AddNotice />
                            </Route>
                            <Route path="/notice/noticeList">
                                <NoticeList />
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
