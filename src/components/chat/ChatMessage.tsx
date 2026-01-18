import { cn } from "@/lib/utils";
import { User, Heart } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
          isUser ? "bg-primary" : "wellness-gradient"
        )}
      >
        {isUser ? (
          <User className="w-5 h-5 text-primary-foreground" />
        ) : (
          <Heart className="w-5 h-5 text-primary-foreground" />
        )}
      </div>

      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl",
          isUser
            ? "chat-bubble-user rounded-br-md"
            : "chat-bubble-assistant rounded-bl-md shadow-sm"
        )}
      >
        <div className="text-[15px] leading-relaxed whitespace-pre-wrap">
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-5 ml-1 bg-current animate-pulse-gentle rounded-sm" />
          )}
        </div>
      </div>
    </div>
  );
}
