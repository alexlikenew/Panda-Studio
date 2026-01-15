"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <UIContext.Provider value={{ isModalOpen, openModal, closeModal }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUIContext() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUIContext must be used within a UIProvider");
    }
    return context;
}
