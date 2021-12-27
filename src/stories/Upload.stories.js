//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconUpload } from "../component/Upload";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows Icons/ Upload",
  component: WagIconUpload,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconUpload
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
  <WagIconUpload
  />
);

export const Larger_Size = () => (
  <WagIconUpload
    size="sixty-four"
  />
);




