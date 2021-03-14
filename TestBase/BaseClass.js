
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var path = require('path');
var downloadsPath = path.resolve(__dirname, './downloads');

var ranstr = Math.random().toString().replace("0.", "");
var str1 = ranstr.substr(1, 4);
var fname = "Fname" + str1;
var lname = "Lname" + str1;
var mName = "MName" + str1;
var deleteFName = "DeleteFName" + str1;
var deleteLName = "DeleteLName" + str1;
var deleteMName = "DeleteMName" + str1;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var mmm = today.getMonth();
var yyyy = today.getFullYear() - 4;
var eYear = today.getFullYear() - 1;
var cYear = today.getFullYear();
var yyyyy = today.getFullYear() + 1;
var Eyyyy = today.getFullYear() - 2;//For Exit Date
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
if (mmm < 10) {
    mmm = '0' + mmm;
}

var customDate = mm + '/' + dd + '/' + yyyy;
var enrollDate = mm + '/' + dd + '/' + eYear;
var futureDate = mm + '/' + dd + '/' + yyyyy;
var currentDate = mmm + '/' + dd + '/' + cYear;
var iCustomDate = mm + '/' + dd + '/' + yyyy;
var eCustomDate = mm + '/' + dd + '/' + Eyyyy;


exports.config = {
    params: {
        env: null,
        url: {
            msgMgt: '/org/messagemanagement',
            searchStaffPage: '/staff/Searchstaff',
            staffImport: '/staff/import',
            locationsPage: '/org/locations',
            allocationsPg: '/org/allocations',
            labelMgt: '/org/labelmanagement',
        },

        clinicalLogin: [
            {userName: `riversiderealadmin `, passWord: `admin123!`},
            {userName: `dev `, passWord: `Test123!`},
            {userName: `RameshS`, passWord: `Qwerty@1`},
        ],
        admin: [
            {userName: `SharedAdmin `, passWord: `wjtest#12`},
            {userName: `dev `, passWord: `Test123!`},
        ],
        accountHolder: [
            {userName: `itestbdi456`, passWord: `Test123!`},
            {userName: `abc.321`, passWord: `Test123!`},
            {userName: `bdi3US75Test`, passWord: `Test123!`},
            {userName: 'bdi3hmhtest', passWord: 'Test123!'},
            {userName: 'bdi3hmhtest1', passWord: 'Test123!'},
            {userName: `bdi3_test`,    passWord: `Test123!`},
            {userName:'itest.bdi78',password:'Test123!'},
            {userName: `BDIWrongUser`,  passWord: `wrongpwd!`},
            {userName: `test_bdi3`,  passWord: `Test123!`},
            {userName: `testbdi3_1`,  passWord: `Test123!`},
            {userName: `bdi3_org`,  passWord: `Test123!`},
            {userName: `bdi.test123`,  passWord: `Test123!`},
            {userName: `itestbdi2020`,  passWord: `wjtest#12`},
            {userName: `tis2`,  passWord: `Test123!`},
            {userName: `itestbdi1122_2020`,  passWord: `Test123!`},
            {userName: `itestbdi1210`,  passWord: `Test123!`, email: 'wjivautomation@gmail.com'},
            {userName: `itest0056`, passWord: `wjtest#12`},//0
            {userName: `itestWMLSIII`, passWord: `wjtest#12`},//1
            {userName: 'TestPopUpAH', passWord: 'Test123!'},//7
            {userName: `NewLicenseTest`, passWord: `Test123!`},//8
            {userName: `wjivTest`, passWord: `Test123!`},//9
            {userName: `wmlsiii2020`, passWord: `Test123!`},//10
            {userName: `wjtest1231`, passWord: `Test123!`},//12
            {userName: `wmls1231`, passWord: `Test123!`},//13
            {userName: `wj.wmls`, passWord: `Test123!`},//14
            {userName: `bdi.bdi`, passWord: `Test123!`},//15
            {userName: `SharedFolders`,  passWord: `wjtest#12`},
            {userName: `orglic0123`,  passWord: `Test123!`},
            {userName: `itestbdi1811`,  passWord: `Test123!`},
            {userName: `ahh.ahh`, passWord: `Test123!`},
            {userName: 'OrgFN2.OrgLN20316',passWord: 'Test123!'},//30
            {userName: 'MoreThan60DayFN.MoreThan60DayLN', passWord: 'Test123!'},//31 scorebaselines
            {userName: 'LesThan60FN.LesThan60LN', passWord: 'Test123!'},//32
            {userName: 'RnwAfter60FN.RnwAfter60LN', passWord: 'Test123!'},//33
            {userName: 'RnwAfter60FN.RnwAfter60LN', passWord: 'Test123!'},//33            
        ],

        staffLogin:[
            {userName: `bdistaff`, passWord: `Test123!`, email: 'automatebdi3+2@gmail.com'},
            {userName: `Staff.Test123`, passWord: `Test123!`, email: 'riversight123+46@gmail.com'},
            {userName:'itest.089', passWord:'Test123!'},
            {userName:'all.Permissions',  passWord:'Test123!'},
            {userName:'itest.999',  password:'Test123!'},
            {userName: `Staff123.Staff1234`, passWord: `Test123!`, email: 'automatebdi3@gmail.com'},
            {userName:'itestbdi.908',password:`Test123!`},
            {userName:'StaffTest0123',passWord:`Test123!`, email: 'automatebdi3+034@gmail.com'},
            {userName: `itest.789`, passWord: `Test123!`},
            {userName: `Staff.User003`,  passWord: `Test123!`, email:'automatebdi3+003@gmail.com'},
            {userName:'Shamvicky3952',password:'Test123!'},
            {userName: `Staff.ForDevBaselines9670`,  passWord: `Test123!`, email:'wjivautomation+8484@gmail.com'},
            {userName: `TestPopUp`,  passWord: `Test123!`, email:'riversight123+518@gmail.com'},
            {userName: `staff.locations`,  passWord: `Test123!`},
            {userName: `pcstaff.all.levels`,  passWord: `Test123!`},
            {userName: `pc staff`,  passWord: `Test123!`},
            {userName: `staff.lic123`,  passWord: `Test123!`},
            {userName: `itestbdi3.1211`,  passWord: `Test123!`},
            {userName: `staff.prod123`,  passWord: `Test123!`, email: 'automatebdi3+012393@gmail.com'},
            {userName: `staff.test1234`,  passWord: `Test123!`, email: 'automatebdi3+012397@gmail.com'},
            {userName: `staffwjiv.prod123`,  passWord: `Test123!`, email: 'riversight123+51870@gmail.com'},
            {userName: `staffwjiv.test123`,  passWord: `Test123!`, email: 'riversight123+765@gmail.com'},
            {userName: `staffwmsl.prod123`,  passWord: `Test123!`, email: 'riversight123+760@gmail.com'},
            {userName: `staffwmsl.test123`,  passWord: `Test123!`, email: 'riversight123+7601@gmail.com'},
            {userName: `staff.12340052`,  passWord: `Test123!`, email: 'riversight123+7601567@gmail.com'},
            {userName:'dataexport.dataexport0182',password:'Test123!'},
            {userName:'noexport',password:'Test123!'},
            {userName:'LowerStaff',password:'Test123!'},
            {userName:'LowerWithoutPermission',password:'Test123!'},
            {userName:'PCStaffWithOrg',password:'Test123!'},
            {userName:'staff.123',password:'Test123!'},
            {userName: `pcstaff123`,  passWord: `Test123!`},
            {userName: `staffwp`,  passWord: `Test123!`},
            {userName: `staffwithoutpemissions`,  passWord: `Test123!`},
            {userName: 'RenewStaffFN.RenewStaffLN', passWord: 'Test123!'}
        ],

        programCoordinator: [
            {userName: `bdi3US75`, passWord: `Test123!`},
            {userName: `bdi375`, passWord: `Test123!`},
            {userName: `bdi3pc1`, passWord: `Test123!`},
            {userName: `bdi3PC001234`, passWord: `Test123!`},
            {userName: `pcbdi3`, passWord: `Test123!`},
            {userName: `scoreDevPC2020`, passWord: `Test123!`},
            {userName: `devpc`, passWord: `Test123!`},
            {userName: `dataExportPC`, passWord: `Test123!`},
            {userName: `programCoordinator2020`, passWord: `Test123!`},
            {userName: `PCStaff`, passWord: `Test123!`},
            {userName: `PCPopUpTest`, passWord: `Test123!`},
            {userName: `pc00123`, passWord: `Test123!`},
            {userName: `pclevel1`, passWord: `Test123!`},
            {userName: `bdipc001`, passWord: `Test123!`},
            {userName: `bdipc.bdipc`, passWord: `Test123!`},
            {userName: `Siddhi.ps9227`, passWord: `Test123!`},
            {userName: `pcnorg`, passWord: `Test123!`},
            {userName: `pcc.pcc`, passWord: `Test123!`},
            {userName: 'PCMoreThan60DayFN.PCMoreThan60DayLN', passWord: 'Test123!'},//18
            {userName: 'PCAffiMoreThan60FN.PCAffiMoreThan60LN', passWord: 'Test123!'},//19
            {userName: 'PCAffLesThan60FN.PCAffLesThan60LN', passWord: 'Test123!'},//20
            {userName: 'PCLesThan60FN.PCLesThan60LN', passWord: 'Test123!'},//21
            {userName: 'RnwAfter60PCAffiFN.RnwAfter60PCAffiLN', passWord: 'Test123!'},//22
            {userName: 'RnwAfter60PCFN.RnwAfter60PCLN', passWord: 'Test123!'},//23
            {userName: 'Expired365PC', passWord: 'Test123!'},//24
        ],

        addDataExport:[
            {
                name: "data",
                name1: "export",
                name2: "export123",
            }
        ],

        loginCredentials: [
            { userName: 'itestbdi3_001', password: 'Test'},
            {validUserName: 'itestbdi3_001', validPassword: "Test123!"}
        ],

        addChild: [
            {firstName: 'FName', lastName: 'LName', middleName: 'MName'},
            {firstName: 'FirstName123', lastName: 'LastName123', middleName: 'MiddleName123'},
            {firstName: 'FName0093', lastName: 'FName0093', middleName: 'FName0093'},
            {firstName: 'FName0019', lastName: 'Name', middleName: ''},
            {firstName: 'FName2004', lastName: 'LName2004', middleName: ''},
            {firstName: 'CommFirst', lastName: 'CommLast', middleName: ''},
            {firstName: 'ChildNameFCommit', lastName: 'ChildNameMCommit', middleName: 'ChildNameLCommit'},
            {firstName: 'FName5621', lastName: 'MName5621', middleName: 'LName5621'},
            {threeMonths: '09/01/2020',SevenMonths: '04/13/2020',TwelveMonths: '12/12/2019',EighteenMonths: '10/27/2018',TwentyFourMonths:'04/27/2018',ThirtySixMonths:'03/28/2017',FortyThreeMonths: '09/27/2016',FortyEightMonths: '04/27/2016',FiftyFourMonths:'09/28/2015',SixtyMonths:'03/28/2015',SeventyTwoMonths: '04/27/2014',EightyFourMonths:'03/28/2013',sixYrs: '06/20/2014'},
            {firstName: fname, lastName: lname, middleName: mName},
            {firstName: 'FName2415', lastName: 'LName2415', middleName: 'LName2415'},
            {firstName: 'Screening', lastName: 'Child', selectName: 'Child, Screening'},
            {firstName: '7years2009', lastName: '0Months2009', selectName: '0Months2009, 7years2009'},
            {firstName: 'ChildScore4YrRandom', lastName: 'Academic', selectName: 'Academic, ChildScore4YrRandom'},
            {firstName: 'Page',lastName: 'Refresh',selectName: 'Refresh, Page'}
        ],
        addStaff: [
            {firstName: 'FName', lastName: 'LName'}

        ],
        addPC: [
            {firstName: 'FName', lastName: 'LName'}
        ],

        staff:[
            {userName: `WJIV.Staff1`, passWord: `Test123!`},//0
            {userName: `bdi3.stafff08`, passWord: `Test123!`},//1
            {userName: `WJSTAFF.WJSTAFF1`, passWord: `Test123!`},//2
            {userName: `wmlsstaff`, passWord: `Test123!`},//3
            {userName: `wjstaff22`, passWord: `Test123!`},//4
            {userName: `wmls2`, passWord: `Test123!`},//5
            {userName: `bdistaff123`, passWord: `Test123!`},//6
            {userName: `wjstaff`, passWord: `Test123!`},//7
            {userName: `wmlsstaff1`, passWord: `Test123!`},//8
        ],

        searchChild : [
            {firstName: 'FName0019'},
            {firstName: '0094'}
        ],

        searchOrg:[
            {userName:'itestbdi03', passWord:'Test123!'},//0
            {userName:'itestbdi', passWord:'Test123!'},//1
            {userName:'itest0042', passWord:'Test123!'},//2
            {userName:'wjtest1231', passWord:'Test123!'},//3
            {userName:'wmls1231', passWord:'Test123!'},//4
            {userName:'wj.wmls', passWord:'Test123!'},//5
            {userName:'bdi.bdi', passWord:'Test123!'},//6
            {userName:'OrgNameRenew', passWord:'Test123!'},//7
            {userName:'Expired365Org'},//8
            {userName:'RenewAfter60DaysOrg'},//9
        ],

        searchPcOrg:[
            {userName:'itestbdi3', email:'staffbdi@gmail.com'},
            {userName:'itestbdi1'},
            {userName:'scoreDevPC'},
            {userName:'RnwAfter60DayPCAffi'},
            {userName:'RnwAfter60DayPC'},//4
            {userName:'Expired365PC'},//5
        ],

        searchStaff:[
            {userName:'bdi.staff', email:'wjivautomation@gmail.com'},
            {userName:'bdi3.staff123', emailId:'riversight123+43@gmail.com'},
            {userName:'PCStaffFName', emailId:'automatebdi3+9826@gmail.com'},
            {userName:'PCStaffFLName', emailId:'automatebdi3+79954@gmail.com'},
            {userName:'bdi.staff1809', email:'riversight123+1809@gmail.com'},//In QA

        ],
        //This users are only to validate popup msg not for other functionalities
        newUserCredentials: [
            {userName: `staffdist.098`, passWord: `Test123!`},
            {userName: `staffschl.098`, passWord: `Test123!`},
            {userName: `staffclass.098`, passWord: `Test123!`},
            {userName: `bmw007`, passWord: `Test123!`},
            {userName: `bmwpc`, passWord: `Test123!`},
        ],
        childData:[ {
            eGender: `Female`, customDate: customDate, enrollDate: enrollDate, futureDate: futureDate, currentDate: currentDate,iCustomDate: iCustomDate, eCustomDate: eCustomDate,
        } ],
        license:[
            {testRecord:'50', sapOrder:'50'}
        ],

        examiner: [
            {userName: `StephC16 `, passWord: `Test123!`},
            {userName: `ExaminerPopUp`, passWord: `Test123!`},
            {userName: `AdminPopUp`, passWord: `Test123!`},
            {userName: `TestPopUp`, passWord: `Test123!`},
            {userName: `wmlsiii_2020PopUp`, passWord: `Test123!`},
            {userName: `SharedExaminer `, passWord: `wjtest#12`},

        ],
        location: [
            {locationName: 'Location123'},
            {subLeve1:"Dist1",subLevel2:"School",subLevel3:"Class"},
        ],

        deleteChildName:[
            {firstName: deleteFName, lastName: deleteLName, middleName: deleteMName},
            {firstName: 'DeleteFName', lastName: 'DeleteLName', middleName: 'DeleteMName'},
        ],
        resourcesLinks: [
            { link: `Conditions of Sale`},
            { link: `Test Disclosure Policy`},
            { link: `Clinical Privacy Policy`},
            { link: `Terms of Use`},
        ],
        resourcesUrl: [
            { url: `https://cms.riversideinsights.com//uploads/c0947c29721d40e5b9f0766a46f1a029.pdf`},
            { url: `https://cms.riversideinsights.com//uploads/9a570895f3554a609cb9eed6ecdf0b01.pdf`},
            { url: `https://cms.riversideinsights.com//uploads/e2f5cad99f33448d8c72cc57e71710fa.pdf`},
            { url: `https://cms.riversideinsights.com//uploads/fae1a1e2deb44b19b54600af53d80866.pdf`},
        ],
        bdi3RecordTitles: [
            {
                recordTitle: 'BATTELLE DEVELOPMENTAL COMPLETE RECORD FORM',
                childName: 'FName0019 Name',
                childId: 'ID:',
                childAge: 'Age:',
                childDOB: 'Date of Birth:',
                childGender: 'Gender:',
                childLocation: 'Location:',
                ScreenerrecordTitle:'BDI-3 SCREENING TEST RECORD FORM',
                AcademicSurveyTitle:'BATTELLE EARLY ACADEMIC SURVEY RECORD FORM',
                recordForm: 'BDI-3 DEVELOPMENTAL RECORD FORM'
            },
        ],

        testOverviewColumns: [
            {
                TestSessionTitle: 'Test Session Overview',
                TestSessionDomain: 'Domain',
                TestSessionDate: 'Test Date',
                TestSessionExaminer: 'Examiner',
                TestSessionItemScore: 'Item Score',
                TestSessionStatus: 'Status',
                TestSessionRawScore: 'Raw Score',
                TestSessionAE: 'AE',
                TestSessionPR: 'PR',
                TestSessionSS: 'SS'
            }
        ],
        domainNames: [
            {
                one: 'Adaptive', two: 'Social-Emotional', three: 'Communication', four: 'Motor', five: 'Cognitive'
            },
            {
                one: 'Self-Care',
                two: 'Personal Responsibility',
                three: 'Adult Interaction',
                four: 'Peer Interaction',
                five: 'Self-Concept and Social Role',
                six: 'Receptive Communication',
                seven: 'Expressive Communication',
                eight: 'Gross Motor',
                nine: 'Fine Motor',
                ten: 'Perceptual Motor',
                eleven: 'Attention and Memory',
                twelve: 'Reasoning and Academic Skills',
                thirteen: 'Perception and Concepts'
            },

        ],

        itemLevel:[
            {
                ExaminerField: "EXAMINER*",
                TestDateFiled: "TEST DATE*",
            }
        ],
        verifyImportStaffTemplateData: [
            {fName:'First Name*',lName:'Last Name*',email:'Email*',locations:'Locations*',username:'Username*',childEditingPermission:'Child Editing* Y or N',dataExportPermission:'Data Export* Y or N',managetaffPermisssion:'Manage Staff* Y or N',manageAllocationsPermission:'Manage Allocations* Y or N',manageOrganizationsPermission:'Manage Organizations* Y or N',usernameExists:'Username Exists* Y or N',}
        ],

    },
    LicenseInfo:[
        {
            staffNames: "Staff Name",
            childNames:"Child Name",
            deviceNames:"Device",
            timeStamps:"Timestamp",
        }
    ],


    seleniumServerPath: '../modules/selenium-server-standalone-2.53.1.jar',
    // seleniumAddress: 'http://172.17.0.8:4445/wd/hub',
    directConnect:true,

    allScriptsTimeout: 600000,

    specs:['../tests/BDI3_tests/RenewalBDI3Organization_spec.js'],

};
