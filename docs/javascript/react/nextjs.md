# Next.js docs

The React framework for production.

## Basics

install

```bash

# /. mean will add files to this current path without create new folder
npx create-next-app my-app /.
```

### folders

- You can put your components in `components` folder
- Don't put your components file inside `pages` folder

```
components/

pages/
  api/
    index.jsx
  _app.jsx
  index.jsx

public/

styles/
  globals.css

.gitignore
```

```jsx
/* _app.js */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### styling

```
	styles/
```

- if you want to make a global css file you can import the file inside `pages/_app.jsx`
- Local style using `css.module`

#### App Layout

```jsx
/* _app.jsx */
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

function MyApp({ Component, PageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
```

### Head Component

```jsx
import Head from 'next/head';
export default function About() {
  return (
    <div>
      <Head>
        {/* header elements here */}
        <title>About header title</title>
      </Head>
      About data here....
    </div>
  );
}
```

### Image Component

```jsx
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Image
        src=''
        alt=''
        placeholder='blur'
        height='300'
        width='200'
        blurDataUrl=''
      />
      About data here....
    </div>
  );
}
```

### Routing

When a file is added to the `pages` folder in our project,
It automatically becomes available as a route.

```
pages/
  index.jsx #===> /
  about.jsx #===> /about.js
```

#### Dynamic router

```
pages/
  blog/
    index.jsx #===> /blog
    first.jsx #===> /blog/first
    [blog].jsx #===> /blog/2
```

we use `[blog].jsx` to create Dynamic router

::: info
if you have dynamic router and file in the same folder
the file will be the first executed in the router tree
:::

```jsx
/* [blog].jsx */

import { useRouter } from 'next/router';

export function Blog() {
  const router = useRouter();

  // query.blog came from file name
  const blogId = router.query.blog;

  return <h1>Hello you visit {blogId} page</h1>;
}
```

you can use advanced dynamic router by mix files and folders

```
pages/
  product/
    [productId]/
      index.jsx
      [reviews]/
        [reviewId].jsx
```

#### Catch all routes

```
pages/
  blog/
    index.jsx
    [...params].jsx
```

if you don't want to use `index.jsx` file you can edit
`[...params].jsx` to `[[...param]].jsx`

#### Link

use `replace` to

```jsx
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/about'>
        <a>about us</a>
      </Link>

      <Link href='/blog/3' replace>
        <a>blog 3</a>
      </Link>
    </div>
  );
}
```

if you don't have another child `a` you can use `passHref`

```jsx
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Link href='/' passHref>
        Home
      </Link>
    </div>
  );
}
```

#### Navigating programmatically

```jsx
import { useRouter } from 'next';

function Home() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/home')}>go to home</button>
    </div>
  );
}
```

#### 404 page

add and edit `404.jsx` file.

```
pages/
  404.jsx
```

### Pre-rendering

Next.js generates html for each page in advance instead of having it all done by `client-side` javascript.

#### getStaticProps

- runs only on the server side.
- You can write server-side code directly in it.
- It should returns an object and object should contain a `props` key

**getStaticProps**

- will run at build time.
- During development, it runs on every request

```jsx
export default function UserList(props) {
  return <div>{props.user}</div>;
}

export async function getStaticProps() {
  const data = await fetch('');

  return {
    props: {
      user: data,
    },
  };
}
```

**Not about SG** `sg => server generate`

- SG generate two files `html` and `json` for each page.
- if you navigate directly to the page route, the html file is served
- If you navigate to page from another route the page is created client side using the `javascript + json file`

`getStaticProps` reside a context param content `params` object passed by `getStaticPaths`

```jsx
export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: {
      user: data,
    },
  };
}
```

#### getStaticPaths

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: '1' },
      },
    ],
    fallback: false,
  };
}
```

##### getStaticPaths and fallback

1. **fallback: false**

- The paths returned from `getStaticPaths` will be rendered to Html at build time by `getStaticProps`
- Any paths not returned by `getStaticProps` will result in **404 page**

2. **fallback: true**
   _when to used it_

- if your app has a very large number of static pages that depend on data.

```jsx
import { useRouter } from 'next';

export default function Post(props) {
  const router = useRouter();

  if (router.isLoading) {
    return <h1>Loading......</h1>;
  }
  return <div>{props.data}</div>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`/api/posts/${params.postId}`);
  const data = await response.json();

  // to render 404 page if there is not any data
  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page for /posts/${params.postId}`);
  return { props: { post: data } };
}

export async function getStaticPaths() {
  return { paths: [{ params: { postId: '1' } }], fallback: true };
}
```

3. **fallback: 'blocking'**
   like fallback:true but there isn't any loading indicator.

#### Incremental Static Regeneration `ISR`

- with `ISR`, nextjs allows us to update static pages after you've built your app

```jsx
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 5, // will wait 5 second
  };
}
```

#### getServerSideProps

```jsx
export async function getServerSideProps({ params, req, res, query }) {
  return {
    props: {},
  };
}
```

### Client-side data fetching

use `SWR` react hooks for data fetching

## Api Routes

- Don't call your own api from `getStaticProps` or `getServerProps`

```
pages/
  api/
    index.jsx
```

```jsx
export default function handler(req, res) {
  res.status(200).json({ name: 'Ahmed' });
}
```

### Post api

```jsx
export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ mess: 'post added' });
  }
}
```

### Dynamic api routes

```
	api/
		[postId]/
			[commentId].jsx

```

```jsx
/* [commentId].jsx */

export default function handler(req, res) {
  console.log(req.query.commentId);
}
```

### catch all api

```
api/
  [postId]/
    [[...params]].jsx

```

```jsx
/* [commentId].jsx */

export default function handler(req, res) {
  console.log(req.query.params);
}
```

### Preview mode

help application that rely on a CMS

```jsx
/* api/preview.jsx */
export default function handler(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.redirect);

  res.clearPreviewData();
}
```

```jsx
/* pages/news.jsx */
export async function getStaticProps(context) {
  console.log(context.previewData);

  return {
    props: {
      data: context.preview,
    },
  };
}
```

## config file

### Absolute imports

```js
/* jsconfig.json */
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/layout/*": ["components/layout/*"]
    }
  }
}
```

### Redirects

```js
/* next.config.js */
module.exports = {
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
```

## Command line

### Static Html export

```bash
	next build && next export
```

## Authentication

::: info
`Identity` (Authentication): verifies who a user is.
:::

::: info
`Access` (Authorization): verifies what permissions the user has.
:::

### next-auth

```jsx
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [Providers.GitHub({})],
});
```

```jsx
import { signIn, signOut } from 'next-auth/client';

export default function User() {
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign In
      </a>
    </div>
  );
}
```

### client-side Authentication

```jsx
import { getSession } from "next-auth/client";

function User() {
  const session = await getSession();
  if (!session) {
    signIn();
  } else {
    console.log("user is login");
  }
}
```

### Next-auth Provider

```jsx
import { Provider } from 'next-auth/provider';

function MyApp({ comp, props }) {
  return (
    <Provider>
      <comp {...props} />
    </Provider>
  );
}
```

### Server side Authentication

```jsx
import {getSession} from 'next-auth/client';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}


// on _app.jsx edit Provider to
<Provider session={PageProps.session}>
```

### Securing pages server side

```jsx
import { getSession } from 'next-auth/client';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signing?callbackurl=http://localhost:3000/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
```

### Securing Api routes

```jsx
import { getSession } from 'next-auth/client';

export async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'unauthenticated user' });
  } else {
    res.status(200).json({ message: '', session });
  }
}
```
