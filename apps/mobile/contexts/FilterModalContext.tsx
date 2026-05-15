import React, { createContext, useContext, useState } from "react";

interface FilterModalContextType {
  showFilterModal: boolean;
  setShowFilterModal: (show: boolean) => void;
  selectedChannelId: string | null;
  setSelectedChannelId: (channelId: string | null) => void;
}

const FilterModalContext = createContext<FilterModalContextType | undefined>(
  undefined,
);

export function FilterModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);

  return (
    <FilterModalContext.Provider
      value={{
        showFilterModal,
        setShowFilterModal,
        selectedChannelId,
        setSelectedChannelId,
      }}
    >
      {children}
    </FilterModalContext.Provider>
  );
}

export function useFilterModal() {
  const context = useContext(FilterModalContext);
  if (context === undefined) {
    throw new Error("useFilterModal must be used within a FilterModalProvider");
  }
  return context;
}
