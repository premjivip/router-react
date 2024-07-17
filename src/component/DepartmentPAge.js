import React from 'react'
// import "./department.css"
import '../css/department.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
function DepartmentPAge() {

    const departments = [
        { name: 'AIDS', count: 120 },
        { name: 'ECE', count: 150 },
        { name: 'AI&IOT', count: 110 },
        { name: 'Medical Electronic', count: 110 },
        { name: 'BME', count: 110 },
        { name: 'EEE', count: 100 },
        { name: 'MECH', count: 130 },
        { name: 'EIE', count: 90 },
        { name: 'AIML', count: 110 },
        { name: 'AICS', count: 80 },
        { name: 'CSE', count: 200 }
      ];
    return (
      <>
    <div className="department-container">
      <h1>Department</h1>
      <table className="department-table">
        <thead>
            <tr><td>Department</td>
            <td>Count</td></tr>
        </thead>
        <tbody>
            {
                departments.map((dep,index)=>(
                    <tr key={index}>
                        <td>{dep.name}</td>
                        <td>{dep.count}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DepartmentPAge
