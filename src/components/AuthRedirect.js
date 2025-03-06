"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRedirect({ token }) {
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push("/");
        }
    }, [token, router]);

    return null;
}
