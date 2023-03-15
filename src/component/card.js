import React from 'react';

function Card(props) {
  
  return (
    <div className='card'>
      <table>
        <tr>
          <th colSpan={3}>
            <h1 className='card-name'>{props.name}</h1>
          </th>
        </tr>
        <tr>
          <td>
            <h3>Umur</h3>
          </td>
          <td>:</td>
          <td>
            <h3>{props.umur} tahun</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3>Pekerjaan</h3>
          </td>
          <td>:</td>
          <td><h3>{props.job}</h3></td>
        </tr>
        <tr>
          <td>
            <h3>Lulusan</h3>
          </td>
          <td>:</td>
          <td>
            <h3>{props.lulusan}</h3>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Card;
