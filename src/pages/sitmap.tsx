import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🗺️ Sitemap – Pages disponibles</h1>
      <ul className="space-y-3">
        <li><Link to="/" className="text-blue-600 hover:underline">➡️ /</Link></li>
        <li><Link to="/admincontenteditor" className="text-blue-600 hover:underline">➡️ /admincontenteditor</Link></li>
        <li><Link to="/admincontentmanager" className="text-blue-600 hover:underline">➡️ /admincontentmanager</Link></li>
        <li><Link to="/adminlogin" className="text-blue-600 hover:underline">➡️ /adminlogin</Link></li>
        <li><Link to="/adminmarketresearch" className="text-blue-600 hover:underline">➡️ /adminmarketresearch</Link></li>
        <li><Link to="/adminpanel" className="text-blue-600 hover:underline">➡️ /adminpanel</Link></li>
        <li><Link to="/auth" className="text-blue-600 hover:underline">➡️ /auth</Link></li>
        <li><Link to="/authcallback" className="text-blue-600 hover:underline">➡️ /authcallback</Link></li>
        <li><Link to="/chatadmin" className="text-blue-600 hover:underline">➡️ /chatadmin</Link></li>
        <li><Link to="/coachdashboard" className="text-blue-600 hover:underline">➡️ /coachdashboard</Link></li>
        <li><Link to="/confidentiality" className="text-blue-600 hover:underline">➡️ /confidentiality</Link></li>
        <li><Link to="/dashboard" className="text-blue-600 hover:underline">➡️ /dashboard</Link></li>
        <li><Link to="/devenirprestataire" className="text-blue-600 hover:underline">➡️ /devenirprestataire</Link></li>
        <li><Link to="/emailconfirmation" className="text-blue-600 hover:underline">➡️ /emailconfirmation</Link></li>
        <li><Link to="/employeecheckin" className="text-blue-600 hover:underline">➡️ /employeecheckin</Link></li>
        <li><Link to="/employeecustomization" className="text-blue-600 hover:underline">➡️ /employeecustomization</Link></li>
        <li><Link to="/employeedashboard" className="text-blue-600 hover:underline">➡️ /employeedashboard</Link></li>
        <li><Link to="/employeepersonalspace" className="text-blue-600 hover:underline">➡️ /employeepersonalspace</Link></li>
        <li><Link to="/employeeprofile" className="text-blue-600 hover:underline">➡️ /employeeprofile</Link></li>
        <li><Link to="/employeeteamspace" className="text-blue-600 hover:underline">➡️ /employeeteamspace</Link></li>
        <li><Link to="/employeewellnessactivities" className="text-blue-600 hover:underline">➡️ /employeewellnessactivities</Link></li>
        <li><Link to="/enterpriseemployeesimulator" className="text-blue-600 hover:underline">➡️ /enterpriseemployeesimulator</Link></li>
        <li><Link to="/enterprisemanagersimulator" className="text-blue-600 hover:underline">➡️ /enterprisemanagersimulator</Link></li>
        <li><Link to="/enterpriseorientation" className="text-blue-600 hover:underline">➡️ /enterpriseorientation</Link></li>
        <li><Link to="/executivedashboard" className="text-blue-600 hover:underline">➡️ /executivedashboard</Link></li>
        <li><Link to="/famille" className="text-blue-600 hover:underline">➡️ /famille</Link></li>
        <li><Link to="/familycomparativesimulator" className="text-blue-600 hover:underline">➡️ /familycomparativesimulator</Link></li>
        <li><Link to="/familyenterprisesimulator" className="text-blue-600 hover:underline">➡️ /familyenterprisesimulator</Link></li>
        <li><Link to="/familyorientation" className="text-blue-600 hover:underline">➡️ /familyorientation</Link></li>
        <li><Link to="/familyparentsimulator" className="text-blue-600 hover:underline">➡️ /familyparentsimulator</Link></li>
        <li><Link to="/familysimulator" className="text-blue-600 hover:underline">➡️ /familysimulator</Link></li>
        <li><Link to="/familyspace" className="text-blue-600 hover:underline">➡️ /familyspace</Link></li>
        <li><Link to="/familyteensimulator" className="text-blue-600 hover:underline">➡️ /familyteensimulator</Link></li>
        <li><Link to="/friendsspace" className="text-blue-600 hover:underline">➡️ /friendsspace</Link></li>
        <li><Link to="/index" className="text-blue-600 hover:underline">➡️ /index</Link></li>
        <li><Link to="/kidshome" className="text-blue-600 hover:underline">➡️ /kidshome</Link></li>
        <li><Link to="/legalmentions" className="text-blue-600 hover:underline">➡️ /legalmentions</Link></li>
        <li><Link to="/managerteamevaluation" className="text-blue-600 hover:underline">➡️ /managerteamevaluation</Link></li>
        <li><Link to="/marketresearchlanding" className="text-blue-600 hover:underline">➡️ /marketresearchlanding</Link></li>
        <li><Link to="/mentionslegales" className="text-blue-600 hover:underline">➡️ /mentionslegales</Link></li>
        <li><Link to="/mycolleagues" className="text-blue-600 hover:underline">➡️ /mycolleagues</Link></li>
        <li><Link to="/myfriends" className="text-blue-600 hover:underline">➡️ /myfriends</Link></li>
        <li><Link to="/notfound" className="text-blue-600 hover:underline">➡️ /notfound</Link></li>
        <li><Link to="/passwordreset" className="text-blue-600 hover:underline">➡️ /passwordreset</Link></li>
        <li><Link to="/payment" className="text-blue-600 hover:underline">➡️ /payment</Link></li>
        <li><Link to="/paymentsuccess" className="text-blue-600 hover:underline">➡️ /paymentsuccess</Link></li>
        <li><Link to="/privacypolicy" className="text-blue-600 hover:underline">➡️ /privacypolicy</Link></li>
        <li><Link to="/qvtmanagerdashboard" className="text-blue-600 hover:underline">➡️ /qvtmanagerdashboard</Link></li>
        <li><Link to="/simulatorhome" className="text-blue-600 hover:underline">➡️ /simulatorhome</Link></li>
        <li><Link to="/simulatorhub" className="text-blue-600 hover:underline">➡️ /simulatorhub</Link></li>
        <li><Link to="/simulatorselector" className="text-blue-600 hover:underline">➡️ /simulatorselector</Link></li>
        <li><Link to="/teamleaderdashboard" className="text-blue-600 hover:underline">➡️ /teamleaderdashboard</Link></li>
        <li><Link to="/teamspace" className="text-blue-600 hover:underline">➡️ /teamspace</Link></li>
        <li><Link to="/teensaievaluation" className="text-blue-600 hover:underline">➡️ /teensaievaluation</Link></li>
        <li><Link to="/teenscalendar" className="text-blue-600 hover:underline">➡️ /teenscalendar</Link></li>
        <li><Link to="/teenscheckin" className="text-blue-600 hover:underline">➡️ /teenscheckin</Link></li>
        <li><Link to="/teenscustomization" className="text-blue-600 hover:underline">➡️ /teenscustomization</Link></li>
        <li><Link to="/teensfamilyspace" className="text-blue-600 hover:underline">➡️ /teensfamilyspace</Link></li>
        <li><Link to="/teensfunsolutions" className="text-blue-600 hover:underline">➡️ /teensfunsolutions</Link></li>
        <li><Link to="/teensjournal" className="text-blue-600 hover:underline">➡️ /teensjournal</Link></li>
        <li><Link to="/teensparentalaccess" className="text-blue-600 hover:underline">➡️ /teensparentalaccess</Link></li>
        <li><Link to="/teenspersonalspace" className="text-blue-600 hover:underline">➡️ /teenspersonalspace</Link></li>
        <li><Link to="/teensplaylist" className="text-blue-600 hover:underline">➡️ /teensplaylist</Link></li>
        <li><Link to="/teensquickalert" className="text-blue-600 hover:underline">➡️ /teensquickalert</Link></li>
        <li><Link to="/unauthorized" className="text-blue-600 hover:underline">➡️ /unauthorized</Link></li>
        <li><Link to="/workplacecomparativesimulator" className="text-blue-600 hover:underline">➡️ /workplacecomparativesimulator</Link></li>
      </ul>
    </div>
  );
};

export default Sitemap;
