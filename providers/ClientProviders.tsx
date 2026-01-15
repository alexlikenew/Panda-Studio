"use client";

import { UIProvider } from "./UIContext";
import React, { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
    return <UIProvider>{children}</UIProvider>;
}
