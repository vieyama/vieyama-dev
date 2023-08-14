import React, {useState} from "react";

import Button from "../Button";

import Modal from ".";

import type {IModal} from ".";
import type {Meta} from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: "Modal content, you can write with ReactNode or string",
      control: {type: "ReactNode"},
    },
    footer: {
      control: {type: "ReactNode"},
    },
    isOpen: {
      defaultValue: false,
    },
    onClose: {
      control: {
        type: "Void Function",
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Example = (args: IModal) => {
  const [isOpen, setOpen] = useState(false);

  const handleModalClose = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={() => setOpen(!isOpen)}>Open Modal</Button>
      <Modal {...args} onClose={handleModalClose} isOpen={isOpen}>
        {args.children}
      </Modal>
    </>
  );
};

Example.args = {
  children: (
    <span className="text-left">
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
      quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
      magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
      eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
      Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
      consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
      deserunt nostrud ad veniam.
    </span>
  ),
  title: "Modal label",
  closable: true,
  footer: (
    <div className="mb-2 mt-4 flex gap-2">
      <Button>Save</Button>
      <Button variant="danger">Cancel</Button>
    </div>
  ),
};
