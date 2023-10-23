import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StyledTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow style={{ background: '#4ac776' }}>
            <TableCell align="left"  style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Song</TableCell>
            <TableCell align="left" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Artist</TableCell>
            <TableCell align="left" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Album</TableCell>
            <TableCell align="center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Play Song</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row" style={{ fontSize: '1.2rem', color: 'black' }}> {row.name} </TableCell>
              <TableCell align="left"style={{ fontSize: '1.2rem', color: 'black' }}>{row.artist}</TableCell>
              <TableCell align="left"style={{ fontSize: '1.2rem', color: 'black' }}>{row.album}</TableCell>
              <TableCell align="center">
                <button style={{ background: 'none', border: '0px solid #4ac776', cursor: 'pointer' }} onClick={() => { window.open('https://open.spotify.com/track/' + row.id) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#4ac776" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
