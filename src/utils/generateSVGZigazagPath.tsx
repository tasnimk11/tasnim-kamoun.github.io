export const generateZigZagPath = (
  startX: number,
  startY: number,
  verticalLength: number,
  horizontalLength: number,
  cornerRadius: number,
  repetitions: number
): string => {
  let path = `M ${startX} ${startY} \n`; // Starting point
  let currentX = startX;
  let currentY = startY;
  let nextCurveX = 0;
  // Generate zigzag pattern
  for (let i = 0; i < repetitions; i++) {
    // Vertical line
    currentY += verticalLength + cornerRadius * 2 * (i === 0 ? 0 : 1);
    path += `V ${currentY} \n`;

    // Add curve to horizontal
    const direction = i % 2 === 0 ? 1 : -1; // Alternates left/right
    const curveX = (i == 0 ? currentX : nextCurveX) + direction * cornerRadius;
    path += `Q ${i == 0 ? currentX : nextCurveX} ${
      currentY + cornerRadius
    } ${curveX} ${currentY + cornerRadius} \n`;

    // Horizontal line
    currentX += direction * horizontalLength;
    path += `H ${currentX} \n`;

    // Add curve back to vertical
    nextCurveX = currentX + direction * cornerRadius;
    path += `Q ${currentX + cornerRadius * direction} ${
      currentY + cornerRadius
    } ${nextCurveX} ${currentY + 2 * cornerRadius} \n`;
  }

  currentY += verticalLength + cornerRadius * 2 * (repetitions - 1);
  path += `V ${currentY} \n`;

  return path.trim();
};
