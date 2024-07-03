/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    action: '/page01',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/LamentCover.png`,
    //image: "http://localhost:3000/LamentCover.png",
    imageAspectRatio: '1:1',
    
    intents: [
      //<TextInput placeholder="Enter custom fruit..." />,
      <Button value="Read Comic">Read Comic</Button>,
      <Button.Link href='https://sloppystudios.io'> SloppyStudios website</Button.Link>,
     
     
    ],
  })
})

app.frame('/page01', (c) => {
  return c.res({
    action: '/page02',
    //image: "http://localhost:3000/Comic-01.gif",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/Comic-01.gif`,
 
    imageAspectRatio: '1:1',
    intents: [
      //<TextInput placeholder="Enter custom fruit..." />,
      <Button value="next page">next page</Button>,
      <Button value="restart">restart</Button>,
      <Button.Link href='https://sloppystudios.io'> SloppyStudios website</Button.Link>,
     
     
    ],
  })

})

app.frame('/page02', (c) => {
  const { buttonValue } = c

  if(buttonValue ==='next page'){
    return c.res({
      //action: '/page02',
      //image: "http://localhost:3000/Comic-02.gif",
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/Comic-02.gif`,
      imageAspectRatio: '1:1',
      intents: [
        //<TextInput placeholder="Enter custom fruit..." />,
       // <Button value="next page">next page</Button>,
       <Button.Link href='https://sloppystudios.io'> SloppyStudios website</Button.Link>,
   
      ],
    })
  }
  // restart

  return c.res({
    action: '/page01',
    //image: "http://localhost:3000/LamentCover.png",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/LamentCover.png`,
    imageAspectRatio: '1:1',
    intents: [
      //<TextInput placeholder="Enter custom fruit..." />,
      <Button value="Read Comic">Read Comic</Button>,
      <Button.Link href='https://sloppystudios.io'> SloppyStudios website</Button.Link>,
     
     
    ],
 
  })

})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
