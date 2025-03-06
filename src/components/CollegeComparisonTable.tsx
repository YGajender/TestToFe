const CollegeComparisonTable = () => {
  const colleges = [
    {
      name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      fees: "₹218700",
    },
    {
      name: "Delhi Technological University - [DTU], New Delhi",
      fees: "₹504050",
    },
    {
      name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      fees: "₹218700",
    },
    {
      name: "Delhi Technological University - [DTU], New Delhi",
      fees: "₹504050",
    },
    {
      name: "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
      fees: "₹218700",
    },
    {
      name: "Delhi Technological University - [DTU], New Delhi",
      fees: "₹504050",
    },
  ];

  return (
    <div className="college-inner-info">
      <div className="ct-off">
        <h4>Popular Colleges Compared With IIT Delhi</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">College</th>
                <th scope="col">Avg Fees/ year</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college, index) => (
                <tr key={index}>
                  <th scope="row">{college.name}</th>
                  <td>{college.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CollegeComparisonTable;
