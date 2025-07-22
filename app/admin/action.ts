"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
// Define Roles type here if not available in external module
export type Roles = "admin" | "user" | "guest";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (sessionClaims?.metadata?.roles !== "admin") {
        throw new Error("Unauthorized: Only admins can set roles.");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as Roles;

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role }, 
        });
        revalidatePath("/admin")
    } catch {
        throw new Error("Failed to set user role.");
    }
}

export async function removeRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (sessionClaims?.metadata?.roles !== "admin") {
        throw new Error("Unauthorized: Only admins can set roles.");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role: null }, 
        });
        revalidatePath("/admin")
    } catch {
        throw new Error("Failed to remove user role.");
    }
}