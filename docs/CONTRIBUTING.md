# Contributing to AREA

Thanks for your interest in contributing to the AREA project.

Here are a couple of rules to follow to contribute correctly to the project.

> [!NOTE]
> Issues and Pull Requests are currently locked down to Contributors only.

## Language

All communication on GitHub (issues, PRs, commits) must be in English only.

## Coding conventions

We have strict formatting and linting rules to assure everyone has the same coding conventions.
CI is also used to verify that these coding conventions are respected before entering the main branch.

## Git

Knowledge of git-rebase [(useful guide)](https://git-rebase.io) might be required to contribute.

### Commits

All commits shall follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) specification with a few modifications.

In short, here are the tags that are useful:
- **feat**: New addition
- **fix**: Bug fix
- **ref**: Refactoring, improving current code
- **imp**: **Styling only** improvements
- **chore**: All "other" tasks (bumping versions, initialization)
- **docs**: Documentation changes (Markdown)
- **ci**: CI/CD related changes (GHA)
- **build**: Building related (npm, go build, etc...)
- No breaking changes with exclamation point.
- Scopes are allowed.

You can also add a scope after this "tag": example,
`fix(backend)`

Commits must always be descriptive without being too much.

A commit must always do one thing. If your commit touches the backend, the frontend and the CI all at once, it's probably too much for a single commit and we might ask you to split it into multiple.

We also invite you to use the body field to get more in depth into your commit.

If you create two commits related to the same task, we might also ask you to squash or amend both commits together.

Below are a few examples of good commits, and bad commits.

- ✔️ Good commit: `fix: wrong status code on /status` (We clearly know it's fixing a bug)
- ✔️ Good commit: `docs: contributing guide` (Pretty clear what it's adding)
- ❌ Bad commit: `fix: backend bug` (Absolutely not idea where that bug was, is or did)
- ❌ Bad commit: `feat: initial backend structure composition, added to the CI & created a documentation file` (Too descriptive and also this commits should probably be split into at least 3 or more)
- ❌ Bad commit: `Change the backend logic` (Missing conventional commit "tag", too superficial)

### Issues

Every task must have an issue.

Descriptions are important as they describe the issue in detail.

Labels are very important on issues, they allow the user to know what field the issue is.

Add a milestone on every issue, to determine the priority of the task.

### Pull requests

After your code is done, you must create a Pull Request for it to be merged into the project.

Titles must be very descriptive.

In the description, [closing keywords](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) must be used for related issues.

Labels are also important on Pull Requests.

Milestones must **NOT** be assigned to Pull Requests, they make the milestones page much more confusing with both issues and PRs mixed in.

## Releases

Releases are done via Git tags.

A new version is tagged on every "milestone" the team has reached in the project.

The version that is then published on the releases page is done so automatically by the CI, which will also publish the artifacts.

## LLM / AI

The following rules are for LLMs / AI to contribute to this project.

You **MUST ALWAYS** add a trailer to your commit message must contain the following mention:
```
Assisted-by: <model-name>
```

You **MUST NOT** add too many comments or useless comments.
Comments must stay descriptive without being too much.
Too many comments kill the descriptive part of the comment.

You **MUST NOT** communicate with other people using the LLM's output directly.
Make sure to understand it before communicating it to others.
