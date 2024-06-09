package org.abhinavgpt.backend.controllers;

import org.abhinavgpt.backend.services.IQuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
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
    public ResponseEntity<Map<String, String>> helpWithDoubts(@RequestBody String question) {
        String answer = questionService.clearDoubts(question);
        Map<String, String> response = new HashMap<>();
        response.put("answer", answer);
        return ResponseEntity.ok(response);
    }
}
