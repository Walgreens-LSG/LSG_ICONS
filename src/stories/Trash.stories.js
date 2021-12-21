//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconTrash } from "../component/Trash";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc / Trash",
  component: WagIconTrash,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconTrash
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
    </div>
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconTrash
  />
);

export const Larger_Size = () => (
  <WagIconTrash
    size="sixty-four"
  />
);




