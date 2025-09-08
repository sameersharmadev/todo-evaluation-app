import { memo } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Priority } from "../types/user";
import { getFontColor } from "../utils";

interface PriorityBadgeProps {
  priority: Priority;
  size?: "small" | "medium";
}

export const PriorityBadge = memo(({ priority, size = "small" }: PriorityBadgeProps) => {
  const circleSize = size === "small" ? 8 : 12;
  const fontSize = size === "small" ? "0.75rem" : "0.875rem";

  return (
    <PriorityContainer>
      <PriorityCircle 
        priorityColor={priority.color} 
        circleSize={circleSize}
      />
      <PriorityLabel 
        variant="caption" 
        fontSize={fontSize}
        translate="no"
      >
        {priority.label}
      </PriorityLabel>
    </PriorityContainer>
  );
});

const PriorityContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PriorityCircle = styled.div<{ priorityColor: string; circleSize: number }>`
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  border-radius: 50%;
  background-color: ${({ priorityColor }) => priorityColor};
  flex-shrink: 0;
`;

const PriorityLabel = styled(Typography)<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
`;