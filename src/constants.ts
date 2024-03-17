export const ERROR_MESSAGES: any = {
  INVALID_FILE_TYPE: "File type not supported",
  FILE_TOO_LARGE: "File is too large",
  FILE_NOT_ACCESSIBLE: "File not found or not accessible",
  INCOMPATIBLE_COMMANDS_PALETTE:
    "--color, --grayscale and --duotone cannot be requested together",
  INCOMPATIBLE_COMMANDS_ROTATION:
    "--rotate-90d, --rotate-90d and --rotate-90d cannot be requested together",
  UNSUPPORTED_RESOLUTION:
    "please use the format [width]x[height] within the constraints 1 < width < 100 and 1 < height < 100",
  INVALID_BLOCK_ID:
    "Block ids should be between 1 and 9 based on the number of blocks",
  INVALID_BLOCK_COUNT: "Block ids should be either 2, 4, 6, or 9",
};
