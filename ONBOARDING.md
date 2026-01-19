# Quick Start for Contributors

Get your first contribution merged in under 10 minutes!

## Setup (2 minutes)

```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/cn-cert-hub.git
cd cn-cert-hub
npm install

# Start dev server
npm run dev
```

Open http://localhost:4321 to see the site.

## Your First Contribution

### Option A: Add a Practice Question (5 minutes)

1. **Pick a certification** from `src/data/questions/`
2. **Add a question** following this format:

```typescript
{
  id: 'cka-061',           // Increment the last ID
  domain: 'Storage',       // Must match an existing domain
  question: 'Your question here?',
  options: [
    'Option A',
    'Option B',
    'Option C',
    'Option D',
  ],
  correctAnswer: 0,        // 0-3 (index of correct option)
  explanation: 'Why this is correct.\n\nLearn more: [Docs](https://...)',
  difficulty: 'medium',    // easy, medium, hard
  tags: ['storage', 'pv'],
}
```

3. **Validate your changes:**

```bash
npm run validate:data
```

4. **Submit PR!**

### Option B: Add a Study Resource (5 minutes)

1. **Edit resource file** in `src/data/resources/{certification}.ts`
2. **Add to appropriate section:**

```typescript
{
  title: 'Resource Title',
  url: 'https://example.com',
  description: 'Brief description',
  type: 'course',
  isPaid: false,
}
```

3. **Validate:**

```bash
npm run validate:data
```

4. **Submit PR!**

### Option C: Fix a Typo or Translation (3 minutes)

1. **Edit translation file** in `src/i18n/locales/{en,es,pt}/`
2. **Sync pages:**

```bash
npm run sync-i18n
```

3. **Submit PR!**

## Before Submitting Any PR

```bash
# Run full validation (recommended)
npm run prepare-pr
```

This runs:

- TypeScript type checking
- ESLint linting
- Prettier format check
- Unit tests (127+)
- Data validation
- Production build

## What Happens After You Submit

```
Your PR
   │
   ├─→ CI runs automatically
   │     ├─ TypeScript ✓
   │     ├─ ESLint ✓
   │     ├─ Prettier ✓
   │     ├─ Tests ✓
   │     ├─ Data Validation ✓
   │     └─ Build ✓
   │
   ├─→ Auto-labels applied
   │
   ├─→ Reviewer assigned
   │
   └─→ Merged & Deployed! 🚀
```

## Key Files Reference

| What you want to do | File location                  |
| ------------------- | ------------------------------ |
| Add questions       | `src/data/questions/{cert}.ts` |
| Add resources       | `src/data/resources/{cert}.ts` |
| Edit translations   | `src/i18n/locales/{lang}/`     |
| Add best practices  | `src/data/best-practices/`     |

## Need Help?

- 📚 [Full Contributing Guide](CONTRIBUTING.md)
- 💬 [Open a Discussion](https://github.com/jeanlopezxyz/cn-cert-hub/discussions)
- 📝 [Create an Issue](https://github.com/jeanlopezxyz/cn-cert-hub/issues/new/choose)

---

Happy contributing! 🎉
