import { Heart, MessageCircle, Droplets, Moon, Leaf } from "lucide-react";

interface WelcomeMessageProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  { icon: MessageCircle, text: "I have a headache and feel tired" },
  { icon: Droplets, text: "Tips for staying hydrated" },
  { icon: Moon, text: "I'm having trouble sleeping" },
  { icon: Leaf, text: "Ways to manage daily stress" },
];

export function WelcomeMessage({ onSuggestionClick }: WelcomeMessageProps) {
  return (
    <div className="text-center space-y-8 py-8 animate-fade-in">
      <div className="space-y-4">
        <div className="w-20 h-20 mx-auto rounded-full wellness-gradient flex items-center justify-center shadow-lg">
          <Heart className="w-10 h-10 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Welcome to Your Wellness Guide
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            I'm here to help you understand your symptoms and provide general wellness guidance. 
            Tell me how you're feeling today.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground font-medium">
          Try asking about:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.text)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-colors duration-200"
            >
              <suggestion.icon className="w-4 h-4" />
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
