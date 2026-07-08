import "../styles/global.css";
import {
FaUserMd,
FaHospital,
FaHeartbeat,
FaAward
} from "react-icons/fa";

function Stats(){

const stats=[
{
icon:<FaUserMd/>,
number:"250+",
title:"Expert Doctors"
},
{
icon:<FaHospital/>,
number:"50+",
title:"Departments"
},
{
icon:<FaHeartbeat/>,
number:"24×7",
title:"Emergency Care"
},
{
icon:<FaAward/>,
number:"98%",
title:"Patient Satisfaction"
}
];

return(

<section className="stats">

<div className="section-title">

<h2>Trusted by Thousands of Patients</h2>

<p>
Delivering exceptional healthcare with experienced specialists,
modern facilities, and patient-centered treatment.
</p>

</div>

<div className="stats-grid">

{stats.map((item,index)=>(

<div className="stat-card" key={index}>

<div className="stat-icon">
{item.icon}
</div>

<h3>{item.number}</h3>

<p>{item.title}</p>

</div>

))}

</div>

</section>

);

}

export default Stats;