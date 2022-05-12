import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { NoteModel } from './note-model'

const Notes = () => {
  const [notes, setNotes] = useState<NoteModel[] | undefined>(undefined)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      res.json().then((json) => setNotes(json))
    }).catch((error) => {
      console.log(error)
    })
  })
  return (
        <div>
            <h2>Notes</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label='Notes Table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>Note ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes?.map((note: NoteModel, key: number) => {
                          return (
                                <TableRow key={key}>
                                    <TableCell>{note.id}</TableCell>
                                    <TableCell>{note.userId}</TableCell>
                                    <TableCell>{note.title}</TableCell>
                                    <TableCell>{note.body}</TableCell>
                                </TableRow>
                          )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
  )
}

export default Notes
