import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { Dialog } from "primereact/dialog";
import { BiBlock } from "react-icons/bi";

const Chatbox = ({
  message,
  setMessage,
  sendMessage,
  messages,
  selectedChat,
  userId,
  everyOneDelete,
  visible,
  setVisible,
  id,
  setId,
  deleteMyMsg,
  sender,
  setSender,
}) => {
  const FormatDate = ({ date }) => {
    const hours = new Date(date).getHours();
    const period = hours < 12 ? "AM" : "PM";
    const date_time = new Date(date).toLocaleTimeString({
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `${date_time.toString().substring(0, 5)} ${period}`;
  };

  const ConfirmationDialogue = () => {
    return (
      <Dialog
        visible={visible}
        style={{ width: "25vw" }}
        onHide={() => setVisible(false)}
        draggable={false}
        showHeader={false}
      >
        <div className="flex flex-col gap-2 p-5">
          <p>Delete Message?</p>
          <div className="flex flex-col gap-3 items-end">
            {sender === userId && (
              <button
                onClick={() => everyOneDelete(id)}
                className="bg-teal-400 px-3 py-2 rounded-full text-white font-semibold w-fit"
              >
                Delete for everyone
              </button>
            )}

            <button
              onClick={() => deleteMyMsg(id)}
              className="bg-teal-400 px-3 py-2 rounded-full text-white font-semibold w-fit"
            >
              Delete for me
            </button>
            <button
              onClick={() => setVisible(false)}
              className="bg-teal-400 px-3 py-2 rounded-full text-white font-semibold w-fit"
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
    );
  };

  const SingleMessage = ({ val }) => {
    if (val.deleteByEveryOne) {
      return (
        <div
          className={`${
            val.senderId === userId ? " justify-end" : " justify-start"
          } ${
            ((val.senderDelete || val.senderDelReceiver) &&
              selectedChat.ownerId === userId) ||
            ((val.receiverDelete || val.receiverDelSender) &&
              selectedChat.receiverId === userId)
              ? "hidden"
              : "flex"
          }`}
        >
          <div
            className={`${
              val.senderId === userId
                ? "w-fit bg-green-300 px-4 pt-6 pb-2"
                : "w-fit bg-gray-200 px-4 pt-6 pb-2"
            } rounded-md flex flex-col gap-3 relative`}
          >
            <div
              className={`${
                val.senderId === userId
                  ? "absolute top-1 left-2  cursor-pointer"
                  : "absolute top-1 right-2  cursor-pointer"
              } h-5 w-5 flex justify-center items-center border-[1px] border-gray-400 rounded-full`}
              onClick={() => {
                setVisible(true);
                setId(val.messageId);
                setSender(val.senderId);
              }}
            >
              <BsTrashFill className={` text-gray-700 text-[10px]`} />
            </div>
            <p className="flex items-center justify-start gap-2 text-gray-400">
              <BiBlock /> This message is deleted for everyone
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div
            className={`${
              val.senderId === userId ? " justify-end" : " justify-start"
            } ${
              ((val.senderDelete || val.senderDelReceiver) &&
                selectedChat.ownerId === userId) ||
              ((val.receiverDelete || val.receiverDelSender) &&
                selectedChat.receiverId === userId)
                ? "hidden"
                : "flex"
            }`}
          >
            <div
              className={`${
                val.senderId === userId
                  ? "w-fit bg-green-300 px-4 pt-6 pb-2"
                  : "w-fit bg-gray-200 px-4 pt-6 pb-2"
              } rounded-md flex flex-col gap-3 relative`}
            >
              <div
                className={`${
                  val.senderId === userId
                    ? "absolute top-1 left-2  cursor-pointer"
                    : "absolute top-1 right-2  cursor-pointer"
                } h-5 w-5 flex justify-center items-center border-[1px] border-gray-400 rounded-full`}
                onClick={() => {
                  setVisible(true);
                  setId(val.messageId);
                  setSender(val.senderId);
                }}
              >
                <BsTrashFill className={` text-gray-700 text-[10px]`} />
              </div>
              <p>{val.text}</p>
              <p className="text-[10px] text-right text-gray-500">
                <FormatDate date={val.createdAt} />
              </p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {visible && <ConfirmationDialogue />}
      {selectedChat === null ? (
        <div className="h-screen flex justify-center items-center font-bold">
          Select any user to start chat
        </div>
      ) : (
        <div className="h-full">
          <div className="flex  items-center px-5 h-[6.25%] border-b-[1px]">
            <p className="text-black font-semibold text-[22px]">
              {userId === selectedChat.ownerId
                ? selectedChat.receiver.name
                : selectedChat.owner.name}
            </p>
          </div>
          <div className="h-[82.75%] flex flex-col gap-2 border-b-[1px] border-b-gray-300 overflow-y-scroll p-3">
            {messages.map((val) => {
              return <SingleMessage val={val} />;
            })}
          </div>
          <div className="h-[11%] flex justify-around items-center w-full gap-2 px-3">
            <input
              type="text"
              placeholder="write message..."
              className="w-[95%] py-2 px-4 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-teal-400 rounded-full w-[5%] py-2 flex justify-center items-center"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
