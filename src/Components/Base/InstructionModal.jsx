import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { EVENT_REGISTRATION_COUNT_LIMIT } from "../../constants";

const InstructionModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Instructions</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="!pb-5 flex flex-col gap-y-3">
          <li>Welcome to Sports Day Events.</li>
          <li>We encoursge you to participate in atleast one event.</li>
          <li>Showcase your skills and win exciting medals and prizes.</li>
          <li>
            Please note that you can register only upto{" "}
            {EVENT_REGISTRATION_COUNT_LIMIT} events.
          </li>
          <li>
            Please note that you cannot participate in events with conflicting
            times.
          </li>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InstructionModal;
