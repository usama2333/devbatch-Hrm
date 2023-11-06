import * as React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { row } from './style';

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