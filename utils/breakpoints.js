const breakpoints = [768, 1200];

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);