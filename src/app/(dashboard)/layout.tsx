import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="grid grid-cols-12">
            {/* sidebar content */}
            <div className="col-span-3">
                <p>sidebar content</p>
            </div>
            <div className="col-span-9">
                <p>this children content</p>
                {children}
            </div>
        </div>
    );
};

export default Layout;