//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconDownload } from "../component/Download";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows/ Download",
  component: WagIconDownload,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconDownload
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
  <WagIconDownload
  />
);

export const Larger_Size = () => (
  <WagIconDownload
    size="sixty-four"
  />
);




