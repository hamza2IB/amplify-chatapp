import React, { useState } from "react";
import { BsTrashFill } from "react-icons/bs";

const InboxList = ({
  inbox,
  search,
  handleSearch,
  users,
  show,
  setShow,
  select,
  userId,
  setSelectedChat,
  deleteInbox,
}) => {
  return (
    <div className="flex flex-col gap-3 h-screen">
      <div className="flex justify-center items-center h-[6.25%] border-b-[1px]">
        <p className="text-black font-semibold text-[22px]">Inbox</p>
      </div>
      <div className="px-5 relative w-full">
        <input
          type="text"
          className="w-full py-2 px-4 focus:outline-none border-gray-300 border-[1px] rounded-md"
          placeholder="Search Users..."
          value={search}
          onChange={handleSearch}
          onFocus={() => setShow(true)}
        />
        {show && (
          <div className="absolute w-[234px] flex flex-col gap-3 p-3 rounded-md bg-white top-12 min-h-fit border-[1px] border-gray-200 border-md shadow-lg overflow-y-auto">
            <p
              className="absolute right-5 text-[10px] cursor-pointer"
              onClick={() => setShow(false)}
            >
              close
            </p>
            {users.length === 0 && <p>Users not found!</p>}
            {users.map((val) => {
              return (
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  key={val.userId}
                  onClick={() => select(val)}
                >
                  <div className="w-10 h-10 flex justify-center items-center bg-green-700 text-white font-bold rounded-full">
                    {val.name.substring(0, 1).toUpperCase()}
                  </div>
                  <p className=" ">{val.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-5">
        {inbox.map((val) => {
          return (
            <div
              className={` gap-2 items-center justify-between cursor-pointer ${
                (val.ownerId === userId && val.deleteByOwner === false) ||
                (val.receiverId === userId && val.deleteByReceiver === false)
                  ? "flex"
                  : "hidden"
              }`}
              key={val.inboxId}
              onClick={() => {
                setSelectedChat(val);
                console.log(val);
              }}
            >
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 flex justify-center items-center bg-green-700 text-white font-bold rounded-full">
                  {val.owner?.userId === userId
                    ? val.receiver?.name.substring(0, 1).toUpperCase()
                    : val.owner?.name.substring(0, 1).toUpperCase()}
                </div>
                <p className="text-[20px] font-semibold">
                  {val.owner?.userId === userId
                    ? val.receiver?.name
                    : val.owner?.name}
                </p>
              </div>
              <div
                className={`h-5 w-5 flex justify-center items-center border-[1px] border-red-500 rounded-full`}
                onClick={(e) => deleteInbox(e, val)}
              >
                <BsTrashFill className={` text-red-500 text-[10px]`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InboxList;
