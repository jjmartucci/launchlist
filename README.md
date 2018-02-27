# Launch List

# An Extensible Go-Live Checklist for the Modern Web

I and every web developer I know has a hacked up checklist of things to do before launching a website, for a number of reasons:

1. It’s hard to remember everything you need to do before launching a site.
2. Some parts of site development are difficult to automate.

But there are problems with keeping your own checklists:

1. You don’t know what you don’t know.
2. Standards, best practices, and tools keep changing.

## I Just Want the Checklist

The launchlist default rules are saved as a [markdown file here](/launchlist-cli/launchlist.checklist.md).

## I Want to Build My Own List

If you create a `launchlist.json` file at the root of your project, you can customize the generated checklist. The Launchlist config has three properties:
- `extends`: Extends another configuration. If you leave this blank it will load `launchlist-default`.
- `listItems`: Add any custom rules here, or change the properties of existing rules.
- `remove`: Remove any rules by name.

An example config:

```
    {
        extends: ['launchlist-default', 'my-own-list'],
        listItems: [
            {
                "name": "no-console-logs",
                "category": "Code Quality"
            },
            {
                "category": "JavaScript",
                "description": "Write better example titles!",
                "name": "my-own-rule",
                "title": "Make Everything Awesome"
            }
        ],
        remove: ['placeholder']
    }
```

## CLI Options

| Flag          | Parameter |              Default |                                           Description |
| ------------- | :-------: | -------------------: | ----------------------------------------------------: |
| --filename    |  string   | launchlist.checklist |                      Name of markdown file generated. |
| --includeName |   none    |                false | Appends the name of the list item to the description. |
| --force       |   none    |                false |                         Overwrite existing checklist. |
