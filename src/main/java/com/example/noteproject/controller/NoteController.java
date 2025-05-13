package com.example.noteproject.controller;

import com.example.noteproject.dto.NoteRequestDTO;
import com.example.noteproject.model.Note;
import com.example.noteproject.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/note")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @PostMapping
    public Note createNote(@RequestBody NoteRequestDTO dto) {
        return noteService.createNote(dto);
    }

    @GetMapping("/{id}")
    public Note getNote(@PathVariable Long id) {
        return noteService.getNote(id);
    }

    @DeleteMapping("/{id}")
    public String deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return "노트 삭제 완료";
    }
}
