export interface Contact {
  firstName: string;
  secondName: string;
  jobTitle: string;
  email: string;
  contactNumber: string;
  age: number;
  id: number;
  dataSet: string[];
}

export interface LoginDetails {
  username: string;
  password: string;
  accessLevel: "admin" | "normal";
  id: number;
}

export const loginBank: LoginDetails[] = [
  {
    username: "LWed",
    password: "Crumble",
    accessLevel: "normal",
    id: 1,
  },
  {
    username: "SJay",
    password: "Doughnuts",
    accessLevel: "normal",
    id: 2,
  },
  {
    username: "APal",
    password: "Angel Delight",
    accessLevel: "normal",
    id: 3,
  },
  {
    username: "HTre",
    password: "Garlic",
    accessLevel: "normal",
    id: 4,
  },
  {
    username: "Admin",
    password: "Captain",
    accessLevel: "admin",
    id: 5,
  },
];

export const contactBank: Contact[] = [
  {
    firstName: "Loren",
    secondName: "Wedderburn",
    jobTitle: "Sales Executive",
    email: "LorenWedderburn@123.net",
    contactNumber: "079871323421",
    age: 40,
    id: 1,
    dataSet: ["house builders", "landscapers", "architects"],
  },
  {
    firstName: "Sandrina",
    secondName: "Jayasekera",
    jobTitle: "National Wellbeing Manager",
    email: "Sandpants@123.net",
    contactNumber: "0798713121323",
    age: 36,
    id: 2,
    dataSet: ["landscapers", "MEP"],
  },
  {
    firstName: "Azim",
    secondName: "Palmer",
    jobTitle: "National Disgrace",
    email: "Eatme@clownworld.co.uk",
    contactNumber: "089029194721",
    age: 37,
    id: 3,
    dataSet: ["house builders", "MEP"],
  },
  {
    firstName: "Hermione",
    secondName: "Supdawoop",
    jobTitle: "UX Specialist",
    email: "WingardiumLeviosa@hogwarts.com",
    contactNumber: "12234552335321",
    age: 33,
    id: 4,
    dataSet: ["landscapers", "house builders"],
  },
  {
    firstName: "System",
    secondName: "Admin",
    jobTitle: "Admin",
    email: "N/A",
    contactNumber: "N/A",
    age: 0,
    id: 5,
    dataSet: ["all"],
  },
];
