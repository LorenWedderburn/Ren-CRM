import { type Contact } from "./LoginData";

export type CompanyDataSet = {
  companyName: string;
  address: string;
  town: string;
  county: string;
  postcode: string;
  telephone: string;
  employees: Contact[];
  callLogs: CallLog[];
};

export type CallLog = {
  contact: string;
  currentCallDate: Date;
  appointmentCallDate?: string;
  responseType: string;
  notes: string;
};

export const houseBuilders: CompanyDataSet[] = [
  {
    companyName: "Newton Homes",
    address: "14 Down Street",
    town: "Liverpool",
    county: "Merseyside",
    postcode: "L1 4FR",
    telephone: "01345 675351",
    employees: [
      {
        firstName: "Bob",
        secondName: "Jones",
        jobTitle: "Commercial Director",
        email: "bobbyjones@123world.net",
        contactNumber: "09881787212",
      },
      {
        firstName: "Walter",
        secondName: "Gripe",
        jobTitle: "Managing Director",
        email: "waltywalt@123world.net",
        contactNumber: "09811384512",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "BuildLife",
    address: "Custard House",
    town: "Manchester",
    county: "Lancashire",
    postcode: "M23 6D1",
    telephone: "0161 978421",
    employees: [
      {
        firstName: "Cloud",
        secondName: "Strife",
        jobTitle: "Quantity Surveyor",
        email: "materiaman@shinracorp.co.uk",
        contactNumber: "09121787334",
      },
      {
        firstName: "Tifa",
        secondName: "Lockheart",
        jobTitle: "Estimator",
        email: "hardpunch@shinracorp.co.uk",
        contactNumber: "09811384512",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "In Da House",
    address: "Jansel House",
    town: "Luton",
    county: "Bedfordshire",
    postcode: "LU2 8BU",
    telephone: "0582 899177",
    employees: [
      {
        firstName: "Mario",
        secondName: "Mario",
        jobTitle: "Senior Designer",
        email: "shroomking@mushroomkingdom.net",
        contactNumber: "0912345313",
      },
      {
        firstName: "Luigi",
        secondName: "Mario",
        jobTitle: "Technical Director",
        email: "Vacumnlad@mushroomkingdom.net",
        contactNumber: "0911212134",
      },
      {
        firstName: "Princess",
        secondName: "Peach",
        jobTitle: "Director",
        email: "queenbee@mushroomkingdom.net",
        contactNumber: "09887565321",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Apex Builders",
    address: "17 Cromprex Street",
    town: "Norwich",
    county: "Norfolk",
    postcode: "N45 5JX",
    telephone: "01798 990123",
    employees: [
      {
        firstName: "Luffy",
        secondName: "Monkey D",
        jobTitle: "Director",
        email: "kingofdapirates@eastblue.com",
        contactNumber: "09118924821",
      },
      {
        firstName: "Zoro",
        secondName: "Roronoa",
        jobTitle: "Managing Director",
        email: "sanryu@eastblue.com",
        contactNumber: "09889372391",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Grafton D&B",
    address: "Bawden Road",
    town: "Luton",
    county: "Bedfordshire",
    postcode: "LU3 C15",
    telephone: "01582 889014",
    employees: [
      {
        firstName: "Seth",
        secondName: "Rugal",
        jobTitle: "Estimator",
        email: "s.rugal@graftondandb.net",
        contactNumber: "0998790761",
      },
    ],
    callLogs: [],
  },
];

export const landscapers: CompanyDataSet[] = [
  {
    companyName: "Green Thumb",
    address: "123 Grasshill",
    town: "Scunthorpe",
    county: "North Lincolnshire",
    postcode: "L22 7BH",
    telephone: "01676 996712",
    employees: [
      {
        firstName: "Sonic",
        secondName: "Hedgehog",
        jobTitle: "Quantity Surveyor",
        email: "gottagofast@greenhillzone.co.uk",
        contactNumber: "0988899910",
      },
      {
        firstName: "Miles",
        secondName: "Prower",
        jobTitle: "Design Manager",
        email: "twotwails@emeraldhillzone.co.uk",
        contactNumber: "0900198231",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Land Ho",
    address: "Burgess Hill",
    town: "London",
    county: "London",
    postcode: "NE 6XE",
    telephone: "01576 776091",
    employees: [
      {
        firstName: "Walter",
        secondName: "Goth",
        jobTitle: "",
        email: "peppernool@simlane.net",
        contactNumber: "091212123114",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Landscapes by Doug Housen",
    address: "12 Howton Lane",
    town: "Hull",
    county: "Yorkshire",
    postcode: "Y01 6FG",
    telephone: "16753 899178",
    employees: [
      {
        firstName: "Paul",
        secondName: "Giamatti",
        jobTitle: "",
        email: "paul.g@doughousen.net",
        contactNumber: "09493411256",
      },
      {
        firstName: "Henry",
        secondName: "Cavill",
        jobTitle: "Estimator",
        email: "henry.c@doughousen.net",
        contactNumber: "09811567321",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Crannull",
    address: "18 Sugar Loaf Hill",
    town: "Luton",
    county: "Bedfordshire",
    postcode: "LU1 5JG",
    telephone: "01582 162812",
    employees: [
      {
        firstName: "Eoin",
        secondName: "Compton",
        jobTitle: "Jokeman",
        email: "ecompton@crannull.co.uk",
        contactNumber: "09227877613",
      },
      {
        firstName: "Bernard",
        secondName: "Hull",
        jobTitle: "Business Development Manager",
        email: "bhull@crannull.co.uk",
        contactNumber: "09338542631",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Nottingham Reforresters",
    address: "New Green Forrest",
    town: "Nottingham Forrest",
    county: "Nottinghamshire",
    postcode: "N13 3VG",
    telephone: "01453 901323",
    employees: [
      {
        firstName: "Snoop",
        secondName: "Dogg",
        jobTitle: "Estimator",
        email: "blazeup@notsreforest.net",
        contactNumber: "096674345213",
      },
      {
        firstName: "Walter",
        secondName: "Gripe",
        jobTitle: "Managing Director",
        email: "waltywalt@123world.net",
        contactNumber: "09811384512",
      },
    ],
    callLogs: [],
  },
];

export const architects: CompanyDataSet[] = [
  {
    companyName: "Block by block",
    address: "45 Albert Road",
    town: "Southampton",
    county: "Hampshire",
    postcode: "S87 4GY",
    telephone: "01478 895231",
    employees: [
      {
        firstName: "Sandro",
        secondName: "Tonalli",
        jobTitle: "Estimator",
        email: "stonalli@123world.net",
        contactNumber: "098112312123",
      },
      {
        firstName: "Paolo",
        secondName: "Dicanio",
        jobTitle: "Estimator",
        email: "pdicanio@123world.net",
        contactNumber: "095656382312",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Sketch to It",
    address: "21 Guyford Lane",
    town: "Edinburgh",
    county: "Midlothian",
    postcode: "E15 F67",
    telephone: "01787 124342",
    employees: [],
    callLogs: [],
  },
  {
    companyName: "Taverton Architects",
    address: "78 Chancery Lane",
    town: "London",
    county: "London",
    postcode: "NE1 4GY",
    telephone: "0208 895123",
    employees: [],
    callLogs: [],
  },
  {
    companyName: "Sandrina Designs",
    address: "101 Bovingdon Street",
    town: "York",
    county: "Yorkshire",
    postcode: "Y02 4GH",
    telephone: "01543 895431",
    employees: [
      {
        firstName: "Keishini",
        secondName: "Jayasekera",
        jobTitle: "Design Director",
        email: "kjay@albertrod.net",
        contactNumber: "098899001121",
      },
      {
        firstName: "Sandrina",
        secondName: "Jayasekera",
        jobTitle: "Director",
        email: "sjay@albertroad.net",
        contactNumber: "0977123212345",
      },
      {
        firstName: "Mayuka",
        secondName: "Jayasekera",
        jobTitle: "Senior Architect",
        email: "mjay@albertroad.net",
        contactNumber: "0918234672312",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "John Huston & Major",
    address: "18 Oxford Street",
    town: "Middlesbrough",
    county: "Cleveland",
    postcode: "TS1 5EU",
    telephone: "01456 760091",
    employees: [
      {
        firstName: "Sarah",
        secondName: "Rigby",
        jobTitle: "Senior Architect",
        email: "srigby@JohnHustonandMajor.net",
        contactNumber: "0988189831",
      },
      {
        firstName: "Paul",
        secondName: "Pogba",
        jobTitle: "Junior Architect",
        email: "pogback@JohnHustonandMajor.net",
        contactNumber: "098113845623",
      },
    ],
    callLogs: [],
  },
];

export const mepContractors: CompanyDataSet[] = [
  {
    companyName: "24/7 Electronics",
    address: "12 Lewis Lane",
    town: "Newcastle",
    county: "Tyne & Wear",
    postcode: "NW2 6HU",
    telephone: "01367 432781",
    employees: [
      {
        firstName: "Max",
        secondName: "Power",
        jobTitle: "MEP Engineer",
        email: "mpower@247elec.com",
        contactNumber: "",
      },
      {
        firstName: "Phil",
        secondName: "Force",
        jobTitle: "Mechanical Engineer",
        email: "pforce@247elec.com",
        contactNumber: "09811384123",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Quartzelec",
    address: "25 Clarke Mews",
    town: "Newcastle",
    county: "Tyne & Wear",
    postcode: "NW1 F67",
    telephone: "01367 542246",
    employees: [],
    callLogs: [],
  },
  {
    companyName: "Dougle MEP",
    address: "The Crescent",
    town: "Luton",
    county: "Bedfordshire",
    postcode: "LU1 4JD",
    telephone: "01582 232609",
    employees: [],
    callLogs: [],
  },
  {
    companyName: "Spark Right MEP Contracting",
    address: "34 Hutch Lane",
    town: "Croydon",
    county: "Surrey",
    postcode: "CR0 4FG",
    telephone: "0207 895421",
    employees: [
      {
        firstName: "Tupac",
        secondName: "Shakur",
        jobTitle: "Technical Director",
        email: "2pac@badboy.net",
        contactNumber: "09881788876",
      },
      {
        firstName: "Christopher",
        secondName: "Wallace",
        jobTitle: "Managing Director",
        email: "biggie@deathrow.net",
        contactNumber: "0981153212",
      },
    ],
    callLogs: [],
  },
  {
    companyName: "Darke & Taylor",
    address: "11 Radiant House, Blenheim Office Park",
    town: "Hanborough",
    county: "Oxfordshire",
    postcode: "OX29 8LN",
    telephone: "01865 290000",
    employees: [
      {
        firstName: "Casey",
        secondName: "Jones",
        jobTitle: "Commercial Director",
        email: "Caseycase@123world.net",
        contactNumber: "09881744556",
      },
    ],
    callLogs: [],
  },
];
