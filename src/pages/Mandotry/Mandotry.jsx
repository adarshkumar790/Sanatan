import React from 'react';
import './Mandotry.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Images
import ClassRoom from '../../utils/images/Classroom.jpeg';
import Library from '../../utils/images/library.jpeg';
import Staff from '../../utils/images/Staff.jpeg';
import BoysBathroom from '../../utils/images/Boy.jpeg';
import GirlsBathroom from '../../utils/images/Girls.jpeg';
import ChemistryLab from '../../utils/images/Chemistry.jpg';
import PlayGround from '../../utils/images/Play.jpeg';
import Water from '../../utils/images/Water.jpeg';
import Transport from '../../utils/images/Bus.jpeg';

// Documents
import Rishikulsociety from '../../utils/images/rishikulsociety.pdf';
import Noc from '../../utils/images/NOC.pdf';
import Recognition from '../../utils/images/Recognition.pdf';
import firesafety from '../../utils/images/firesafety.pdf';
import buildingsafetycerficate from '../../utils/images/buildingsafetycerficate.pdf';
import water from '../../utils/images/water.pdf';
import Selfcertificate from '../../utils/images/selfcertificate.pdf';
import RoomAffiDavit from '../../utils/images/RoomAffiDavit.pdf';
import DrinkingWater from '../../utils/images/DrinkingWater.pdf';
import TestReportWater from '../../utils/images/TestReportWater.pdf';
import document11 from '../../utils/images/Audit.pdf';
import AffiDavit from '../../utils/images/AffiDavit.pdf';

// Results
import FeeDetails from '../../utils/images/FeeDetails.pdf';
import result3 from '../../utils/images/SMCJamuary.pdf';
import result5 from '../../utils/images/Strength.pdf';
import result4 from '../../utils/images/TeacherLists.pdf';
import result6 from '../../utils/images/NonTeacherList.pdf';
import PTA from '../../utils/images/PTA.pdf';
import AnualCalender from '../../utils/images/AnualCalender.pdf';
import AcademicCalender from '../../utils/images/AcademicCalendar.pdf';
import ClassStrength from "../../utils/images/ClassStrength.pdf";
import SexualHarassment from '../../utils/images/Sexual Harrassment Committee.pdf';
import SalaryNonTeaching from '../../utils/images/Salary of Non-Teaching Staff.pdf';
import Audit from '../../utils/images/Audit.pdf';
import TeacherSalary from '../../utils/images/TeacherSalary.pdf';
import SchoolSafetyandSecurityCommittee from '../../utils/images/SchoolSafetyandSecurityCommittee.pdf';

const school = [
  { id: 1, img: Staff, title: 'Staff Room' },
  { id: 2, img: ClassRoom, title: 'Class Room' },
  { id: 3, img: Water, title: 'Water Facility' },
  { id: 4, img: Library, title: 'Library' },
  { id: 5, img: GirlsBathroom, title: 'Girls Bathroom' },
  { id: 6, img: BoysBathroom, title: 'Boys Bathroom' },
  { id: 7, img: PlayGround, title: 'Playground' },
  { id: 8, img: Transport, title: 'Transport' },
  { id: 9, img: ChemistryLab, title: 'Chemistry & Physics Lab' },
];

const information = [
  { id: 1, title: 'NAME OF SCHOOL', description: 'SANATAN VIDYA NIKETAN' },
  { id: 2, title: 'AFFILIATION NO.', description: 'N/A' },
  { id: 3, title: 'SCHOOL CODE', description: 'N/A' },
  { id: 4, title: 'ADDRESS', description: 'Sanatan Road, Jamuary, Kanke, Ranchi, Jharkhand - 834 006' },
  { id: 5, title: 'PRINCIPAL NAME & QUALIFICATION', description: '' },
  { id: 6, title: 'EMAIL', description: 'sanatanvidya12@gmail.com' },
  { id: 7, title: 'CONTACT', description: '' },
];

const documents = [
  { id: 1, name: 'SOCIETY REGISTRATION CERTIFICATE', url: Rishikulsociety },
  { id: 2, name: 'NOC BY STATE GOVT.', url: Noc },
  { id: 3, name: 'RECOGNITION CERTIFICATE', url: Recognition },
  { id: 4, name: 'FIRE SAFETY CERTIFICATE', url: firesafety },
  { id: 5, name: 'BUILDING SAFETY CERTIFICATE', url: buildingsafetycerficate },
  { id: 6, name: 'NON-PROPRIETARY AFFIDAVIT', url: AffiDavit },
  { id: 7, name: 'WATER & SANITATION CERTIFICATE', url: water },
  { id: 8, name: '3 YEARS AUDIT REPORT', url: document11 },
  { id: 9, name: 'SELF CERTIFICATION', url: Selfcertificate },
  { id: 10, name: 'ROOM DETAILS AFFIDAVIT', url: RoomAffiDavit },
  { id: 11, name: 'DRINKING WATER CERTIFICATE', url: DrinkingWater },
  { id: 12, name: 'DRINKING WATER TEST REPORT', url: TestReportWater },
  { id: 13, name: 'SCHOOL SAFETY AND SECURITY COMMITTEE', url: SchoolSafetyandSecurityCommittee },
];

const results = [
  { id: 1, name: 'SEXUAL HARASSMENT COMMITTEE', url: SexualHarassment },
  { id: 2, name: 'FEE STRUCTURE', url: FeeDetails },
  { id: 3, name: 'ANNUAL CALENDAR', url: AnualCalender },
  { id: 4, name: 'SCHOOL MANAGEMENT COMMITTEE (SMC)', url: result3 },
  { id: 5, name: 'TEACHER LIST', url: result4 },
  { id: 6, name: 'TEACHER SALARY', url: TeacherSalary },
  { id: 7, name: 'NON-TEACHING STAFF SALARY', url: SalaryNonTeaching },
  { id: 8, name: 'STUDENT STRENGTH', url: result5 },
  { id: 9, name: 'PARENT TEACHER ASSOCIATION', url: PTA },
  { id: 10, name: 'ACADEMIC CALENDAR', url: AcademicCalender },
  { id: 11, name: 'CLASS STRENGTH', url: ClassStrength },
  { id: 12, name: 'LAST 6 MONTHS AUDIT', url: Audit },
];

const additionalData = [
  { id: 1, title: 'PRINCIPAL', description: '1' },
  { id: 2, title: 'TOTAL TEACHERS', description: '12' },
  { id: 3, title: 'TGT', description: '05' },
  { id: 4, title: 'PRT', description: '06' },
  { id: 5, title: 'NTT', description: '04' },
  { id: 6, title: 'STUDENT:TEACHER RATIO', description: '20:1' },
  { id: 7, title: 'SPECIAL EDUCATION', description: 'NA' },
];

const infrastructure = [
  { id: 1, title: 'TOTAL CAMPUS AREA', description: '8000 Sq/m' },
  { id: 2, title: 'INTERNET FACILITY', description: 'YES' },
];

const Mandotry = () => {
  const handleDownload = (url) => {
    if (url) window.open(url, '_blank');
    else alert('Document not available for download');
  };

  const renderTable = (title, data) => (
    <div className='container my-5'>
      <h2 className='text-center mb-5'>{title}</h2>
      <div className="table-responsive">
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>SL NO.</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDownloadTable = (title, data) => (
    <div className='container my-5'>
      <h2 className='text-center mb-5'>{title}</h2>
      <div className="table-responsive">
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>SL NO.</th>
              <th>DOCUMENT</th>
              <th>DOWNLOAD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.url ? (
                    <button className='btn btn-primary btn-sm' onClick={() => handleDownload(item.url)}>Download</button>
                  ) : (
                    <span className='text-muted'>Not available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="about-page">
      <header className='height-75 bg-dark text-light d-flex align-items-center justify-content-center text-center'>
        <div className='container'>
          <h1 className='fw-semibold'>Mandatory Disclosure</h1>
          <p className='mt-3'>
            "Mandatory Disclosure" provides essential institutional details ensuring transparency and regulatory compliance.
          </p>
        </div>
      </header>

      {renderTable("A : GENERAL INFORMATION", information)}
      {renderDownloadTable("B : DOCUMENTS AND INFORMATION", documents)}
      {renderDownloadTable("C : RESULT AND ACADEMICS", results)}
      {renderTable("D : STAFF (TEACHING)", additionalData)}
      {renderTable("E : SCHOOL INFRASTRUCTURE", infrastructure)}

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          <div className="row g-4">
            {school.map((item) => (
              <div key={item.id} className='col-12 col-md-6 col-lg-4'>
                <Link to="/gallery" className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect border-0'>
                    <Card.Img variant="top" src={item.img} style={{ objectFit: 'cover', height: '200px' }} />
                    <Card.Body className='d-flex flex-column align-items-center'>
                      <Card.Title className='text-center'>{item.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mandotry;
