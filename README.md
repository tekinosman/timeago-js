# timeago-js

**timeago-js** is a small (<1 kb) Javascript library with multilingual support that automatically updates date elements with user friendly statements, such as "just now", "n seconds ago" etc. It offers mul 

## How to install

1. `git clone https://github.com/osmanjtekin/timeago-js.git`

2. Add `type="module"` to the script tag, and `import {timeago} from "./helpers/timeago-js/timeago.js"` to the js file.

## Usage

By default, the `timeago()` function:
- Targets all elements with the `time` class.
- Retrieves the timestamp value (in seconds) from the `data-timestamp` attribute of the targeted elements.
- Sets the refresh rate to 30 seconds
- Sets the language to English

Custom values can be set with: `timeago(<class_name>, <refresh_rate>, <language>)`.

## Adding a language

To include a new language, add a new array containing the localized string to [languages.js](languages.js):

    const <language>_<territory> = [
        "<now|one second ago>",    "<seconds ago>",
        "<one minute ago>",        "<minutes ago>",
        "<one hour ago>",          "<hours ago>",
        "<one day ago>",           "<days ago>",
        "<one week ago>",          "<weeks ago>",
        "<one month ago>",         "<months ago>",
        "<one year ago>",          "<years ago>"
      ];

Where:
- **language** is an [ISO 639 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
- **territory** is an [ISO 3166 country code](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes). Some examples being `it_IT`, `en_GB`, `fr_FR`.
- *odd* values are the singular and *even* values are the plural form

Make sure you add `<language>_<territory>` to export.

Then either open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
