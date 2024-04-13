import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const roles = v.union(v.literal("admin"), v.literal("member"));

export default defineSchema({
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(),
        orgIds: v.array(
            v.object({
                orgId: v.string(),
                role: roles,
            })
        ),
    }).index("by_token", ["tokenIdentifier"]),
})