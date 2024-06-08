package org.abhinavgpt.backend.services;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public final class QuestionService implements IQuestionService {

    private final ChatClient chatClient;

    @Value("classpath:/prompts/help_with_doubt.txt")
    private Resource helpWithDoubtsPromptTemplateString;

    public QuestionService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    @Override
    public String clearDoubts(final String question) {
        PromptTemplate promptTemplate = new PromptTemplate(helpWithDoubtsPromptTemplateString);
        Prompt prompt = promptTemplate.create(Map.of("question", question));
        return chatClient.prompt(prompt).call().content();
    }
}
