# flatten-dir-cli

[![Current npm package version](https://img.shields.io/npm/v/@hutsoninc/flatten-dir-cli.svg)](https://www.npmjs.com/package/@hutsoninc/flatten-dir-cli)

Recursively flatten a directory (moves all files from subfolders into the one folder).

## Installation

`npm install --global @hutsoninc/flatten-dir-cli`

## Usage

```
$ flatten --help

  Recursively flatten a directory

  Usage
    $ flatten <directory-to-flatten>
```

```
$ tree
.
├── stuff
│   ├── things.txt
│   ├── 1
│   │   ├── things.txt
│   │   └── more-things.txt
│   └── 2
│       └── another-thing.txt
│ ...

$ flatten stuff

$ tree
.
├── stuff
│   ├── things.txt
│   ├── things-1.txt
│   ├── more-things.txt
│   └── another-thing.txt
│ ...
```

## Related

- [flatten-dir](https://github.com/hutsoninc/flatten-dir) - API for this module

## License

MIT © [Hutson Inc](https://www.hutsoninc.com)