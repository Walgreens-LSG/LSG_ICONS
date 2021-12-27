//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconResize } from "../component/Resize";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo Icons/ Resize",
  component: WagIconResize,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconResize
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
  <WagIconResize
  />
);

export const Larger_Size = () => (
  <WagIconResize
    size="sixty-four"
  />
);




