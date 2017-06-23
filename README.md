# Windows Timestamp :alarm_clock:

Function that create a JavaScript Date from a Windows Timestamp.

#### Installation

```
npm install windows-timestamp
```

## Usage

#### Parameter

Any valid windows timestamp. Accepts both strings and integers.

#### Example

``` javascript
const win_time = require('windows-timestamp')

let js_date = win_time('131461446367662144')

let js_same_date = new Date(win_time('131461446367662144').getTime())

let js_day = win_time('131461446367662144').getDay()
```

## Test

```
npm test
```
