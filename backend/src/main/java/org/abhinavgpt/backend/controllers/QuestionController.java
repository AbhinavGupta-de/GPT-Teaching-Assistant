package org.abhinavgpt.backend.controllers;

import org.abhinavgpt.backend.services.IQuestionService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class QuestionController {

    private final IQuestionService questionService;

    public QuestionController(IQuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("")
    public String dummyResponse() {
        return "Welcome to the backend API of the GPT Teaching Assistant. This is a dummy response.";
    }

    @PostMapping("")
    public ResponseEntity<String> helpWithDoubts(@RequestBody String question) {
        return ResponseEntity.ok(questionService.clearDoubts(question));
    }
}
