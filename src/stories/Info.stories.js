//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconInfo } from "../component/Info";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert Icons/ Info",
  component: WagIconInfo,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconInfo 
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
  <WagIconInfo
  />
);

export const Larger_Size = () => (
  <WagIconInfo
    size="sixty-four"
  />
);




