import "./Contacts.css";
import { useState } from "react";
import { useCRM } from "../CRMContext";
import { type DataSetState } from "../DataSetData";

const dataSetKeyMap: Record<string, keyof DataSetState> = {
  "house builders": "houseBuilders",
  "landscapers": "landscapers",
  "architects": "architects",
  "MEP": "mepContractors",
};

const categoryLabelMap: Record<string, string> = {
  "house builders": "House Builders",
  "landscapers": "Landscapers",
  "architects": "Architects",
  "MEP": "MEP Contractors",
};

type ContactEntry = {
  firstName: string;
  secondName: string;
  jobTitle: string;
  email: string;
  contactNumber: string;
  companyName: string;
  category: string;
};

function Contacts() {
  const { userData, dataSetState } = useCRM();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const userDataSets = userData?.dataSet ?? [];

  const allContacts: ContactEntry[] = userDataSets.flatMap((dataSetName) => {
    const key = dataSetKeyMap[dataSetName];
    if (!key) return [];
    return dataSetState[key].flatMap((company) =>
      company.employees.map((emp) => ({
        firstName: emp.firstName,
        secondName: emp.secondName,
        jobTitle: emp.jobTitle,
        email: emp.email,
        contactNumber: emp.contactNumber,
        companyName: company.companyName,
        category: categoryLabelMap[dataSetName] ?? dataSetName,
      }))
    );
  });

  const categories = ["All", ...new Set(allContacts.map((c) => c.category))];

  const filtered = allContacts.filter((contact) => {
    const matchesSearch =
      search === "" ||
      `${contact.firstName} ${contact.secondName}`.toLowerCase().includes(search.toLowerCase()) ||
      contact.companyName.toLowerCase().includes(search.toLowerCase()) ||
      contact.jobTitle.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      filterCategory === "All" || contact.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="contactsmain-div">
      <div className="contacts-toolbar">
        <input
          className="contacts-search"
          type="text"
          placeholder="Search by name, company or job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="contacts-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={filterCategory === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="contacts-count">
        {filtered.length} contact{filtered.length !== 1 ? "s" : ""}
      </div>

      <table className="contacts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Category</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((contact, index) => (
            <tr key={index}>
              <td>{contact.firstName} {contact.secondName}</td>
              <td>{contact.jobTitle}</td>
              <td>{contact.companyName}</td>
              <td>{contact.category}</td>
              <td>{contact.email}</td>
              <td>{contact.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <div className="contacts-empty">No contacts found</div>
      )}
    </div>
  );
}

export default Contacts;
