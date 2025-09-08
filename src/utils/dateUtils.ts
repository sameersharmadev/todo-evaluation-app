import { DateFilter, DateRange } from "../types/user";

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isThisWeek = (date: Date): boolean => {
  const now = new Date();
  const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));
  
  startOfWeek.setHours(0, 0, 0, 0);
  endOfWeek.setHours(23, 59, 59, 999);
  
  return date >= startOfWeek && date <= endOfWeek;
};

export const isInDateRange = (date: Date, range: DateRange): boolean => {
  if (!range.start || !range.end) return true;
  
  const start = new Date(range.start);
  const end = new Date(range.end);
  
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  
  return date >= start && date <= end;
};

export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};