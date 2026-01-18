import { AlertTriangle } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <div className="disclaimer-banner rounded-xl p-4 flex gap-3">
      <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-medium text-foreground mb-1">
          Medical Disclaimer
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This wellness assistant provides general health guidance only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns. In emergencies, call 911 or your local emergency services.
        </p>
      </div>
    </div>
  );
}
