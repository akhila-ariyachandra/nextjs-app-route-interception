"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/70" />

        <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
