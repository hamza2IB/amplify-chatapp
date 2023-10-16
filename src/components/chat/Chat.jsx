import React, { useEffect, useState } from "react";
import InboxList from "./InboxList";
import Chatbox from "./Chatbox";
import { useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import {
  listInboxes,
  messagesByInboxIdAndCreatedAt,
} from "../../graphql/queries";
import { v4 as uuidv4 } from "uuid";
import {
  createInbox,
  createMessage,
  updateInbox,
  updateMessage,
} from "../../graphql/mutations";
import {
  onCreateInbox,
  onCreateMessage,
  onUpdateInbox,
  onUpdateMessage,
} from "../../graphql/subscriptions";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [inbox, setInbox] = useState([]);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const users = useSelector((s) => s.users);
  const [visible, setVisible] = useState(false);
  const name = localStorage.getItem("username");
  const filterUsers = users.filter((val) => val.name !== name);
  const [showUser, setShowUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [id, setId] = useState(null);
  const [sender, setSender] = useState(null);
  const [fetch, setFetch] = useState(false);

  const userId = localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null;

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query !== "") {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setAllUsers(filtered);
    } else {
      setAllUsers(filterUsers);
    }
  };

  useEffect(() => {
    setAllUsers(filterUsers);
    const getInboxes = async () => {
      if (userId) {
        try {
          const res = await API.graphql({
            query: listInboxes,
            variables: {
              filter: {
                participants: {
                  contains: userId,
                },
              },
            },
          });
          let newData = res.data.listInboxes.items;
          console.log(newData);
          setFetch(false);
          setInbox(newData);
        } catch (error) {
          console.log(error);
          setFetch(false);
        }
      }
    };
    getInboxes();
    // eslint-disable-next-line
  }, [userId, fetch]);

  useEffect(() => {
    const sub = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
      next: (payload) => {
        const newMessage = payload.value.data.onCreateMessage;
        setMessages((prev) => [...prev, newMessage]);
      },
    });
    const sub3 = API.graphql(graphqlOperation(onUpdateMessage)).subscribe({
      next: (payload) => {
        const newMessage = payload.value.data.onUpdateMessage;
        setMessages((prev) => {
          const updatedIndex = prev.findIndex(
            (msg) => msg.messageId === newMessage.messageId
          );
          if (updatedIndex !== -1) {
            prev[updatedIndex] = newMessage;
          }
          return [...prev];
        });
      },
    });
    const sub1 = API.graphql(graphqlOperation(onCreateInbox)).subscribe({
      next: (payload) => {
        const newInbox = payload.value.data.onCreateInbox;
        console.log(newInbox);
        setInbox((prev) => [...prev, newInbox]);
      },
    });
    const sub2 = API.graphql(graphqlOperation(onUpdateInbox)).subscribe({
      next: (payload) => {
        const newInbox = payload.value.data.onUpdateInbox;
        console.log(newInbox);
        setInbox((prev) => {
          const updatedIndex = prev.findIndex(
            (inbox) => inbox.inboxId === newInbox.inboxId
          );
          if (updatedIndex !== -1) {
            prev[updatedIndex] = newInbox;
          }
          return [...prev];
        });
        setFetch(true);
      },
    });
    return () => {
      sub.unsubscribe();
      sub1.unsubscribe();
      sub2.unsubscribe();
      sub3.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (selectedChat !== null) {
      const getMessages = async () => {
        try {
          const res = await API.graphql({
            query: messagesByInboxIdAndCreatedAt,
            variables: {
              inboxId: selectedChat.inboxId,
            },
          });
          if (res) {
            console.log(res.data.messagesByInboxIdAndCreatedAt.items);
            setMessages(res.data.messagesByInboxIdAndCreatedAt.items);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getMessages();
    }
  }, [selectedChat]);

  const createNewInbox = async (userItem) => {
    try {
      let newParticipants = [userId, userItem.userId];
      const participantsPresent = inbox.some((val) => {
        return newParticipants.every((id) => val.participants.includes(id));
      });

      if (participantsPresent) {
        let inboxInput = {
          deleteByOwner: false,
          deleteByReceiver: true,
          inboxId: uuidv4(),
          ownerId: userId,
          participants: newParticipants,
          receiverId: userItem.userId,
        };
        const res = await API.graphql(
          graphqlOperation(createInbox, { input: inboxInput })
        );
        if (res) {
          alert(`New inbox created with ${userItem.name}`);
        }
      } else {
        let inboxInput = {
          deleteByOwner: false,
          deleteByReceiver: true,
          inboxId: uuidv4(),
          ownerId: userId,
          participants: newParticipants,
          receiverId: userItem.userId,
        };
        const res = await API.graphql(
          graphqlOperation(createInbox, { input: inboxInput })
        );
        if (res) {
          alert(`New inbox created with ${userItem.name}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const messageInput = {
        inboxId: selectedChat.inboxId,
        messageId: uuidv4(),
        receiverDelete: false,
        senderDelete: false,
        senderId: userId,
        text: message,
        deleteByEveryOne: false,
        senderDelReceiver: false,
        receiverDelSender: false,
      };
      const res = await API.graphql(
        graphqlOperation(createMessage, { input: messageInput })
      );
      console.log(res);
      if (res) {
        setMessage("");
        if (selectedChat.deleteByOwner) {
          await API.graphql(
            graphqlOperation(updateInbox, {
              input: {
                deleteByOwner: false,
                inboxId: selectedChat.inboxId,
              },
            })
          );
        } else if (selectedChat.deleteByReceiver) {
          await API.graphql(
            graphqlOperation(updateInbox, {
              input: {
                deleteByReceiver: false,
                inboxId: selectedChat.inboxId,
              },
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInbox = async (e, selectedChat) => {
    e.stopPropagation();
    setShowUser(false);
    if (selectedChat.ownerId === userId) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateInbox, {
            input: {
              deleteByOwner: true,
              inboxId: selectedChat.inboxId,
            },
          })
        );
        if (res) {
          const filteredArr = inbox.filter(
            (val) => val.inboxId !== selectedChat.inboxId
          );
          setInbox(filteredArr);
          setShowUser(false);
          setSelectedChat(null);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (selectedChat.receiverId === userId) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateInbox, {
            input: {
              deleteByReceiver: true,
              inboxId: selectedChat.inboxId,
            },
          })
        );
        if (res) {
          const filteredArr = inbox.filter(
            (val) => val.inboxId !== selectedChat.inboxId
          );
          setInbox(filteredArr);
          setShowUser(false);
          setSelectedChat(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteMessageForEveryOne = async (id) => {
    try {
      const res = await API.graphql(
        graphqlOperation(updateMessage, {
          input: { messageId: id, deleteByEveryOne: true },
        })
      );
      console.log(res);
      if (res) {
        setVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteForMe = async () => {
    if (selectedChat.ownerId === sender && selectedChat.ownerId === userId) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateMessage, {
            input: { messageId: id, senderDelete: true },
          })
        );
        if (res) {
          setVisible(false);
          const smsId = res.data.updateMessage.messageId;
          const filteredSms = messages.filter((val) => val.messageId !== smsId);
          setMessages(filteredSms);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (
      selectedChat.receiverId === sender &&
      selectedChat.ownerId === userId
    ) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateMessage, {
            input: { messageId: id, senderDelReceiver: true },
          })
        );
        console.log(res);
        if (res) {
          setVisible(false);
          const smsId = res.data.updateMessage.messageId;
          const filteredSms = messages.filter((val) => val.messageId !== smsId);
          setMessages(filteredSms);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (
      selectedChat.receiverId === sender &&
      selectedChat.receiverId === userId
    ) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateMessage, {
            input: { messageId: id, receiverDelete: true },
          })
        );
        console.log(res);
        if (res) {
          setVisible(false);
          const smsId = res.data.updateMessage.messageId;
          const filteredSms = messages.filter((val) => val.messageId !== smsId);
          setMessages(filteredSms);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (
      selectedChat.ownerId === sender &&
      selectedChat.receiverId === userId
    ) {
      try {
        const res = await API.graphql(
          graphqlOperation(updateMessage, {
            input: { messageId: id, receiverDelSender: true },
          })
        );
        console.log(res);
        if (res) {
          setVisible(false);
          const smsId = res.data.updateMessage.messageId;
          const filteredSms = messages.filter((val) => val.messageId !== smsId);
          setMessages(filteredSms);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[20%] h-screen border-r-[1px] border-gray-200">
        <InboxList
          inbox={inbox}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          users={allUsers}
          show={showUser}
          setShow={setShowUser}
          select={createNewInbox}
          userId={userId}
          setSelectedChat={setSelectedChat}
          deleteInbox={deleteInbox}
        />
      </div>
      <div className="w-[80%] h-screen">
        <Chatbox
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          messages={messages}
          selectedChat={selectedChat}
          userId={userId}
          everyOneDelete={deleteMessageForEveryOne}
          visible={visible}
          setVisible={setVisible}
          id={id}
          setId={setId}
          deleteMyMsg={deleteForMe}
          sender={sender}
          setSender={setSender}
        />
      </div>
    </div>
  );
};

export default Chat;
