// src/components/module/SettingsModal.tsx
import { useRef } from "react";
import Modal from "../ui/Modal";
import InputSet from "../ui/InputSet.tsx";
import Input from "../ui/Input.tsx";
import InputGroup from "../ui/InputGroup.tsx";
import CustomBtn from "../ui/CustomBtn.tsx";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsModal({ open, onClose }: SettingsModalProps) {
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  if (!open) return null;

  const descId = "settings-modal-desc";

  return (
    <Modal
      title="사육 정보 입력"
      size="sm"
      onClose={onClose}
      initialFocus={() => firstFocusableRef.current}
      ariaDescribedBy={descId}
    >
      <InputGroup variant="col" className="!py-0">
        <InputSet label="미수">
          <Input type="text" readOnly unit="미" number value="9,000,000" className="grow" />
        </InputSet>
        <InputSet label="평균체중">
          <Input type="text" readOnly unit="g" number value="780" className="grow" />
        </InputSet>
      </InputGroup>
      <CustomBtn size="lg" variant="primary" className="grow w-full md:grow-0 md:w-auto" >저장하기</CustomBtn>
    </Modal>
  );
}
