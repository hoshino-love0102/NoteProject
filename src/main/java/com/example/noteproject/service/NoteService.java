package com.example.noteproject.service;

import com.example.noteproject.dto.NoteRequestDTO;
import com.example.noteproject.model.Note;
import com.example.noteproject.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note createNote(NoteRequestDTO dto) {
        Note note = new Note();
        note.setContent(dto.getContent());
        return noteRepository.save(note);
    }

    public Note getNote(Long id) {
        return noteRepository.findById(id).orElse(null);
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
}
