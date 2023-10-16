/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateInbox = /* GraphQL */ `
  subscription OnCreateInbox($filter: ModelSubscriptionInboxFilterInput) {
    onCreateInbox(filter: $filter) {
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
export const onUpdateInbox = /* GraphQL */ `
  subscription OnUpdateInbox($filter: ModelSubscriptionInboxFilterInput) {
    onUpdateInbox(filter: $filter) {
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
export const onDeleteInbox = /* GraphQL */ `
  subscription OnDeleteInbox($filter: ModelSubscriptionInboxFilterInput) {
    onDeleteInbox(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
