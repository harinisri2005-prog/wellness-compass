import { useRef, useEffect } from "react";
import { useWellnessChat } from "@/hooks/useWellnessChat";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { MedicalDisclaimer } from "@/components/chat/MedicalDisclaimer";
import { WelcomeMessage } from "@/components/chat/WelcomeMessage";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { Button } from "@/components/ui/button";
import { Heart, RotateCcw } from "lucide-react";

export default function Index() {
  const { messages, isLoading, sendMessage, clearChat } = useWellnessChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const showTypingIndicator = isLoading && 
    (messages.length === 0 || messages[messages.length - 1]?.role === "user");

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex-shrink-0 wellness-gradient px-4 py-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary-foreground">
                Wellness Guide
              </h1>
              <p className="text-xs text-primary-foreground/80">
                Your personal health companion
              </p>
            </div>
          </div>
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearChat}
              className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          )}
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Disclaimer */}
          <div className="mb-6">
            <MedicalDisclaimer />
          </div>

          {/* Messages or Welcome */}
          <div className="space-y-6">
            {messages.length === 0 ? (
              <WelcomeMessage onSuggestionClick={handleSuggestionClick} />
            ) : (
              <>
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                    isStreaming={
                      isLoading &&
                      index === messages.length - 1 &&
                      message.role === "assistant"
                    }
                  />
                ))}
                {showTypingIndicator && <TypingIndicator />}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="flex-shrink-0 border-t border-border bg-card/80 backdrop-blur-sm px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSend={sendMessage} disabled={isLoading} />
          <p className="text-xs text-muted-foreground text-center mt-3">
            For emergencies, call 911. This is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
