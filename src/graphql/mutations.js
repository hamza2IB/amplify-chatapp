/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createInbox = /* GraphQL */ `
  mutation CreateInbox(
    $input: CreateInboxInput!
    $condition: ModelInboxConditionInput
  ) {
    createInbox(input: $input, condition: $condition) {
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
export const updateInbox = /* GraphQL */ `
  mutation UpdateInbox(
    $input: UpdateInboxInput!
    $condition: ModelInboxConditionInput
  ) {
    updateInbox(input: $input, condition: $condition) {
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
export const deleteInbox = /* GraphQL */ `
  mutation DeleteInbox(
    $input: DeleteInboxInput!
    $condition: ModelInboxConditionInput
  ) {
    deleteInbox(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
