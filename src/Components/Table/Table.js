import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {datas} from "../data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#C7DEE9',
    color: "#23516E",
    fontWeight: '700',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:'#7B7B7B'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} 
    style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: "700px", borderRadius: 20}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{"fontWeight":"700"}}>
            <StyledTableCell align="center">Fax ID</StyledTableCell>
            <StyledTableCell align="center">Case ID</StyledTableCell>
            <StyledTableCell align="center">Fax Status</StyledTableCell>
            <StyledTableCell align="center">Verified</StyledTableCell>
            <StyledTableCell align="center">Main Fax ID</StyledTableCell>
            <StyledTableCell align="center">Fax Date</StyledTableCell>
            <StyledTableCell align="center">Fax Time</StyledTableCell>
            <StyledTableCell align="center">Sender Fax #</StyledTableCell>
            <StyledTableCell align="center">OCR Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {datas.map((data) => (
            <StyledTableRow key={data.name}>             
              <StyledTableCell align="center"><a href='/dashboard'>{data.faxid}</a></StyledTableCell>
              <StyledTableCell align="center">{data.caseid}</StyledTableCell>
              <StyledTableCell align="center">{data.faxstatus}</StyledTableCell>
              <StyledTableCell align="center">{data.verified}</StyledTableCell>
              <StyledTableCell align="center">{data.mainfaxid}</StyledTableCell>
              <StyledTableCell align="center">{data.faxdate}</StyledTableCell>
              <StyledTableCell align="center">{data.faxtime}</StyledTableCell>
              <StyledTableCell align="center">{data.senderfax}</StyledTableCell>
              <StyledTableCell align="center">{data.status}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
