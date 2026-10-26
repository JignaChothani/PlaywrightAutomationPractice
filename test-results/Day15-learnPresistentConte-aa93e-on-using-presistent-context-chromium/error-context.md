# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day15/learnPresistentContext.spec.ts >> bypass authentication using presistent context
- Location: tests/Day15/learnPresistentContext.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: write EPIPE
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Basic Auth' })

```