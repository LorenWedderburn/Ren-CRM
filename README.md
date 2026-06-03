# --Overview--

RenCRM is a client relationship manager built for sales teams. It lets users log into a personalised account, browse through their assigned company datasets, view and edit company and employee records, log calls, and schedule follow-up appointments. It also features an AI-powered call history summariser.

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
