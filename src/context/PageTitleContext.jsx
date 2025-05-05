import React, { createContext, useContext, useState } from 'react';

const PageTitleContext = createContext(null);

export function PageTitleProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('Home');

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export function usePageTitle() {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
}
