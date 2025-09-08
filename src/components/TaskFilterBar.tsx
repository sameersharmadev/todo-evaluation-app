import { memo, useContext } from "react";
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
  SelectChangeEvent,
  Paper
} from "@mui/material";
import { 
  TodayRounded, 
  DateRangeRounded, 
  CalendarTodayRounded,
  ClearRounded
} from "@mui/icons-material";
import { TaskContext } from "../contexts/TaskContext";
import { DateFilter, DateRange } from "../types/user";
import { formatDateForInput } from "../utils/dateUtils";

interface TaskFilterBarProps {
  dateFilter: DateFilter;
  onDateFilterChange: (filter: DateFilter) => void;
  customDateRange: DateRange;
  onCustomDateRangeChange: (range: DateRange) => void;
  onClearFilters: () => void;
}

export const TaskFilterBar = memo(({
  dateFilter,
  onDateFilterChange,
  customDateRange,
  onCustomDateRangeChange,
  onClearFilters
}: TaskFilterBarProps) => {
  const { search } = useContext(TaskContext);

  const handleDateFilterChange = (event: SelectChangeEvent<DateFilter>) => {
    onDateFilterChange(event.target.value as DateFilter);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = event.target.value ? new Date(event.target.value) : null;
    onCustomDateRangeChange({ ...customDateRange, start: startDate });
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDate = event.target.value ? new Date(event.target.value) : null;
    onCustomDateRangeChange({ ...customDateRange, end: endDate });
  };

  const hasActiveFilters = dateFilter !== "all" || search !== "";

  return (
    <FilterContainer>
      <FilterRow>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Date Filter</InputLabel>
          <Select
            value={dateFilter}
            onChange={handleDateFilterChange}
            label="Date Filter"
          >
            <MenuItem value="all">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarTodayRounded fontSize="small" />
                All Tasks
              </Box>
            </MenuItem>
            <MenuItem value="today">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TodayRounded fontSize="small" />
                Today
              </Box>
            </MenuItem>
            <MenuItem value="this-week">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DateRangeRounded fontSize="small" />
                This Week
              </Box>
            </MenuItem>
            <MenuItem value="custom">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DateRangeRounded fontSize="small" />
                Custom Range
              </Box>
            </MenuItem>
          </Select>
        </FormControl>

        {hasActiveFilters && (
          <Chip
            label="Clear Filters"
            variant="outlined"
            size="small"
            deleteIcon={<ClearRounded />}
            onDelete={onClearFilters}
            onClick={onClearFilters}
          />
        )}
      </FilterRow>

      {dateFilter === "custom" && (
        <CustomDateRow>
          <TextField
            label="Start Date"
            type="date"
            size="small"
            value={customDateRange.start ? formatDateForInput(customDateRange.start) : ""}
            onChange={handleStartDateChange}
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: 150 }}
          />
          <TextField
            label="End Date"
            type="date"
            size="small"
            value={customDateRange.end ? formatDateForInput(customDateRange.end) : ""}
            onChange={handleEndDateChange}
            InputLabelProps={{ shrink: true }}
            sx={{ minWidth: 150 }}
          />
        </CustomDateRow>
      )}
    </FilterContainer>
  );
});

const FilterContainer = styled(Paper)`
  padding: 16px;
  margin: 16px 0;
  border-radius: 12px;
  background: ${({ theme }) => theme.darkmode ? "#1e1e2e" : "#f8f9fa"};
  border: 1px solid ${({ theme }) => theme.darkmode ? "#44479cb7" : theme.primary + "20"};
`;

const FilterRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const CustomDateRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`;