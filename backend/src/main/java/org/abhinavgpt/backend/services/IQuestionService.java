package org.abhinavgpt.backend.services;

public sealed interface IQuestionService permits QuestionService {
    public String clearDoubts(String question);
}
