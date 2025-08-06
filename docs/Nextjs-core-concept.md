# Next Js core concept

- Visit official Documentation [https://nextjs.org/](https://nextjs.org/)
- run the code in terminal
```
npx create-next-app@latest
```
- ***Follow the steps from the image***

![alt text](image-1.png)

- Run the app
```
npm run dev
```
- make change in page.js to check if it is working
- visit [Nextjs Documentation](https://nextjs.org/docs/app/getting-started/project-structure)
- select `using app router` > `Project Structure`
- create `components`
```
📦src
 ┗ 📂app
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜Navbar.tsx

```
- add `navbar` and `footer` at layout 
- create main section for `children` and add classname h-screen
- create component folder for add component footer, navbar
- follow [pages and layout documentation](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- To create new page create new folder and file in `app` folder
```
📦app
 ┣ 📂components
 ┃ ┣ 📜Footer.tsx
 ┃ ┗ 📜Navbar.tsx
 ┣ 📂Services
 ┃ ┗ 📜page.tsx

 ```
 - For Nested route follow the same instruction as new route in nested route


- ## Dynamic route setup for Service page

```
📦services
 ┣ 📂[slug]
 ┃ ┗ 📜page.tsx
 ┗ 📜page.tsx
 ```

 ## Dynamic Page code for service page
```ts
import React from 'react';

interface ServiceDetailsPageProps {
    params: {
        slug: string;
    };
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({ params }) => {
    const slug = params?.slug;
    return (
        <div>
            <h1>This is service details page for service: {slug}</h1>
        </div>
    );
};

export default ServiceDetailsPage;
```
- Navbar condition for dashboard

- Create `not-found.jsx` and `loading.tsx`for error page in app folder
- [middleware](https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware)

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}

```
















