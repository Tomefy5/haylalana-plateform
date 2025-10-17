import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)', // routes pages
    '/([\\w-]+)?/users/(.+)' // exemple pour routes dynamiques avec points
  ]
};
