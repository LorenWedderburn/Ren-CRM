# --Overview--

RenCRM is a client relationship manager built for sales teams. It lets users log into a personalised account, browse through their assigned company datasets, view and edit company and employee records, log calls, and schedule follow-up appointments. It also features an AI-powered call history summariser.

🎬 **Live Demo:** [rencrm.netlify.app/](https://rencrm.netlify.app/)

# --Screenshots--

![Login](https://github.com/LorenWedderburn/Ren-CRM/blob/main/screenshots/login.PNG)
Enter your credentials to login to the CRM

  
![Dashboard](https://github.com/LorenWedderburn/Ren-CRM/blob/main/screenshots/dashboard.PNG)
After you have logged in pick the dataset you are currently working. The datasets available to you will be the ones allocated to your account


![Account Details](https://github.com/LorenWedderburn/Ren-CRM/blob/main/screenshots/account-details.png)
You can see  the records of the current dataset you are in. The "employee details" panel allows you to see and switch between all employees of the current record, edit, add a new record and see and summarise all notes.  
The "account details" panel allows you to see and edit the current company details.  
The "wrap up" panel allows you to create notes and save and log them. As well as change just the details of the current record for saving.


![Call Log](https://github.com/LorenWedderburn/Ren-CRM/blob/main/screenshots/call-log.png)
Allows you to see a log of all the calls made recently along with the ability to summarise the calls made through an openai API call 

![Contacts](https://github.com/LorenWedderburn/Ren-CRM/blob/main/screenshots/contacts.png)
Allows you to see all of the records on the "database" and filter for various different criteria. Name, Job title, dataset etc.

# --Login Details--

Account 1  
Username: LWed  
Password: Crumble

Account 2  
Username: SJay  
Password: Doughnuts

Account 3  
Username: APal  
Password: Angel Delight

Account 4  
Username: HTre  
Password: Garlic

Account Admin  
Username: Admin  
Password: Captain

# --Tech Stack--

Frontend: React, TypeScript, Vite, React Router, CSS Modules  
State Management: React Context API with a custom useCRM hook  
Backend: Node.js, Express  
AI: OpenAI GPT-4o-mini  
Libraries: react-day-picker, date-fns, react-pro-sidebar, react-icons

# --Features--

Authentication

Username and password login with inline validation
Each user account has an assigned set of datasets they can access
Dataset Navigation

Four company categories: House Builders, Landscapers, Architects, MEP Contractors
Navigate forward and backward through company records
Account Details

View and edit company information — name, address, town, county, postcode, telephone
Employee Management

View employees with forward/back pagination  
Add new employees  
Edit existing employee details  
Delete employees  
Automatically switches to call history after a call is logged  
Call Log History

Full table of all logged calls per company — date, contact, response type, notes, appointment
AI summarisation — sends all call notes to OpenAI and returns a one-paragraph summary of the account's history
WrapUp / Call Logging

Select a call response type — Opportunity, Call Back, Not In, Not Interested
Schedule follow-up appointments with a date and time picker
Add free-text notes up to 500 characters
Save and Log moves to the next record automatically
Contacts Page

Flat view of all employees across all companies in the user's datasets
Live search by name, company, or job title
Filter by category

# --Running the Project --

Running the Project
Frontend

cd rencrm
npm install
npm run dev
Backend

cd server
npm install
node server.js
Create a .env file inside the server/ folder:

OPENAI_API_KEY=your-key-here
The app runs on http://localhost:5173 and the server on http://localhost:3001.
