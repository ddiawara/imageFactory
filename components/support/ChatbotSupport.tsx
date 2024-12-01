"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export function ChatbotSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! How can I help you today with Image Factory?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "I'm processing your request. How else can I assist you?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="h-[600px] flex flex-col">
      <ScrollArea className="flex-1 p-4 border rounded-lg mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar className="h-8 w-8">
                {message.type === "bot" ? (
                  <Bot className="h-5 w-5" />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </Avatar>
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}