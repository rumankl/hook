import React from 'react'
// import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
const Some = () => {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];
  // const customers = [
  //   {
  //     name: "Tania Andrew",
  //     email: "tania@gmail.com",
  //     price: 400,
  //     image:
  //       "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  //   },
  //   {
  //     name: "John Micheal",
  //     email: "john@gmail.com",
  //     price: 420,
  //     image:
  //       "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  //   },
  //   {
  //     name: "Alexa Liras",
  //     email: "alexa@gmail.com",
  //     price: 340,
  //     image:
  //       "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  //   },
  //   {
  //     name: "Richard Gran",
  //     email: "richard@gmail.com",
  //     price: 520,
  //     image:
  //       "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  //   },
  //   {
  //     name: "Micheal Levi",
  //     email: "levi@gmail.com",
  //     price: 780,
  //     image:
  //       "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  //   },
  // ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {data.map(({ imageLink }, index) => (
      <div key={index}>
        <img
          className="h-40 w-full max-w-full rounded-lg object-cover object-center"
          src={imageLink}
          alt="gallery-photo"
        />
      </div>
    ))}
  </div>
  //   <Card className="w-96">
  //   <CardBody>
  //     <div className="mb-4 flex items-center justify-between">
  //       <Typography variant="h5" color="blue-gray" className="">
  //         Latest Customers
  //       </Typography>
  //       <Typography
  //         as="a"
  //         href="#"
  //         variant="small"
  //         color="blue"
  //         className="font-bold"
  //       >
  //         View all
  //       </Typography>
  //     </div>
  //     <div className="divide-y divide-gray-200">
  //       {customers.map(({ name, email, price, image }, index) => (
  //         <div
  //           key={index}
  //           className="flex items-center justify-between pb-3 pt-3 last:pb-0"
  //         >
  //           <div className="flex items-center gap-x-3">
  //             <Avatar size="sm" src={image} alt={name} />
  //             <div>
  //               <Typography color="blue-gray" variant="h6">
  //                 {name}
  //               </Typography>
  //               <Typography variant="small" color="gray">
  //                 {email}
  //               </Typography>
  //             </div>
  //           </div>
  //           <Typography color="blue-gray" variant="h6">
  //             ${price}
  //           </Typography>
  //         </div>
  //       ))}
  //     </div>
  //   </CardBody>
  // </Card>
  )
} 

export default Some
