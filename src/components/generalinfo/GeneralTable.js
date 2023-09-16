import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const row = [
    {
        first : 'Email',
        second : 'hassan123@gmail.com',
        third : 'Department',
        fourth :'IT Consultant'
    },
    {
        first : 'Phone',
        second : '+92 859 43403',
        third : 'CNIC',
        fourth :'33333-3333333-3'
    },
    {
        first : 'Gender',
        second : 'Male',
        third : 'Created at',
        fourth :'Nov 9, 2023'
    },

]

export default function GeneralTable() {
  return (
    <TableContainer sx={{ overflow: "auto" ,maxWidth: 650, }} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
         
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ border: 'none',borderCollapse: 'collapse',}} component="th" scope="row">
                {row.first}
              </TableCell>
              <TableCell sx={{ border: 'none',borderCollapse: 'collapse'}} align="left">{row.second}</TableCell>
              <TableCell sx={{ border: 'none',borderCollapse: 'collapse'}} align="left">{row.third}</TableCell>
              <TableCell sx={{ border: 'none',borderCollapse: 'collapse'}} align="left">{row.fourth}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}