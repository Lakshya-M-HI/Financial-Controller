export type ConfidenceLevel =
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "UNAVAILABLE";

export function getConfidenceLevel(
  score: number
): ConfidenceLevel {
  if (score >= 0.8) {
    return "HIGH";
  }

  if (score >= 0.5) {
    return "MEDIUM";
  }

  if (score > 0) {
    return "LOW";
  }

  return "UNAVAILABLE";
}