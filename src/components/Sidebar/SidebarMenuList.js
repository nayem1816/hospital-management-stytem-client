const menuItemsList = [
    {
        mainMenu: "Home",
        subMenu: [
            {
                subMenuName: "Dashboard",
                subMenuLink: "/dashboard/dashboard",
            },
        ],
    },
    {
        mainMenu: "Doctor",
        subMenu: [
            {
                subMenuName: "Add Doctor",
                subMenuLink: "/doctor/addDoctor",
            },
            {
                subMenuName: "Doctor List",
                subMenuLink: "/doctor/doctorList",
            },
        ],
    },
    {
        mainMenu: "Patient",
        subMenu: [
            {
                subMenuName: "Add Patient",
                subMenuLink: "/patient/addPatient",
            },
            {
                subMenuName: "Patient List",
                subMenuLink: "/patient/patientList",
            },
        ],
    },   
    {
        mainMenu: "Department",
        subMenu: [
            {
                subMenuName: "Add Department",
                subMenuLink: "/department/addDepartment",
            },
            {
                subMenuName: "Department List",
                subMenuLink: "/department/departmentList",
            },
        ],
    },
    {
        mainMenu: "Doctor Schedule",
        subMenu: [
            {
                subMenuName: "Add Schedule",
                subMenuLink: "/doctorSchedule/addSchedule",
            },
            {
                subMenuName: "Schedule List",
                subMenuLink: "/doctorSchedule/scheduleList",
            },
        ],
    },
    {
        mainMenu: "Appointment",
        subMenu: [
            {
                subMenuName: "Add Appointment",
                subMenuLink: "/appointment/addAppointment",
            },
            {
                subMenuName: "Appointment List",
                subMenuLink: "/appointment/appointmentList",
            },
        ],
    },
    {
        mainMenu: "Payment",
        subMenu: [
            {
                subMenuName: "Add Payment",
                subMenuLink: "/payment/addPayment",
            },
            {
                subMenuName: "Payment List",
                subMenuLink: "/payment/paymentList",
            },
            {
                subMenuName: "Payment Invoice",
                subMenuLink: "/payment/paymentInvoice",
            },
        ],
    },
    {
        mainMenu: "Report",
        subMenu: [
            {
                subMenuName: "Patient Wise Report",
                subMenuLink: "/report/patientReport",
            },
            {
                subMenuName: "Doctor Wise Report",
                subMenuLink: "/report/doctorReport",
            },
            {
                subMenuName: "Total Report",
                subMenuLink: "/report/totalReport",
            },
        ],
    },
    {
        mainMenu: "Human Resource",
        subMenu: [
            {
                subMenuName: "Add Employee",
                subMenuLink: "/humanResource/addEmployee",
            },
            {
                subMenuName: "Employee List",
                subMenuLink: "/humanResource/employeeList",
            },
            {
                subMenuName: "Add Nurse",
                subMenuLink: "/humanResource/addNurse",
            },
            {
                subMenuName: "Nurse List",
                subMenuLink: "/humanResource/nurseList",
            },
            {
                subMenuName: "Add Pharmacist",
                subMenuLink: "/humanResource/addPharmacist",
            },
            {
                subMenuName: "Pharmacist List",
                subMenuLink: "/humanResource/pharmacistList",
            },
            {
                subMenuName: "Add Representative",
                subMenuLink: "/humanResource/addRepresentative",
            },
            {
                subMenuName: "Representative List",
                subMenuLink: "/humanResource/representativeList",
            },
        ],
    },
    {
        mainMenu: "Bed Manager",
        subMenu: [
            {
                subMenuName: "Add Bed",
                subMenuLink: "/bedManager/addBed",
            },
            {
                subMenuName: "Bed List",
                subMenuLink: "/bedManager/bedList",
            },
        ],
    },
    {
        mainMenu: "Notice",
        subMenu: [
            {
                subMenuName: "Add Notice",
                subMenuLink: "/notice/addNotice",
            },
            {
                subMenuName: "Notice List",
                subMenuLink: "/notice/noticeList",
            },
        ],
    },
];

export default menuItemsList;
