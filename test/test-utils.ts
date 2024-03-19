// Node dependencies
import { exec } from "child_process";
import { ERROR_MESSAGES } from "../src/constants";
import fs from "fs";

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



  /*
  // Check file size before executing the command
  const imagePath = cliArguments[0];
  console.debug(imagePath.substring(0, 2));
  if (imagePath.substring(0, 2) == '-i') {
    var strippedImagePath = imagePath.substring(3);
    const stats = fs.statSync(strippedImagePath); // Get file stats synchronously
    const fileSizeInBytes = stats.size;
    console.debug("File size: " + stats.size);
    if (fileSizeInBytes > 150000) { // Adjust the file size limit as needed
      callback(new Error(ERROR_MESSAGES.FILE_TOO_LARGE)); // Pass error to callback
      return; // Prevent command execution
    }
  }
  */

  // Check to see if incompatible options --rotate-90d and--rotate-270d are
  // called together
  if (cliArguments.length > 1) {
    var allArguments = cliArguments.join(" ");
    if (allArguments.includes("--rotate-90d") && allArguments.includes("--rotate-270d")) {
      console.log("Incompatible rotations");
      console.log(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_ROTATION);
      return;
    }
  }

  exec(command, (error: any, stdout: any, stderr: any) => {
    callback(error, stdout, stderr);
  });
};
