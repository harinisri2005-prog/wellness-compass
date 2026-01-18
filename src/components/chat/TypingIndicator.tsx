import { Heart } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-full wellness-gradient flex items-center justify-center">
        <Heart className="w-5 h-5 text-primary-foreground" />
      </div>

      <div className="chat-bubble-assistant rounded-2xl rounded-bl-md shadow-sm px-5 py-4">
        <div className="flex gap-1.5">
          <span 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot"
            style={{ animationDelay: "0ms" }}
          />
          <span 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot"
            style={{ animationDelay: "160ms" }}
          />
          <span 
            className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot"
            style={{ animationDelay: "320ms" }}
          />
        </div>
      </div>
    </div>
  );
}
