import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSportsEvents } from "../../context/SportsEventsContext";
import InstructionModal from "./InstructionModal";

const Header = () => {
  const {
    sportsEventsState: { registeredEvents },
  } = useSportsEvents();

  const {
    isOpen: isInstructionModalOpen,
    onOpen: onInstructionModalOpen,
    onClose: onInstructionModalClose,
  } = useDisclosure();

  return (
    <>
      <nav className="flex px-10 py-5 bg-slate-800 text-slate-50 items-center justify-between">
        <div className="flex gap-x-10 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${
                isActive
                  ? "font-heavy border-b-2 border-slate-50"
                  : "font-regular"
              }  pb-1`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/registered-events"
            className={({ isActive }) => {
              return `${
                isActive
                  ? "font-heavy border-b-2 border-slate-50"
                  : "font-regular"
              }  pb-1`;
            }}
          >
            Registered Events{" "}
            {!!registeredEvents.length && (
              <span className="bg-slate-50 rounded-full px-[6px] h-2 text-slate-700 text-sm font-extrabold ml-1">
                {registeredEvents.length}
              </span>
            )}
          </NavLink>
        </div>
        <button
          className="font-extrabold border-2 border-slate-50 px-[10px] rounded-full"
          onClick={onInstructionModalOpen}
        >
          i
        </button>
      </nav>
      <InstructionModal
        isOpen={isInstructionModalOpen}
        onClose={onInstructionModalClose}
      />
    </>
  );
};

export default Header;
