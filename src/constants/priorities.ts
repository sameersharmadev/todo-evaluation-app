import { Priority } from "../types/user";

export const DEFAULT_PRIORITIES: Priority[] = [
  {
    id: "critical",
    label: "Critical",
    color: "#f44336",
    order: 1
  },
  {
    id: "high", 
    label: "High",
    color: "#ff9800",
    order: 2
  },
  {
    id: "medium",
    label: "Medium", 
    color: "#9c27b0",
    order: 3
  },
  {
    id: "low",
    label: "Low",
    color: "#4caf50", 
    order: 4
  }
];