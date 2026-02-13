// Graphql Complete Guide - Content Data
const graphqlCompleteGuideContentData = `<h1 id="graphql-complete-end-to-end-guide">GraphQL: Complete End-to-End Guide</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#basic-part">Basic Part</a></li>
<li><a href="#intermediate-part">Intermediate Part</a></li>
<li><a href="#advanced-part">Advanced Part</a></li>
</ul>
<hr>
<h2 id="basic-part">Basic Part</h2>
<h3 id="what-is-graphql">What is GraphQL?</h3>
<p>GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. Created by Facebook in 2012 and open-sourced in 2015, it provides a complete and understandable description of the data in your API.</p>
<h3 id="core-concepts">Core Concepts</h3>
<p><strong>1. Query Language</strong></p>
<ul>
<li>Client specifies exactly what data it needs</li>
<li>Single endpoint for all data operations</li>
<li>Strongly typed schema</li>
</ul>
<p><strong>2. Type System</strong></p>
<ul>
<li>Every GraphQL service defines types</li>
<li>Types describe what data can be queried</li>
<li>Self-documenting API</li>
</ul>
<h3 id="graphql-vs-rest">GraphQL vs REST</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────────────┐
│                  REST vs GraphQL                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  REST API:                                              │
│  GET /users/1          → User data                      │
│  GET /users/1/posts    → User&#x27;s posts                   │
│  GET /posts/1/comments → Post comments                  │
│                                                         │
│  (3 separate requests, possible over/under-fetching)    │
│                                                         │
│  ─────────────────────────────────────────────────      │
│                                                         │
│  GraphQL API:                                           │
│  POST /graphql                                          │
│  {                                                      │
│    user(id: 1) {                                        │
│      name                                               │
│      posts {                                            │
│        title                                            │
│        comments { text }                                │
│      }                                                  │
│    }                                                    │
│  }                                                      │
│                                                         │
│  (1 request, exact data needed)                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
</code></pre>
<h3 id="basic-schema-definition">Basic Schema Definition</h3>
<p>A GraphQL schema defines the structure of your API:</p>
<pre><code class="language-graphql">
# Define custom types
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  published: Boolean!
}

# Define what queries are available
type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
}
</code></pre>
<p><strong>Scalar Types:</strong></p>
<ul>
<li><code>String</code> - Text data</li>
<li><code>Int</code> - 32-bit integer</li>
<li><code>Float</code> - Floating-point number</li>
<li><code>Boolean</code> - true/false</li>
<li><code>ID</code> - Unique identifier</li>
</ul>
<p><strong>Type Modifiers:</strong></p>
<ul>
<li><code>!</code> - Non-nullable (required)</li>
<li><code>[Type]</code> - List of items</li>
<li><code>[Type!]!</code> - Non-null list of non-null items</li>
</ul>
<h3 id="basic-queries">Basic Queries</h3>
<p><strong>Simple Query:</strong></p>
<pre><code class="language-graphql">
query {
  user(id: &quot;1&quot;) {
    name
    email
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;user&quot;: {
      &quot;name&quot;: &quot;John Doe&quot;,
      &quot;email&quot;: &quot;john@example.com&quot;
    }
  }
}
</code></pre>
<p><strong>Query with Nested Data:</strong></p>
<pre><code class="language-graphql">
query {
  user(id: &quot;1&quot;) {
    name
    posts {
      title
      published
    }
  }
}
</code></pre>
<h3 id="basic-mutations">Basic Mutations</h3>
<p>Mutations modify data on the server:</p>
<pre><code class="language-graphql">
# Schema definition
type Mutation {
  createUser(name: String!, email: String!): User
  updateUser(id: ID!, name: String): User
  deleteUser(id: ID!): Boolean
}

# Mutation request
mutation {
  createUser(name: &quot;Jane Doe&quot;, email: &quot;jane@example.com&quot;) {
    id
    name
    email
  }
}
</code></pre>
<h3 id="graphql-request-flow">GraphQL Request Flow</h3>
<pre><code class="language-">
┌──────────────┐
│   Client     │
└──────┬───────┘
       │
       │ 1. Send Query/Mutation
       │
       ▼
┌──────────────────────┐
│   GraphQL Server     │
│                      │
│  ┌────────────────┐  │
│  │ 2. Parse Query │  │
│  └────────┬───────┘  │
│           │          │
│  ┌────────▼───────┐  │
│  │ 3. Validate    │  │
│  │    Against     │  │
│  │    Schema      │  │
│  └────────┬───────┘  │
│           │          │
│  ┌────────▼───────┐  │
│  │ 4. Execute     │  │
│  │    Resolvers   │  │
│  └────────┬───────┘  │
│           │          │
└───────────┼──────────┘
            │
            ▼
    ┌───────────────┐
    │   Data        │
    │   Sources     │
    │ (DB, APIs)    │
    └───────┬───────┘
            │
            │ 5. Return Data
            │
            ▼
    ┌───────────────┐
    │   Client      │
    └───────────────┘
</code></pre>
<h3 id="setting-up-a-basic-graphql-server">Setting Up a Basic GraphQL Server</h3>
<p><strong>Node.js with Apollo Server:</strong></p>
<pre><code class="language-bash">
npm install apollo-server graphql
</code></pre>
<pre><code class="language-javascript">
const { ApolloServer, gql } = require(&#x27;apollo-server&#x27;);

// Type definitions
const typeDefs = gql&#96;
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
&#96;;

// Sample data
const users = [
  { id: &#x27;1&#x27;, name: &#x27;John Doe&#x27;, email: &#x27;john@example.com&#x27; },
  { id: &#x27;2&#x27;, name: &#x27;Jane Smith&#x27;, email: &#x27;jane@example.com&#x27; }
];

// Resolvers
const resolvers = {
  Query: {
    users: () =&gt; users,
    user: (parent, args) =&gt; users.find(u =&gt; u.id === args.id)
  }
};

// Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) =&gt; {
  console.log(&#96;Server ready at ${url}&#96;);
});
</code></pre>
<h3 id="basic-client-setup">Basic Client Setup</h3>
<p><strong>Using Apollo Client (React):</strong></p>
<pre><code class="language-bash">
npm install @apollo/client graphql
</code></pre>
<pre><code class="language-javascript">
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from &#x27;@apollo/client&#x27;;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: &#x27;http://localhost:4000&#x27;,
  cache: new InMemoryCache()
});

// Query
const GET_USERS = gql&#96;
  query GetUsers {
    users {
      id
      name
      email
    }
  }
&#96;;

// Component
function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {data.users.map(user =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// App
function App() {
  return (
    &lt;ApolloProvider client={client}&gt;
      &lt;Users /&gt;
    &lt;/ApolloProvider&gt;
  );
}
</code></pre>
<hr>
<h2 id="intermediate-part">Intermediate Part</h2>
<h3 id="advanced-schema-design">Advanced Schema Design</h3>
<h4 id="arguments-and-input-types">Arguments and Input Types</h4>
<pre><code class="language-graphql">
# Input types for complex arguments
input CreateUserInput {
  name: String!
  email: String!
  age: Int
  address: AddressInput
}

input AddressInput {
  street: String!
  city: String!
  country: String!
  zipCode: String
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}

# Queries with filtering
type Query {
  users(
    limit: Int = 10
    offset: Int = 0
    filter: UserFilterInput
  ): UserConnection!
}

input UserFilterInput {
  name: String
  email: String
  ageMin: Int
  ageMax: Int
}
</code></pre>
<h4 id="interfaces-and-unions">Interfaces and Unions</h4>
<p><strong>Interfaces</strong> - Shared fields across types:</p>
<pre><code class="language-graphql">
interface Node {
  id: ID!
  createdAt: String!
  updatedAt: String!
}

type User implements Node {
  id: ID!
  createdAt: String!
  updatedAt: String!
  name: String!
  email: String!
}

type Post implements Node {
  id: ID!
  createdAt: String!
  updatedAt: String!
  title: String!
  content: String!
  author: User!
}

type Query {
  node(id: ID!): Node
}
</code></pre>
<p><strong>Unions</strong> - Type that could be one of several types:</p>
<pre><code class="language-graphql">
union SearchResult = User | Post | Comment

type Query {
  search(query: String!): [SearchResult!]!
}

# Query with inline fragments
query {
  search(query: &quot;GraphQL&quot;) {
    ... on User {
      name
      email
    }
    ... on Post {
      title
      content
    }
    ... on Comment {
      text
      author { name }
    }
  }
}
</code></pre>
<h3 id="resolvers-deep-dive">Resolvers Deep Dive</h3>
<h4 id="resolver-signature">Resolver Signature</h4>
<pre><code class="language-javascript">
fieldName: (parent, args, context, info) =&gt; {
  // parent: Result from parent resolver
  // args: Arguments provided to the field
  // context: Shared across all resolvers (auth, db, etc.)
  // info: Query AST and schema info
  return result;
}
</code></pre>
<h4 id="resolver-chain">Resolver Chain</h4>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│          Resolver Chain Execution               │
└─────────────────────────────────────────────────┘

Query {
  user(id: &quot;1&quot;) {      ← 1. Query.user resolver
    name               ← 2. User.name resolver
    posts {            ← 3. User.posts resolver
      title            ← 4. Post.title resolver
      author {         ← 5. Post.author resolver
        name           ← 6. User.name resolver
      }
    }
  }
}

Execution Order:
1. Query.user(parent, { id: &quot;1&quot; }, context, info)
   → Returns: { id: &quot;1&quot;, name: &quot;John&quot;, ... }

2. User.name({ id: &quot;1&quot;, name: &quot;John&quot;, ... }, args, context, info)
   → Returns: &quot;John&quot;

3. User.posts({ id: &quot;1&quot;, ... }, args, context, info)
   → Returns: [{ id: &quot;p1&quot;, title: &quot;...&quot;, authorId: &quot;1&quot; }]

4. Post.title({ id: &quot;p1&quot;, title: &quot;GraphQL&quot;, ... }, ...)
   → Returns: &quot;GraphQL&quot;

And so on...
</code></pre>
<h4 id="advanced-resolver-patterns">Advanced Resolver Patterns</h4>
<pre><code class="language-javascript">
const resolvers = {
  Query: {
    user: async (parent, { id }, { dataSources }) =&gt; {
      return await dataSources.userAPI.getUserById(id);
    },
    
    users: async (parent, { limit, offset, filter }, { dataSources }) =&gt; {
      return await dataSources.userAPI.getUsers({ limit, offset, filter });
    }
  },

  User: {
    // Field resolver - computed field
    fullName: (user) =&gt; {
      return &#96;${user.firstName} ${user.lastName}&#96;;
    },

    // Resolver with data fetching
    posts: async (user, args, { dataSources }) =&gt; {
      return await dataSources.postAPI.getPostsByAuthorId(user.id);
    },

    // Resolver with arguments
    recentPosts: async (user, { limit = 5 }, { dataSources }) =&gt; {
      const posts = await dataSources.postAPI.getPostsByAuthorId(user.id);
      return posts.slice(0, limit);
    }
  },

  Mutation: {
    createUser: async (parent, { input }, { dataSources, user }) =&gt; {
      // Check authentication
      if (!user) throw new Error(&#x27;Not authenticated&#x27;);
      
      // Validate input
      if (!input.email.includes(&#x27;@&#x27;)) {
        throw new Error(&#x27;Invalid email&#x27;);
      }
      
      // Create user
      return await dataSources.userAPI.createUser(input);
    }
  },

  // Interface resolver
  Node: {
    __resolveType(obj) {
      if (obj.email) return &#x27;User&#x27;;
      if (obj.title) return &#x27;Post&#x27;;
      return null;
    }
  },

  // Union resolver
  SearchResult: {
    __resolveType(obj) {
      if (obj.email) return &#x27;User&#x27;;
      if (obj.title) return &#x27;Post&#x27;;
      if (obj.text) return &#x27;Comment&#x27;;
      return null;
    }
  }
};
</code></pre>
<h3 id="pagination-patterns">Pagination Patterns</h3>
<h4 id="offset-based-pagination">Offset-Based Pagination</h4>
<pre><code class="language-graphql">
type Query {
  users(limit: Int = 10, offset: Int = 0): UserConnection!
}

type UserConnection {
  users: [User!]!
  totalCount: Int!
  hasMore: Boolean!
}
</code></pre>
<pre><code class="language-javascript">
// Resolver
Query: {
  users: async (parent, { limit, offset }, { db }) =&gt; {
    const users = await db.users.find().skip(offset).limit(limit);
    const totalCount = await db.users.countDocuments();
    
    return {
      users,
      totalCount,
      hasMore: offset + limit &lt; totalCount
    };
  }
}
</code></pre>
<h4 id="cursor-based-pagination-relay-style">Cursor-Based Pagination (Relay Style)</h4>
<pre><code class="language-graphql">
type Query {
  users(first: Int, after: String, last: Int, before: String): UserConnection!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type UserEdge {
  node: User!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
</code></pre>
<pre><code class="language-javascript">
// Resolver
Query: {
  users: async (parent, { first, after }, { db }) =&gt; {
    const limit = first || 10;
    const query = after 
      ? { _id: { $gt: after } }
      : {};
    
    const users = await db.users.find(query).limit(limit + 1);
    const hasNextPage = users.length &gt; limit;
    const nodes = hasNextPage ? users.slice(0, -1) : users;
    
    const edges = nodes.map(node =&gt; ({
      node,
      cursor: node._id.toString()
    }));
    
    return {
      edges,
      pageInfo: {
        hasNextPage,
        hasPreviousPage: !!after,
        startCursor: edges[0]?.cursor,
        endCursor: edges[edges.length - 1]?.cursor
      },
      totalCount: await db.users.countDocuments()
    };
  }
}
</code></pre>
<h3 id="error-handling">Error Handling</h3>
<h4 id="schema-level-errors">Schema-Level Errors</h4>
<pre><code class="language-graphql">
type Mutation {
  createUser(input: CreateUserInput!): CreateUserPayload!
}

type CreateUserPayload {
  user: User
  errors: [UserError!]
  success: Boolean!
}

type UserError {
  field: String!
  message: String!
}
</code></pre>
<pre><code class="language-javascript">
Mutation: {
  createUser: async (parent, { input }, { db }) =&gt; {
    const errors = [];
    
    // Validation
    if (!input.email.includes(&#x27;@&#x27;)) {
      errors.push({
        field: &#x27;email&#x27;,
        message: &#x27;Invalid email format&#x27;
      });
    }
    
    if (input.age &lt; 0) {
      errors.push({
        field: &#x27;age&#x27;,
        message: &#x27;Age must be positive&#x27;
      });
    }
    
    if (errors.length &gt; 0) {
      return { user: null, errors, success: false };
    }
    
    const user = await db.users.create(input);
    return { user, errors: [], success: true };
  }
}
</code></pre>
<h4 id="runtime-errors">Runtime Errors</h4>
<pre><code class="language-javascript">
const { ApolloError, UserInputError, AuthenticationError, ForbiddenError } = require(&#x27;apollo-server&#x27;);

const resolvers = {
  Query: {
    user: async (parent, { id }, { dataSources, user }) =&gt; {
      // Authentication check
      if (!user) {
        throw new AuthenticationError(&#x27;You must be logged in&#x27;);
      }
      
      // Authorization check
      if (user.role !== &#x27;admin&#x27; &amp;&amp; user.id !== id) {
        throw new ForbiddenError(&#x27;Not authorized to view this user&#x27;);
      }
      
      const userData = await dataSources.userAPI.getUserById(id);
      
      // Not found
      if (!userData) {
        throw new UserInputError(&#x27;User not found&#x27;, {
          invalidArgs: [&#x27;id&#x27;]
        });
      }
      
      return userData;
    }
  }
};
</code></pre>
<h3 id="authentication-authorization">Authentication &amp; Authorization</h3>
<h4 id="context-setup">Context Setup</h4>
<pre><code class="language-javascript">
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) =&gt; {
    // Get token from headers
    const token = req.headers.authorization || &#x27;&#x27;;
    
    // Verify token
    const user = await getUserFromToken(token);
    
    // Return context
    return {
      user,
      dataSources: {
        userAPI: new UserAPI(),
        postAPI: new PostAPI()
      }
    };
  }
});
</code></pre>
<h4 id="directive-based-authorization">Directive-Based Authorization</h4>
<pre><code class="language-graphql">
directive @auth(requires: Role = USER) on FIELD_DEFINITION | OBJECT

enum Role {
  ADMIN
  USER
  GUEST
}

type Query {
  users: [User!]! @auth(requires: ADMIN)
  user(id: ID!): User @auth(requires: USER)
  posts: [Post!]!
}

type Mutation {
  deleteUser(id: ID!): Boolean! @auth(requires: ADMIN)
}
</code></pre>
<pre><code class="language-javascript">
const { SchemaDirectiveVisitor } = require(&#x27;apollo-server&#x27;);
const { defaultFieldResolver } = require(&#x27;graphql&#x27;);

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const requiredRole = this.args.requires;

    field.resolve = async function (...args) {
      const context = args[2];
      const user = context.user;

      if (!user) {
        throw new AuthenticationError(&#x27;Not authenticated&#x27;);
      }

      if (user.role !== requiredRole &amp;&amp; user.role !== &#x27;ADMIN&#x27;) {
        throw new ForbiddenError(&#x27;Insufficient permissions&#x27;);
      }

      return resolve.apply(this, args);
    };
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
  }
});
</code></pre>
<h3 id="subscriptions-real-time-data">Subscriptions (Real-time Data)</h3>
<h4 id="schema-definition">Schema Definition</h4>
<pre><code class="language-graphql">
type Subscription {
  postCreated: Post!
  postUpdated(id: ID!): Post!
  messageAdded(roomId: ID!): Message!
}

type Message {
  id: ID!
  text: String!
  user: User!
  createdAt: String!
}
</code></pre>
<h4 id="server-implementation">Server Implementation</h4>
<pre><code class="language-javascript">
const { PubSub } = require(&#x27;apollo-server&#x27;);
const pubsub = new PubSub();

const POST_CREATED = &#x27;POST_CREATED&#x27;;
const POST_UPDATED = &#x27;POST_UPDATED&#x27;;
const MESSAGE_ADDED = &#x27;MESSAGE_ADDED&#x27;;

const resolvers = {
  Mutation: {
    createPost: async (parent, { input }, { db }) =&gt; {
      const post = await db.posts.create(input);
      
      // Publish event
      pubsub.publish(POST_CREATED, { postCreated: post });
      
      return post;
    },

    addMessage: async (parent, { roomId, text }, { db, user }) =&gt; {
      const message = await db.messages.create({
        roomId,
        text,
        userId: user.id
      });
      
      pubsub.publish(MESSAGE_ADDED, {
        messageAdded: message,
        roomId
      });
      
      return message;
    }
  },

  Subscription: {
    postCreated: {
      subscribe: () =&gt; pubsub.asyncIterator([POST_CREATED])
    },

    postUpdated: {
      subscribe: (parent, { id }) =&gt; {
        return pubsub.asyncIterator([&#96;${POST_UPDATED}_${id}&#96;]);
      }
    },

    messageAdded: {
      subscribe: (parent, { roomId }, { user }) =&gt; {
        if (!user) {
          throw new AuthenticationError(&#x27;Not authenticated&#x27;);
        }
        return pubsub.asyncIterator([MESSAGE_ADDED]);
      },
      resolve: (payload, { roomId }) =&gt; {
        // Filter by room
        if (payload.roomId === roomId) {
          return payload.messageAdded;
        }
        return null;
      }
    }
  }
};
</code></pre>
<h4 id="client-subscription">Client Subscription</h4>
<pre><code class="language-javascript">
import { useSubscription, gql } from &#x27;@apollo/client&#x27;;

const MESSAGE_SUBSCRIPTION = gql&#96;
  subscription OnMessageAdded($roomId: ID!) {
    messageAdded(roomId: $roomId) {
      id
      text
      user {
        name
      }
      createdAt
    }
  }
&#96;;

function ChatRoom({ roomId }) {
  const { data, loading } = useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: { roomId }
  });

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;p&gt;New message: {data.messageAdded.text}&lt;/p&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<h3 id="data-loaders-n1-problem-solution">Data Loaders (N+1 Problem Solution)</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│           The N+1 Problem                       │
├─────────────────────────────────────────────────┤
│                                                 │
│  Query:                                         │
│    users {                                      │
│      name                                       │
│      posts { title }                            │
│    }                                            │
│                                                 │
│  Without DataLoader:                            │
│    1 query to get users                         │
│    + N queries to get posts for each user       │
│    = N+1 queries 🐌                             │
│                                                 │
│  With DataLoader:                               │
│    1 query to get users                         │
│    + 1 batched query to get all posts           │
│    = 2 queries ⚡                                │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<h4 id="dataloader-implementation">DataLoader Implementation</h4>
<pre><code class="language-bash">
npm install dataloader
</code></pre>
<pre><code class="language-javascript">
const DataLoader = require(&#x27;dataloader&#x27;);

// Batch function
const batchUsers = async (ids) =&gt; {
  const users = await db.users.find({ _id: { $in: ids } });
  // Return in same order as ids
  return ids.map(id =&gt; users.find(u =&gt; u._id.toString() === id));
};

// Create loaders
const createLoaders = () =&gt; ({
  userLoader: new DataLoader(batchUsers),
  postLoader: new DataLoader(batchPosts)
});

// Use in context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () =&gt; ({
    loaders: createLoaders()
  })
});

// Use in resolvers
const resolvers = {
  Post: {
    author: async (post, args, { loaders }) =&gt; {
      return loaders.userLoader.load(post.authorId);
    }
  }
};
</code></pre>
<h4 id="dataloader-with-caching">DataLoader with Caching</h4>
<pre><code class="language-javascript">
const DataLoader = require(&#x27;dataloader&#x27;);

class UserLoader {
  constructor(db) {
    this.db = db;
    this.loader = new DataLoader(
      (ids) =&gt; this.batchUsers(ids),
      {
        cache: true,
        cacheKeyFn: (key) =&gt; key.toString(),
        batchScheduleFn: (callback) =&gt; setTimeout(callback, 10)
      }
    );
  }

  async batchUsers(ids) {
    const users = await this.db.users.find({ _id: { $in: ids } });
    return ids.map(id =&gt; users.find(u =&gt; u._id.toString() === id));
  }

  load(id) {
    return this.loader.load(id);
  }

  loadMany(ids) {
    return this.loader.loadMany(ids);
  }

  clear(id) {
    this.loader.clear(id);
  }

  clearAll() {
    this.loader.clearAll();
  }
}
</code></pre>
<hr>
<h2 id="advanced-part">Advanced Part</h2>
<h3 id="schema-federation">Schema Federation</h3>
<p>Schema federation allows you to compose multiple GraphQL services into a single graph.</p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Federated Architecture                  │
└─────────────────────────────────────────────────┘

                ┌──────────────┐
                │   Gateway    │
                │  (Apollo)    │
                └──────┬───────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
┌───────────┐  ┌───────────┐  ┌───────────┐
│  Users    │  │  Posts    │  │  Comments │
│  Service  │  │  Service  │  │  Service  │
└───────────┘  └───────────┘  └───────────┘
</code></pre>
<h4 id="user-service">User Service</h4>
<pre><code class="language-javascript">
const { ApolloServer, gql } = require(&#x27;apollo-server&#x27;);
const { buildFederatedSchema } = require(&#x27;@apollo/federation&#x27;);

const typeDefs = gql&#96;
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type User @key(fields: &quot;id&quot;) {
    id: ID!
    name: String!
    email: String!
  }
&#96;;

const resolvers = {
  Query: {
    user: (parent, { id }) =&gt; getUserById(id),
    users: () =&gt; getAllUsers()
  },
  User: {
    __resolveReference(user) {
      return getUserById(user.id);
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});
</code></pre>
<h4 id="posts-service">Posts Service</h4>
<pre><code class="language-javascript">
const typeDefs = gql&#96;
  extend type Query {
    posts: [Post!]!
  }

  type Post @key(fields: &quot;id&quot;) {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  extend type User @key(fields: &quot;id&quot;) {
    id: ID! @external
    posts: [Post!]!
  }
&#96;;

const resolvers = {
  Post: {
    author(post) {
      return { __typename: &#x27;User&#x27;, id: post.authorId };
    }
  },
  User: {
    posts(user) {
      return getPostsByAuthorId(user.id);
    }
  }
};
</code></pre>
<h4 id="gateway-setup">Gateway Setup</h4>
<pre><code class="language-javascript">
const { ApolloGateway } = require(&#x27;@apollo/gateway&#x27;);
const { ApolloServer } = require(&#x27;apollo-server&#x27;);

const gateway = new ApolloGateway({
  serviceList: [
    { name: &#x27;users&#x27;, url: &#x27;http://localhost:4001&#x27; },
    { name: &#x27;posts&#x27;, url: &#x27;http://localhost:4002&#x27; },
    { name: &#x27;comments&#x27;, url: &#x27;http://localhost:4003&#x27; }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen().then(({ url }) =&gt; {
  console.log(&#96;Gateway ready at ${url}&#96;);
});
</code></pre>
<h3 id="performance-optimization">Performance Optimization</h3>
<h4 id="query-complexity-analysis">Query Complexity Analysis</h4>
<pre><code class="language-javascript">
const { createComplexityLimitRule } = require(&#x27;graphql-validation-complexity&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    createComplexityLimitRule(1000, {
      onCost: (cost) =&gt; console.log(&#x27;Query cost:&#x27;, cost),
      createError: (cost, max) =&gt; {
        return new GraphQLError(
          &#96;Query too complex: ${cost} exceeds maximum ${max}&#96;
        );
      }
    })
  ]
});
</code></pre>
<h4 id="query-depth-limiting">Query Depth Limiting</h4>
<pre><code class="language-javascript">
const depthLimit = require(&#x27;graphql-depth-limit&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5)]
});
</code></pre>
<h4 id="response-caching">Response Caching</h4>
<pre><code class="language-javascript">
const { ApolloServer } = require(&#x27;apollo-server&#x27;);
const responseCachePlugin = require(&#x27;apollo-server-plugin-response-cache&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    responseCachePlugin({
      sessionId: (requestContext) =&gt; {
        return requestContext.request.http.headers.get(&#x27;session-id&#x27;);
      }
    })
  ]
});

// Schema with cache hints
const typeDefs = gql&#96;
  type Query {
    users: [User!]! @cacheControl(maxAge: 60)
    user(id: ID!): User @cacheControl(maxAge: 300)
  }

  type User @cacheControl(maxAge: 300) {
    id: ID!
    name: String!
    posts: [Post!]! @cacheControl(maxAge: 60)
  }
&#96;;
</code></pre>
<h4 id="persisted-queries">Persisted Queries</h4>
<pre><code class="language-javascript">
// Client
import { createPersistedQueryLink } from &#x27;@apollo/client/link/persisted-queries&#x27;;
import { sha256 } from &#x27;crypto-hash&#x27;;

const link = createPersistedQueryLink({ sha256 }).concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
</code></pre>
<pre><code class="language-javascript">
// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: {
    cache: new Map() // or Redis
  }
});
</code></pre>
<h3 id="advanced-security">Advanced Security</h3>
<h4 id="query-whitelisting">Query Whitelisting</h4>
<pre><code class="language-javascript">
const allowedQueries = new Map([
  [&#x27;GetUser&#x27;, &#x27;query GetUser($id: ID!) { user(id: $id) { name email } }&#x27;],
  [&#x27;GetPosts&#x27;, &#x27;query GetPosts { posts { title } }&#x27;]
]);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [{
    requestDidStart() {
      return {
        didResolveOperation({ request, operationName }) {
          if (!allowedQueries.has(operationName)) {
            throw new Error(&#x27;Operation not allowed&#x27;);
          }
        }
      };
    }
  }]
});
</code></pre>
<h4 id="rate-limiting">Rate Limiting</h4>
<pre><code class="language-javascript">
const { RateLimiterMemory } = require(&#x27;rate-limiter-flexible&#x27;);

const rateLimiter = new RateLimiterMemory({
  points: 100, // Number of points
  duration: 60 // Per 60 seconds
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) =&gt; {
    const ip = req.ip;
    
    try {
      await rateLimiter.consume(ip);
    } catch (rejRes) {
      throw new Error(&#x27;Too many requests&#x27;);
    }
    
    return { /* context */ };
  }
});
</code></pre>
<h4 id="field-level-rate-limiting">Field-Level Rate Limiting</h4>
<pre><code class="language-graphql">
directive @rateLimit(
  limit: Int!
  duration: Int!
) on FIELD_DEFINITION

type Query {
  expensiveQuery: Result @rateLimit(limit: 10, duration: 60)
}
</code></pre>
<pre><code class="language-javascript">
class RateLimitDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { limit, duration } = this.args;
    
    const limiter = new RateLimiterMemory({
      points: limit,
      duration
    });

    field.resolve = async function (...args) {
      const context = args[2];
      const key = &#96;${context.user?.id || context.ip}:${field.name}&#96;;
      
      try {
        await limiter.consume(key);
      } catch (rejRes) {
        throw new Error(&#96;Rate limit exceeded for ${field.name}&#96;);
      }
      
      return resolve.apply(this, args);
    };
  }
}
</code></pre>
<h4 id="input-sanitization">Input Sanitization</h4>
<pre><code class="language-javascript">
const validator = require(&#x27;validator&#x27;);

const resolvers = {
  Mutation: {
    createUser: async (parent, { input }) =&gt; {
      // Sanitize email
      if (!validator.isEmail(input.email)) {
        throw new UserInputError(&#x27;Invalid email&#x27;);
      }
      
      // Sanitize string inputs
      const sanitizedInput = {
        name: validator.escape(input.name),
        email: validator.normalizeEmail(input.email),
        bio: validator.stripLow(input.bio || &#x27;&#x27;)
      };
      
      return createUser(sanitizedInput);
    }
  }
};
</code></pre>
<h3 id="testing-strategies">Testing Strategies</h3>
<h4 id="unit-testing-resolvers">Unit Testing Resolvers</h4>
<pre><code class="language-javascript">
const { users } = require(&#x27;./resolvers&#x27;);

describe(&#x27;User Resolvers&#x27;, () =&gt; {
  it(&#x27;should fetch user by id&#x27;, async () =&gt; {
    const mockDataSource = {
      getUserById: jest.fn().mockResolvedValue({
        id: &#x27;1&#x27;,
        name: &#x27;John Doe&#x27;
      })
    };
    
    const context = {
      dataSources: { userAPI: mockDataSource }
    };
    
    const result = await users.Query.user(null, { id: &#x27;1&#x27; }, context);
    
    expect(result).toEqual({
      id: &#x27;1&#x27;,
      name: &#x27;John Doe&#x27;
    });
    expect(mockDataSource.getUserById).toHaveBeenCalledWith(&#x27;1&#x27;);
  });
});
</code></pre>
<h4 id="integration-testing">Integration Testing</h4>
<pre><code class="language-javascript">
const { createTestClient } = require(&#x27;apollo-server-testing&#x27;);
const { ApolloServer } = require(&#x27;apollo-server&#x27;);

describe(&#x27;GraphQL Integration Tests&#x27;, () =&gt; {
  let server;
  let query, mutate;

  beforeAll(() =&gt; {
    server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () =&gt; ({ user: { id: &#x27;1&#x27;, role: &#x27;ADMIN&#x27; } })
    });
    
    const testClient = createTestClient(server);
    query = testClient.query;
    mutate = testClient.mutate;
  });

  it(&#x27;should create a user&#x27;, async () =&gt; {
    const CREATE_USER = gql&#96;
      mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          user {
            id
            name
            email
          }
          success
        }
      }
    &#96;;

    const result = await mutate({
      mutation: CREATE_USER,
      variables: {
        input: {
          name: &#x27;Jane Doe&#x27;,
          email: &#x27;jane@example.com&#x27;
        }
      }
    });

    expect(result.data.createUser.success).toBe(true);
    expect(result.data.createUser.user.name).toBe(&#x27;Jane Doe&#x27;);
  });
});
</code></pre>
<h4 id="schema-testing">Schema Testing</h4>
<pre><code class="language-javascript">
const { makeExecutableSchema } = require(&#x27;@graphql-tools/schema&#x27;);
const { assertValidSchema } = require(&#x27;graphql&#x27;);

describe(&#x27;Schema Validation&#x27;, () =&gt; {
  it(&#x27;should have valid schema&#x27;, () =&gt; {
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    });
    
    expect(() =&gt; assertValidSchema(schema)).not.toThrow();
  });
});
</code></pre>
<h3 id="code-generation">Code Generation</h3>
<h4 id="typescript-types-from-schema">TypeScript Types from Schema</h4>
<pre><code class="language-bash">
npm install -D @graphql-codegen/cli @graphql-codegen/typescript
</code></pre>
<p><strong>codegen.yml:</strong></p>
<pre><code class="language-yaml">
schema: &#x27;http://localhost:4000/graphql&#x27;
generates:
  ./src/types.ts:
    plugins:
      - typescript
      - typescript-resolvers
      - typescript-operations
    config:
      avoidOptionals: false
      maybeValue: T | null
</code></pre>
<p><strong>Generated Types:</strong></p>
<pre><code class="language-typescript">
export type User = {
  __typename?: &#x27;User&#x27;;
  id: Scalars[&#x27;ID&#x27;];
  name: Scalars[&#x27;String&#x27;];
  email: Scalars[&#x27;String&#x27;];
  posts?: Maybe&lt;Array&lt;Post&gt;&gt;;
};

export type Resolvers = {
  Query?: QueryResolvers;
  Mutation?: MutationResolvers;
  User?: UserResolvers;
  Post?: PostResolvers;
};

export type QueryResolvers = {
  user?: Resolver&lt;Maybe&lt;User&gt;, ParentType, ContextType, QueryUserArgs&gt;;
  users?: Resolver&lt;Array&lt;User&gt;, ParentType, ContextType&gt;;
};
</code></pre>
<h3 id="monitoring-and-observability">Monitoring and Observability</h3>
<h4 id="apollo-studio-integration">Apollo Studio Integration</h4>
<pre><code class="language-javascript">
const { ApolloServer } = require(&#x27;apollo-server&#x27;);
const { ApolloServerPluginUsageReporting } = require(&#x27;apollo-server-core&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginUsageReporting({
      sendVariableValues: { all: true },
      sendHeaders: { all: true }
    })
  ]
});
</code></pre>
<h4 id="custom-metrics">Custom Metrics</h4>
<pre><code class="language-javascript">
const { ApolloServer } = require(&#x27;apollo-server&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [{
    requestDidStart(requestContext) {
      const start = Date.now();
      
      return {
        didEncounterErrors(requestContext) {
          console.error(&#x27;Errors:&#x27;, requestContext.errors);
        },
        
        willSendResponse(requestContext) {
          const duration = Date.now() - start;
          console.log(`Query ${requestContext.operationName} took ${duration}ms`);
          
          // Send to monitoring service
          metrics.record(&#x27;graphql.query.duration&#x27;, duration, {
            operation: requestContext.operationName
          });
        }
      };
    }
  }]
});
</code></pre>
<h4 id="opentelemetry-integration">OpenTelemetry Integration</h4>
<pre><code class="language-javascript">
const { ApolloServer } = require(&#x27;apollo-server&#x27;);
const { ApolloServerPluginLandingPageGraphQLPlayground } = require(&#x27;apollo-server-core&#x27;);
const opentelemetry = require(&#x27;@opentelemetry/api&#x27;);

const tracer = opentelemetry.trace.getTracer(&#x27;graphql-server&#x27;);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [{
    requestDidStart() {
      return {
        executionDidStart() {
          const span = tracer.startSpan(&#x27;graphql.execution&#x27;);
          
          return {
            executionDidEnd() {
              span.end();
            }
          };
        }
      };
    }
  }]
});
</code></pre>
<h3 id="advanced-patterns">Advanced Patterns</h3>
<h4 id="deferred-queries-defer">Deferred Queries (@defer)</h4>
<pre><code class="language-graphql">
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    ... @defer {
      posts {
        title
        comments {
          text
        }
      }
    }
  }
}
</code></pre>
<h4 id="streaming-stream">Streaming (@stream)</h4>
<pre><code class="language-graphql">
query GetPosts {
  posts @stream(initialCount: 5) {
    id
    title
    content
  }
}
</code></pre>
<h4 id="custom-scalars">Custom Scalars</h4>
<pre><code class="language-javascript">
const { GraphQLScalarType, Kind } = require(&#x27;graphql&#x27;);

const dateScalar = new GraphQLScalarType({
  name: &#x27;Date&#x27;,
  description: &#x27;Date custom scalar type&#x27;,
  
  serialize(value) {
    return value.toISOString(); // Value sent to client
  },
  
  parseValue(value) {
    return new Date(value); // Value from client
  },
  
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  }
});

const resolvers = {
  Date: dateScalar,
  Query: {
    events: () =&gt; getEvents()
  }
};
</code></pre>
<pre><code class="language-graphql">
scalar Date

type Event {
  id: ID!
  name: String!
  date: Date!
}

type Query {
  events: [Event!]!
}
</code></pre>
<h4 id="batch-operations">Batch Operations</h4>
<pre><code class="language-graphql">
type Mutation {
  batchCreateUsers(inputs: [CreateUserInput!]!): [User!]!
  batchUpdateUsers(updates: [UpdateUserInput!]!): [User!]!
}
</code></pre>
<pre><code class="language-javascript">
Mutation: {
  batchCreateUsers: async (parent, { inputs }, { db }) =&gt; {
    return await db.users.insertMany(inputs);
  },
  
  batchUpdateUsers: async (parent, { updates }, { db }) =&gt; {
    const promises = updates.map(({ id, ...data }) =&gt;
      db.users.findByIdAndUpdate(id, data, { new: true })
    );
    return await Promise.all(promises);
  }
}
</code></pre>
<h3 id="graphql-best-practices">GraphQL Best Practices</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│           GraphQL Best Practices                │
├─────────────────────────────────────────────────┤
│                                                 │
│  Schema Design:                                 │
│  ✓ Use descriptive type and field names        │
│  ✓ Design for client use cases                 │
│  ✓ Use interfaces for shared fields            │
│  ✓ Keep mutations specific and granular        │
│  ✓ Use input types for complex arguments       │
│                                                 │
│  Performance:                                   │
│  ✓ Implement DataLoader for batching           │
│  ✓ Add query complexity limits                 │
│  ✓ Use cursor-based pagination                 │
│  ✓ Enable response caching                     │
│  ✓ Implement field-level caching               │
│                                                 │
│  Security:                                      │
│  ✓ Validate and sanitize inputs                │
│  ✓ Implement authentication                    │
│  ✓ Add authorization checks                    │
│  ✓ Rate limit expensive queries                │
│  ✓ Limit query depth/complexity                │
│                                                 │
│  Error Handling:                                │
│  ✓ Return meaningful error messages            │
│  ✓ Use custom error types                      │
│  ✓ Include error codes                         │
│  ✓ Log errors for monitoring                   │
│  ✓ Don&#x27;t expose sensitive information          │
│                                                 │
│  Documentation:                                 │
│  ✓ Add descriptions to all types/fields        │
│  ✓ Document deprecations                       │
│  ✓ Provide examples in documentation           │
│  ✓ Keep schema backwards compatible            │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<h3 id="migration-from-rest-to-graphql">Migration from REST to GraphQL</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│        REST to GraphQL Migration Path           │
└─────────────────────────────────────────────────┘

Phase 1: Parallel Implementation
┌──────────┐         ┌──────────┐
│   REST   │         │ GraphQL  │
│   API    │   +     │   API    │
└──────────┘         └──────────┘
     ▲                    ▲
     │                    │
     └──────┬─────────────┘
            │
        Clients
    (gradual adoption)

Phase 2: GraphQL Gateway
┌──────────────────┐
│  GraphQL Gateway │
└────────┬─────────┘
         │
    ┌────┴─────┐
    ▼          ▼
┌────────┐  ┌────────┐
│  REST  │  │ Native │
│  API   │  │ GraphQL│
└────────┘  └────────┘

Phase 3: Full Migration
┌──────────────────┐
│  GraphQL Only    │
└──────────────────┘
</code></pre>
<h3 id="complete-architecture-example">Complete Architecture Example</h3>
<pre><code class="language-">
┌──────────────────────────────────────────────────────────┐
│            Production GraphQL Architecture                │
└──────────────────────────────────────────────────────────┘

                    ┌─────────────┐
                    │   Clients   │
                    │  Web/Mobile │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │     CDN     │
                    │   (Cached   │
                    │   Responses)│
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  API Gateway│
                    │  - Auth     │
                    │  - Rate Lmt │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼─────┐      ┌─────▼────┐      ┌─────▼────┐
   │  Users   │      │  Posts   │      │ Comments │
   │  Service │      │  Service │      │ Service  │
   └────┬─────┘      └─────┬────┘      └─────┬────┘
        │                  │                  │
   ┌────▼─────┐      ┌─────▼────┐      ┌─────▼────┐
   │  User DB │      │  Post DB │      │Comment DB│
   └──────────┘      └──────────┘      └──────────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────▼──────┐
                    │    Redis    │
                    │   (Cache)   │
                    └─────────────┘
</code></pre>
<h3 id="tooling-ecosystem">Tooling Ecosystem</h3>
<p><strong>Development:</strong></p>
<ul>
<li>Apollo Server / GraphQL Yoga - Server frameworks</li>
<li>GraphiQL / GraphQL Playground - Query IDE</li>
<li>Apollo Client / urql - Client libraries</li>
</ul>
<p><strong>Code Generation:</strong></p>
<ul>
<li>GraphQL Code Generator - Type generation</li>
<li>GraphQL Inspector - Schema validation</li>
</ul>
<p><strong>Testing:</strong></p>
<ul>
<li>Apollo Server Testing - Integration tests</li>
<li>EasyGraphQL - Mocking</li>
</ul>
<p><strong>Monitoring:</strong></p>
<ul>
<li>Apollo Studio - Performance monitoring</li>
<li>GraphQL Inspector - Schema changes</li>
</ul>
<p><strong>Security:</strong></p>
<ul>
<li>GraphQL Shield - Authorization layer</li>
<li>GraphQL Armor - Security hardening</li>
</ul>
<h3 id="conclusion">Conclusion</h3>
<p>GraphQL provides a powerful, flexible approach to API development with strong typing, efficient data fetching, and excellent developer experience. Success with GraphQL requires:</p>
<ul>
<li><strong>Strong Schema Design</strong> - Think carefully about your types and relationships</li>
<li><strong>Performance Optimization</strong> - Use DataLoader, caching, and complexity limits</li>
<li><strong>Security</strong> - Implement authentication, authorization, and input validation</li>
<li><strong>Monitoring</strong> - Track query performance and errors</li>
<li><strong>Best Practices</strong> - Follow established patterns for pagination, error handling, etc.</li>
</ul>
<p>GraphQL is particularly well-suited for:</p>
<ul>
<li>Mobile applications (reduces over-fetching)</li>
<li>Complex data requirements</li>
<li>Rapid frontend development</li>
<li>Microservices architecture</li>
<li>Real-time applications</li>
</ul>
<p>The ecosystem continues to evolve with new tools, patterns, and optimizations making GraphQL increasingly powerful for modern application development.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = graphqlCompleteGuideContentData;
}
