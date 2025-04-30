/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'i.ibb.co',
		},
		{
		  protocol: 'https',
		  hostname: 'images.gofundme.com',
		},
	  ],
	},
  };
  
  export default nextConfig;