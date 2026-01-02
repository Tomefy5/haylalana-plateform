'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Mic, Bot, User, Sparkles, MoreVertical, Phone, Video, Paperclip, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock types
type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
};

const SUGGESTED_QUESTIONS = [
    "Comment déclarer une naissance ?",
    "Mes droits en cas de licenciement",
    "Créer une entreprise à Madagascar",
    "Litige foncier : par où commencer ?"
];

export default function AdvisorPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (content: string) => {
        if (!content.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: content,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue('');

        // Simulate bot typing/response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "Ceci est une réponse simulée. Dans la version finale, je serai connecté à une IA juridique performante pour répondre précisément à votre question sur : " + content,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(inputValue);
        }
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        // Mock recording logic would go here
    };

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-sm border border-haylalana-border-primary overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-haylalana-border-primary p-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-haylalana-brand/10 flex items-center justify-center border border-haylalana-brand/20">
                            <Bot className="h-6 w-6 text-haylalana-brand" />
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div>
                        <h1 className="font-bold text-haylalana-heading-primary text-lg leading-none">Conseiller Haylalàna</h1>
                        <p className="text-xs text-haylalana-text-tertiary mt-1">En ligne • Assistant Juridique IA</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-haylalana-text-tertiary hover:text-haylalana-brand">
                        <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-haylalana-text-tertiary hover:text-haylalana-brand">
                        <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-haylalana-text-tertiary hover:text-haylalana-brand">
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-6 scroll-smooth" ref={scrollRef}>
                {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                        <div className="h-20 w-20 bg-haylalana-brand/5 rounded-full flex items-center justify-center mb-6 ring-1 ring-haylalana-brand/20">
                            <Sparkles className="h-10 w-10 text-haylalana-brand" />
                        </div>
                        <h2 className="text-2xl font-bold text-haylalana-heading-primary mb-2">Comment puis-je vous aider ?</h2>
                        <p className="text-haylalana-text-secondary max-w-md mb-8">
                            Posez-moi vos questions juridiques en toute confidentialité. Je peux vous informer sur vos droits, les procédures administratives et plus encore.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                            {SUGGESTED_QUESTIONS.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSendMessage(q)}
                                    className="text-left p-4 rounded-xl bg-white border border-haylalana-border-primary hover:border-haylalana-brand/50 hover:shadow-md transition-all group"
                                >
                                    <span className="text-sm font-medium text-haylalana-text-secondary group-hover:text-haylalana-brand transition-colors">
                                        {q}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex w-full max-w-[85%] sm:max-w-[75%] gap-2 animate-in slide-in-from-bottom-2 duration-300",
                                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border",
                                msg.role === 'user' ? "bg-haylalana-brand text-white border-transparent" : "bg-white text-haylalana-brand border-haylalana-brand/20"
                            )}>
                                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-5 w-5" />}
                            </div>

                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm relative text-sm leading-relaxed",
                                msg.role === 'user'
                                    ? "bg-haylalana-brand text-white rounded-tr-none"
                                    : "bg-white text-haylalana-text-primary border border-gray-100 rounded-tl-none"
                            )}>
                                {msg.content}
                                <span className={cn(
                                    "text-[10px] absolute bottom-1 right-3",
                                    msg.role === 'user' ? "text-white/70" : "text-gray-400"
                                )}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-haylalana-border-primary">
                <div className="flex items-end gap-2 max-w-4xl mx-auto">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-haylalana-brand shrink-0">
                        <Paperclip className="h-5 w-5" />
                    </Button>

                    <div className="relative flex-1">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Écrivez votre message..."
                            className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 pl-4 pr-12 py-3 text-sm focus:border-haylalana-brand focus:ring-1 focus:ring-haylalana-brand outline-none min-h-[50px] max-h-[150px]"
                            rows={1}
                            style={{ height: '52px' }} // Initial height
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 bottom-1.5 text-gray-400 hover:text-haylalana-brand"
                        >
                            <Smile className="h-5 w-5" />
                        </Button>
                    </div>

                    {inputValue.trim() ? (
                        <Button
                            onClick={() => handleSendMessage(inputValue)}
                            className="h-[50px] w-[50px] rounded-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shrink-0 shadow-md transition-all"
                        >
                            <Send className="h-5 w-5 ml-0.5" />
                        </Button>
                    ) : (
                        <Button
                            onClick={toggleRecording}
                            className={cn(
                                "h-[50px] w-[50px] rounded-full shrink-0 shadow-md transition-all border-2",
                                isRecording
                                    ? "bg-red-50 border-red-500 text-red-500 animate-pulse"
                                    : "bg-white border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white"
                            )}
                        >
                            <Mic className={cn("h-6 w-6", isRecording && "fill-current")} />
                            <span className="sr-only">Vocal</span>
                        </Button>
                    )}
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-gray-400">
                        L'IA peut faire des erreurs. Vérifiez les informations importantes.
                    </p>
                </div>
            </div>
        </div>
    );
}
