# react-easy-list

# THIS LIB IS NOT DONE YET

> Easy list system based on ReactNative&#x27;s FlatList API

[![NPM](https://img.shields.io/npm/v/react-easy-list.svg)](https://www.npmjs.com/package/react-easy-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Why
The final objective of this lib is to build simple lists without dealing with maps, keys, last item and empty list logics

## Install

```bash
npm install --save react-easy-list
```

## Usage

```jsx
import React from 'react'
import EaseList from 'react-easy-list'

const Example = () => {
  <EasyList
    data={[
      { id: 1, title: 'Hello', content: 'World' },
      { id: 2, title: 'World', content: 'Hello' },
    ]}
    renderItem={({ title, content }) => (
      <>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </>
    )}
    ListHeaderComponent={<p>---- This is the beginning ----</p>}
    ListFooterComponent={<p>---- This is the end ----</p>}
  />
}
```

## License

MIT © [JoaoBGusmao](https://github.com/JoaoBGusmao)
