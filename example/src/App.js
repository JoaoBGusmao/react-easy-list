import React from 'react'

import EasyList from 'react-easy-list'
import 'react-easy-list/dist/index.css'

const Render = ({ title, children }) => (
  <div style={{ marginBottom: 15 }}>
    <h1>{title}</h1>

    <div style={{ backgroundColor: '#EEEEEE', marginBottom: 15 }}>
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <Render title="Basic Usage">
        <EasyList
          data={[
            { title: 'Hello', content: 'World' },
            { title: 'World', content: 'Hello' },
          ]}
          renderItem={({ title, content }) => (
            <>
              <h1>{title}</h1>
              <h2>{content}</h2>
            </>
          )}
        />
      </Render>

      <Render title="Item Separator">
        <EasyList
          data={[
            { id: 1, title: 'Hello', content: 'World' },
            { id: 2, title: 'World', content: 'Hello' },
            { id: 3, title: 'World', content: 'Hello' },
          ]}
          renderItem={({ title, content }) => (
            <>
              <h1>{title}</h1>
              <h2>{content}</h2>
            </>
          )}
          ItemSeparatorComponent={<div style={{ borderBottom: '1px solid #000' }} />}
        />
      </Render>

      <Render title="Custom Key Extractor function">
        <EasyList
          keyExtractor={({ id, title }) => `item-${id}-${title}`}
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
        />
      </Render>

      <Render title="Empty List default component">
        <EasyList
          data={[]}
          renderItem={({ title, content }) => (
            <>
              <h1>{title}</h1>
              <h2>{content}</h2>
            </>
          )}
          ListEmptyComponent={() => <p>This list is EMPTY</p>}
        />
      </Render>

      <Render title="List Footer and Header Component">
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
          ListHeaderComponent={() => (
            <p>---- This is the beginning ----</p>
          )}
          ListFooterComponent={() => (
            <p>---- This is the end ----</p>
          )}
        />
      </Render>

      <Render title="Custom Wrapper Style">
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
          style={{ backgroundColor: 'yellow' }}
        />
      </Render>
    </>
  )
}

export default App
