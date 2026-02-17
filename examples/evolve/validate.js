// Validates Strudel code using the actual Strudel transpiler + runtime.
// Catches both syntax errors (acorn) and runtime errors (invalid methods, etc.)
// Usage: node validate.js "code here"
// Exit 0 = valid, Exit 1 = error (prints error message)

(async () => {
  const code = process.argv[2];
  if (!code) {
    process.stdout.write("No code provided");
    process.exit(1);
  }

  try {
    const { evaluate } = await import('@strudel/transpiler');
    const { evalScope, Pattern } = await import('@strudel/core');
    await evalScope(
      import('@strudel/core'),
      import('@strudel/mini'),
      import('@strudel/tonal'),
    );
    // Stub .p() — it normally registers with the browser scheduler
    Pattern.prototype.p = function() { return this; };

    await evaluate(code);
    process.exit(0);
  } catch(e) {
    process.stdout.write(e.message);
    process.exit(1);
  }
})();
