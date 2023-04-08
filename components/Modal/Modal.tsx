"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.DialogContent>{children}</Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
