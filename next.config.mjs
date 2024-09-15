/** @type {import('next').NextConfig} */

import withVideos from "next-videos";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default {
    ...nextConfig,
    ...withVideos(),
};
// const withVideos = require('next-videos');

// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: "https",
//             hostname: "**",
//           },
//         ],
//       },
      
//     };
    
    
//     module.exports = withVideos(nextConfig);


