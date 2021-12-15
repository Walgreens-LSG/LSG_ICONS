//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHeartHealthInfo } from "../component/HeartHealthInfo";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Heart - Health info",
  component: WagIconHeartHealthInfo,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHeartHealthInfo
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHeartHealthInfo
  />
);

export const Larger_Size = () => (
  <WagIconHeartHealthInfo
    size="sixty-four"
  />
);




