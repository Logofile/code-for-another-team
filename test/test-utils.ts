// Node dependencies
import { exec } from "child_process";

/**
 * Execute CLI commands and passes the output to the callback method
 * @param cliArguments The CLI arguments
 * @param callback The callback method that will process the CLI's output
 */
export const execute = (
  cliArguments: string[],
  callback: (error?: any, stdout?: any, stderr?: any) => void
) => {
  const command = `npx tsx src/index.ts ${cliArguments.join(" ")}`;
  exec(command, (error: any, stdout: any, stderr: any) => {
    callback(error, stdout, stderr);
  });
};