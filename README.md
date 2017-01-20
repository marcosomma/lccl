#lccl
###light custom console log

[![NPM](https://nodei.co/npm/lccl.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lccl/)

[![](https://img.shields.io/badge/autor-Marco%20Somma-lightgrey.svg?style=flat)](https://www.npmjs.com/~marcosomma) [![](https://img.shields.io/badge/license-ISC-blue.svg?style=flat)](https://www.npmjs.com/package/lccl) [![npm](https://img.shields.io/npm/dm/lccl.svg)](https://www.npmjs.com/package/lccl)

[![npm version](https://badge.fury.io/js/lccl.svg)](http://badge.fury.io/js/lccl) [![](https://img.shields.io/badge/version-STABLE-brightgreen.svg)](https://www.npmjs.com/package/lccl) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/832e3c61acc34426aee5f20380d3fa87)](https://www.codacy.com/app/makso1979/lccl?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcosomma/lccl&amp;utm_campaign=Badge_Grade) [![Code Climate](https://codeclimate.com/github/marcosomma/lccl/badges/gpa.svg)](https://codeclimate.com/github/marcosomma/lccl) [![Test Coverage](https://codeclimate.com/github/marcosomma/lccl/badges/coverage.svg)](https://codeclimate.com/github/marcosomma/lccl) [![CircleCI branch](https://img.shields.io/circleci/project/marcosomma/lccl/master.svg)](https://circleci.com/gh/marcosomma/lccl/tree/master)

**Install**

`npm install lccl `

**Use**

`const lccl = require('lccl')(<LOG Prefix>,<show date>,<show gray scale>)`

**Samples**

- **Single Prefix for all log methods**
```javascript
const lcclUnique = require('lccl')('TEXT UNIQUE FOR ALL OF THEM', false, true)
const lcclUniqueWithDate = require('lccl')('TEXT UNIQUE FOR ALL OF THEM',true, true)

lcclUnique.log('TEST LOG') // # TEXT UNIQUE FOR ALL OF THEM # TEST LOG
lcclUnique.info('TEST INFO') // # TEXT UNIQUE FOR ALL OF THEM # TEST INFO
lcclUnique.warn('TEST WARN') // # TEXT UNIQUE FOR ALL OF THEM # TEST WARN
lcclUnique.error('TEST ERROR') // # TEXT UNIQUE FOR ALL OF THEM # TEST ERROR

lcclUniqueWithDate.log('TEST LOG') // 2017-01-20 at 22:41:43 >> # TEXT SPECIFIC INFO # TEST LOG
lcclUniqueWithDate.info('TEST INFO') // 2017-01-20 at 22:41:43 >> # TEXT SPECIFIC INFO # TEST INFO
lcclUniqueWithDate.warn('TEST WARN') // 2017-01-20 at 22:41:43 >> # TEXT SPECIFIC INFO # TEST WARN
lcclUniqueWithDate.error('TEST ERROR') // 2017-01-20 at 22:41:43 >> # TEXT SPECIFIC INFO # TEST ERROR

```


- **Specified Prefix for each log methods**
```javascript
const lcclConfig = {
 info: 'TEXT SPECIFIC INFO',
 warn: 'TEXT SPECIFIC WARNING',
 error: 'TEXT SPECIFIC ERROR'
}
const lcclSpecific = require('lccl')(lcclConfig, false, true)
const lcclSpecificWithDate = require('lccl')(lcclConfig, true, true)

lcclSpecific.log('TEST LOG') // # TEXT SPECIFIC INFO # TEST LOG
lcclSpecific.info('TEST INFO') // # TEXT SPECIFIC INFO # TEST INFO
lcclSpecific.warn('TEST WARN') // # TEXT SPECIFIC WARNING # TEST WARN
lcclSpecific.error('TEST ERROR') // # TEXT SPECIFIC ERROR # TEST ERROR

lcclSpecificWithDate.log('TEST LOG') // 2017-01-20 at 09:27:14 >> # TEXT SPECIFIC INFO # TEST LOG
lcclSpecificWithDate.info('TEST INFO') // 2017-01-20 at 09:27:14 >> # TEXT SPECIFIC INFO # TEST INFO
lcclSpecificWithDate.warn('TEST WARN') // 2017-01-20 at 09:27:14 >> # TEXT SPECIFIC WARNING # TEST WARN
lcclSpecificWithDate.error('TEST ERROR') // 2017-01-20 at 09:27:14 >> # TEXT SPECIFIC ERROR # TEST ERROR

```
