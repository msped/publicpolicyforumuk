import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", '/design', '/collaborate', '/integrate', '/support'],
    ignoredRoutes: ["/favicon.ico", "/logo.webp"]
})

export const config = {
    matcher: ["/((?!.+\\.[//w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}