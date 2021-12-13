//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRecordDownload } from "../component/Record_Download";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Record - Download",
  component: WagIconRecordDownload,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRecordDownload
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRecordDownload
  />
);

export const Larger_Size = () => (
  <WagIconRecordDownload
    size="sixty-four"
  />
);




