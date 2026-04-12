type AccountDetailsDataset = {
  companyName: string;
  address: string;
  town: string;
  county: string;
  postcode: string;
  telephone: string;
  handleSetCompanyName: (value: string) => void;
  handleSetAddress: (value: string) => void;
  handleSetTown: (value: string) => void;
  handleSetCounty: (value: string) => void;
  handleSetPostcode: (value: string) => void;
  handleSetTelephone: (value: string) => void;
};

function AccountDetails({
  companyName,
  address,
  town,
  county,
  postcode,
  telephone,
  handleSetCompanyName,
  handleSetAddress,
  handleSetTown,
  handleSetCounty,
  handleSetPostcode,
  handleSetTelephone,
}: AccountDetailsDataset) {
  return (
    <div className="selecteddataset-contentdiv selecteddataset-accountdetails">
      <div>
        <div className="selecteddatasetpagemain-contentdiv-header">
          Account Details
        </div>
      </div>
      <form>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="companyName">Company Name:</label>
          <input
            value={companyName}
            onChange={(e) => handleSetCompanyName(e.target.value)}
            name="companyName"
            autoComplete="off"
          ></input>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="address">Address:</label>
          <input
            value={address}
            onChange={(e) => handleSetAddress(e.target.value)}
            name="address"
            autoComplete="off"
          ></input>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="town">Town:</label>
          <input
            value={town}
            onChange={(e) => handleSetTown(e.target.value)}
            name="town"
            autoComplete="off"
          ></input>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="county">County:</label>
          <input
            value={county}
            onChange={(e) => handleSetCounty(e.target.value)}
            name="county"
            autoComplete="off"
          ></input>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="postcode">Postcode:</label>
          <input
            value={postcode}
            onChange={(e) => handleSetPostcode(e.target.value)}
            name="postcode"
            autoComplete="off"
          ></input>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="telephone">Telephone:</label>
          <input
            value={telephone}
            onChange={(e) => handleSetTelephone(e.target.value)}
            name="telephone"
            autoComplete="off"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
