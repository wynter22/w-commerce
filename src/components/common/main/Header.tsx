import React from 'react';

const header = () => {
  return (
    <>
      <header className="navigation">
        <div className="navigation-primary">
          <div className="navigation-primary__content">
            <div>Logo</div>
            <div>Menu</div>
            <div className="navigation-primary__right">
              NavigationBar :<div>SearchBar</div>
              <div>|NavigationBar</div>
              <div>|UploadButton</div>
            </div>
          </div>
        </div>
        <div className="navigation-secondary">
          <div className="navigation-secondary__content">
            <div>menu1</div>
            <div>menu2</div>
            <div>menu3</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
