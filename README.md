# windows-timestamp

Function that create a JavaScript Date from a Windows Timestamp.

#### Installation

```
npm install windows-timestamp
```

## Usage

#### Paramenters

Any valid windows timestamp. Accept both string and integer.

#### Throw Error

* TypeError when the argument is not a number
* Error when the number is too big

#### Example

```
cont win_time    = require('windows-timestamp')
```
```
let js_date      = win_time('131461446367662144')
```
```
let js_same_date = new Date( win_time('131461446367662144').getTime() )
```
```
let js_day       = win_time('131461446367662144').getDay()
```

## Test

for testing the package just run

```
npm test
```