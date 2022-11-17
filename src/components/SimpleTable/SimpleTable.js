import React from 'react'
import "./SimpleTable.css"

const SimpleTable = (props) => {
  return (
        <table className="simple-table">
            <thead>
                <th>Jméno</th>
                <th>Bio</th>
                <th className="center">Průběžné hodnocení</th>
            </thead>
            <tbody>
                {props.data.students.map((item, i) => 
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.bio}</td>
                        <td className="center">{item.averageScore} %</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default SimpleTable