function logString(value: unknown): void {
  if (typeof value === "string") {
    console.log(value);
  } else {
    console.error("Error: Input is not a string.");
  }
}

