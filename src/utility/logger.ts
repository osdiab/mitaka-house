import { createLogger, format, transports } from "winston";
export const logger = createLogger({
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [new transports.Console()]
});
