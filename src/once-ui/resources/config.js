const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'FillUsIn - Your way to reach Gazan families directly',
    description: "With aid being blocked, and major organizations' operations being hindered, we get money directly to Gazans to enable them to buy food and more.",
    keywords: [
      'Gaza', 'Palestine', 'Donate', 'Fund', 'Help', 'Support', 'Aid', 'Humanitarian', 'Save', 'Free Gaza'
    ]
}


// default open graph data
const og = {
    title: 'Get Filled In Today',
    description: 'We connect donors to families in Gaza',
    type: 'website',
    image: '/images/og.png'
}

// default schema data
const schema = {
    logo: '/images/logo.svg',
    type: 'Organization',
    name: 'FillUsIn',
    description: "With aid being blocked, and major organizations' operations being hindered, we get money directly to Gazans to enable them to buy food and more.",
    email: 'zaidhimran2000@gmail.com'
}

// social links
const social = {
    // twitter: 'https://www.twitter.com/_onceui',
    linkedin: 'https://www.linkedin.com/company/zaidhimran/',
    // discord: 'https://discord.com/invite/5EyAQ4eNdS'
}

export { baseURL, style, meta, og, schema, social };