// Node dependencies
import { ExecException, exec } from "child_process";

/**
 * Execute CLI commands and passes the output to the callback method
	@@ -8,10 +8,10 @@ import { exec } from "child_process";
 */
export const execute = (
  cliArguments: string[],
  callback: (error: ExecException | null, stdout: string, stderr: string) => void
) => {
  const command = `npx tsx src/index.ts ${cliArguments.join(" ")}`;
  exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
    callback(error, stdout, stderr);
  });
};
