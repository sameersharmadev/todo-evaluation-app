import { memo, useContext } from "react";
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box,
  SelectChangeEvent 
} from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { Priority } from "../types/user";
import { PriorityBadge } from "./PriorityBadge";

interface PrioritySelectProps {
  selectedPriority?: Priority;
  onPriorityChange: (priority: Priority | undefined) => void;
  label?: string;
  disabled?: boolean;
}

export const PrioritySelect = memo(({ 
  selectedPriority, 
  onPriorityChange, 
  label = "Priority",
  disabled = false 
}: PrioritySelectProps) => {
  const { user } = useContext(UserContext);
  const priorities = user.priorities || [];

  const handleChange = (event: SelectChangeEvent<string>) => {
    const priorityId = event.target.value;
    if (priorityId === "") {
      onPriorityChange(undefined);
    } else {
      const priority = priorities.find(p => p.id === priorityId);
      onPriorityChange(priority);
    }
  };

  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedPriority?.id || ""}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {priorities
          .sort((a, b) => a.order - b.order)
          .map((priority) => (
            <MenuItem key={priority.id} value={priority.id}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PriorityBadge priority={priority} size="small" />
              </Box>
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
});