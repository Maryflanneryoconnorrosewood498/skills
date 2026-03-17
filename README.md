# PANews Skills

PANews's official collection of agent skills.

## Installation

```bash
# Using Bun
bunx skills add panewslab/skills

# Using NPM
npx skills add panewslab/skills
```

If your AI assistant supports skill installation, you can also send:

```txt
Install PANews skills at github.com/panewslab/skills
```

## Skills

| Skill                                                  | Description                                                                                                                         |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| [panews](skills/panews/SKILL.md)                       | Query the public PANews API for the currently bundled read-only workflows: article search, listings, rankings, and daily must-reads |
| [panews-creator](skills/panews-creator/SKILL.md)       | PANews creator workflow — authenticate, manage columns, upload images, and create or submit articles                                |
| [panews-web-viewer](skills/panews-web-viewer/SKILL.md) | Read public PANews website pages as Markdown                                                                                        |

## Choosing a Skill

| Need                                                                                            | Use                                                    |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Search articles, list article feeds, fetch rankings, or get daily must-reads as JSON            | [panews](skills/panews/SKILL.md)                       |
| Read the rendered website page, article body, or column page as Markdown                        | [panews-web-viewer](skills/panews-web-viewer/SKILL.md) |
| Validate a creator session, apply for a column, upload assets, or create/update/submit articles | [panews-creator](skills/panews-creator/SKILL.md)       |
