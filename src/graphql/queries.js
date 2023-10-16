/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      name
      inboxes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userId: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInbox = /* GraphQL */ `
  query GetInbox($inboxId: ID!) {
    getInbox(inboxId: $inboxId) {
      inboxId
      owner {
        userId
        name
        createdAt
        updatedAt
        __typename
      }
      receiver {
        userId
        name
        createdAt
        updatedAt
        __typename
      }
      ownerId
      receiverId
      participants
      deleteByOwner
      deleteByReceiver
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userInboxesUserId
      __typename
    }
  }
`;
export const listInboxes = /* GraphQL */ `
  query ListInboxes(
    $inboxId: ID
    $filter: ModelInboxFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInboxes(
      inboxId: $inboxId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        inboxId
        ownerId
        owner {
          name
          userId
        }
        receiver {
          name
          userId
        }
        receiverId
        participants
        deleteByOwner
        deleteByReceiver
        createdAt
        updatedAt
        userInboxesUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($messageId: ID!) {
    getMessage(messageId: $messageId) {
      messageId
      inboxId
      senderId
      senderDelete
      senderDelReceiver
      receiverDelete
      receiverDelSender
      deleteByEveryOne
      text
      createdAt
      updatedAt
      inboxMessagesInboxId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $messageId: ID
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      messageId: $messageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        messageId
        inboxId
        senderId
        senderDelete
        senderDelReceiver
        receiverDelete
        receiverDelSender
        deleteByEveryOne
        text
        createdAt
        updatedAt
        inboxMessagesInboxId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByName = /* GraphQL */ `
  query UsersByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inboxesByOwnerId = /* GraphQL */ `
  query InboxesByOwnerId(
    $ownerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInboxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inboxesByOwnerId(
      ownerId: $ownerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        inboxId
        ownerId
        receiverId
        participants
        deleteByOwner
        deleteByReceiver
        createdAt
        updatedAt
        userInboxesUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inboxesByReceiverId = /* GraphQL */ `
  query InboxesByReceiverId(
    $receiverId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInboxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inboxesByReceiverId(
      receiverId: $receiverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        inboxId
        ownerId
        receiverId
        participants
        deleteByOwner
        deleteByReceiver
        createdAt
        updatedAt
        userInboxesUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByInboxIdAndCreatedAt = /* GraphQL */ `
  query MessagesByInboxIdAndCreatedAt(
    $inboxId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByInboxIdAndCreatedAt(
      inboxId: $inboxId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        messageId
        inboxId
        senderId
        senderDelete
        senderDelReceiver
        receiverDelete
        receiverDelSender
        deleteByEveryOne
        text
        createdAt
        updatedAt
        inboxMessagesInboxId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesBySenderId = /* GraphQL */ `
  query MessagesBySenderId(
    $senderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesBySenderId(
      senderId: $senderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        messageId
        inboxId
        senderId
        senderDelete
        senderDelReceiver
        receiverDelete
        receiverDelSender
        deleteByEveryOne
        text
        createdAt
        updatedAt
        inboxMessagesInboxId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
