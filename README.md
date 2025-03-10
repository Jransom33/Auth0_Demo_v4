Auth0 quick start not working for Next.js? Its probably because you are using the V3 documentation they provide with the V4 package installed. Here is a demo of simple login with V4 of auth0/nextjs-auth0. 

## Quick Rundown of file
This is a demo project of how to implement a simple login on auth0/nextjs-auth0 V4. This consists of 3 major files:

### middleware.js
This file replaces the Route Handler, under /app/api/auth/[auth0]/route.ts that was present in V3 of auth0. (as explained in the V4 migration guide: https://github.com/auth0/nextjs-auth0/blob/main/V4_MIGRATION_GUIDE.md)

### lib/auth0.js
This file instantiates an auth0client

### page.js (home page)
This file imports the { auth0} from lib/auth0.js and uses get session to conditionally render a sign up/login button or a logout button based on whether the user has an active session.


## Final Note on .env file
Make sure that the format/naming convention of your environment variables are correct. See migration guide above to double check. The environment variable naming conventions have change from V3 and the sample file in this project is correct as us the writing of this readme file.

This link is also useful for navigating V4 documentation: https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md






The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
