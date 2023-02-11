import gql from 'graphql-tag';
export const greetingsQuery = gql`

query greetingsQuery {
    messages {
      data {
      id
      attributes{
        greetings
      }
    }    
    }
  }
`