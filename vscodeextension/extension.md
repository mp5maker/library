## Creating VS Code Extension ##

**Installation**
```bash
npm --install -g yo generator-code
yo code
New Code Snippets
```


> Questionnaire

? Folder name for import or none for new: blank

? What's the name of your extension? photonbs4

? What's the identifier of your extension? photon

? What's the description of your extension? Simple Bootstrap 4 Snippet Generator

? What's your publisher name (more info: https://code.visualstudio.com/docs/tools/vscecli#_publishing-extensions)? photon

Enter the language for which the snippets should appear. The id is an identifier and is single, lower-case name such as 'php', 'javascript'
? Language id: html


```bash
cd photonbs4
```

### Bullet Points ###
* Added Repository 
* Added Icon
* Modified Snippets

**package.json**
```json
{
    "name": "photonbs4",
    "displayName": "photonbs4",
    "description": "Simple Bootstrap 4 Snippet Generator",
    "version": "0.0.1",
    "publisher": "photon",
    "engines": {
        "vscode": "^1.28.0"
    },
    "categories": [
        "Snippets"
    ],
     "repository": {
        "type": "git",
        "url": "https://github.com/mp5maker/library"
    },
    "icon": "icon.png",
    "contributes": {
        "snippets": [
            {
                "language": "html",
                "path": "./snippets/snippets.json"
            }
            {
                "language": "javascript",
                "path": "./snippets/snippets.json"
            }
            {
                "language": "javascriptreact",
                "path": "./snippets/snippets.json"
            }
            {
                "language": "php",
                "path": "./snippets/snippets.json"
            }
        ]
    }
}
```

**CHANGELOG.md**
```bash
# Change Log
All notable changes to the "photonbs4" extension will be documented in this file.

## [1.0.0]
- Initial release of photonbs4 snippets
```

```bash
cd snippets
```

**snippets.json**
* "\\" Escape the double quotes
* "\t" :: Tab Space
* $0 :: Denotes final cursor position
* $1, $2, $3 :: Indicates tab stops
* ${1:foo}, ${1:foo ${2:bar}} :: Tab Stops with placeholders, Nested Placeholders
* ${index} :: Multiple Tabstops and Multiline Snippets
* ${1|one|two|three} :: Choices

**For HTML**
```json
{
    "Photon Button Group": {
        "prefix": "!buttongroup",
        "body": [
            "<div class=\"btn-group\">",
                "\t<button type=\"button\" class=\"btn btn-primary\">$1</button>",
                "\t<button type=\"button\" class=\"btn btn-primary\">$2</button>",
                "\t<button type=\"button\" class=\"btn btn-primary\">$3</button>",
            "</div>",
            "$0"
        ]
    },
    "Photon Button Badge": {
        "prefix": "!buttonbadge",
        "body": [
            "<button type=\"button\" class=\"btn btn-primary\">",
            "\t<span>$1</span>",
            "\t<span class=\"badge badge-light\">$2</span>",
            "</button>",
            "$0"
        ]
    },
    "Photon Pagination": {
        "prefix": "!pagination",
        "body": [
            "<ul class=\"pagination\">",
            "\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>",
            "\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">$1</a></li>",
            "\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">$2</a></li>",
            "\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">$3</a></li>",
            "\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>",
            "</ul>",
            "$0"
        ]
    }
}
```

**For JavaScript**
```bash
{
    "Photon Javascript Loop": {
        "prefix": "!jsloop",
        "body": [
            "for (let ${index}=0; ${index} < ${array}.length; ${index}++) {",
            "\t${element} = ${array}[${index}]",
            "\t$0",
            "}"
        ]
    },
    "Photon Javascript Console Log": {
        "prefix": "!console",
        "body": [
            "console.${1|log,warning,error|}('$2');",
            "$0"
        ]
    }
}
```

**Copy the Snippets Folder [photonbs4]**
* Copy the photonbs4 snippets folder to the extensions folders
* Should be in the Users folder [In windows]

```bash
C:\Users\User\.vscode\extensions
```

### To publish the code ###
```bash
npm install -g vsce
vsce publish
vsce create-publisher (publisher-name)
vsce login (publisher-name)
```