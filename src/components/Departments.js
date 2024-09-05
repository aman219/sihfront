import React,{useState} from 'react';
import '../styles/departments.css'; // For external styling



const departments = [
  {
    id: 1,
    name: 'Land and Development Office',
    content: `Auction of land for Residential/Commercial purposes under the directions of the Government of India.
    Recovery of all Government dues in respect of land under its control...`,
  },
  {
    id: 2,
    name: 'Town and Country Planning Organisation',
    content: `Town and Country Planning Organisation (TCPO) was set up in 1962...`,
  },
  {
    id: 3,
    name: 'Ministry of Power',
    content: `Town and Country Planning Organisation (TCPO) was set up in 1962...`,
  },
  {
    id: 4,
    name: 'Water Supply Department', // Specific card
    content: `The Department of Drinking Water and Sanitation provides...`,
  },
  {
    id: 5,
    name: 'Public Work Department',
    content: `Road Construction and Maintenance is a major role of PWD...`,
  },
  {
    id: 6,
    name: 'National Buildings Organisation',
    content: `Data Collection and Analysis is a responsibility of the NBO...`,
  },
  {
    id: 7,
    name: 'Forest Department',
    content: `The primary function of the Forest Department is to conserve and manage forest resources...`,
  },
  {
    id: 8,
    name: 'Private Organization',
    content: `Private-owned companies provide services like broadband...`,
  },
];

const Departments = () => {
  const [showMore, setShowMore] = useState({});

  const handleToggle = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="departments-container">
      {departments.map((dept, index) => (
        <div key={dept.id} className={`card ${dept.name === 'Water Supply Department' ? 'no-line-animation' : ''}`}>
          <h3>{dept.name}</h3>
          <p>
            {showMore[dept.id] ? dept.content : `${dept.content.substring(0, 100)}...`}
            <span className="read-more" onClick={() => handleToggle(dept.id)}>
              {showMore[dept.id] ? ' Show less' : ' Read more'}
            </span>
          </p>
          {/* Only show the line if it's not the Water Supply Department */}
          {dept.name !== 'Water Supply Department' && index < departments.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Departments;
