"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "assistant";
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi, I am Abhay's portfolio assistant. Ask me anything about his skills, projects, or experience!"
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);


        try {
            const response = await fetch("https://portfolio-chatbot-backend-t9qj.onrender.com/chat", {
                // const response = await fetch ("http://localhost:8000/chat",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            const data = await response.json();
            setMessages([...updatedMessages, { role: "assistant", content: data.response }]);
        } catch (error) {
            setMessages([...updatedMessages, { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">


                    <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-2">
                        <Bot size={20} />
                        <span className="font-semibold">Abhay's Assistant</span>
                    </div>


                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                <div className="shrink-0">
                                    {msg.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
                                </div>
                                <div className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2">
                                <Bot size={18} />
                                <div className="bg-muted text-sm px-3 py-2 rounded-xl">Typing...</div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>


                    <div className="p-3 border-t border-border flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask me anything..."
                            className="flex-1 text-sm bg-muted rounded-lg px-3 py-2 outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading}
                            className="bg-primary text-primary-foreground rounded-lg px-3 py-2 hover:opacity-90 disabled:opacity-50"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}