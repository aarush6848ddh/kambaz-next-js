export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid layout</h2>
      <div id="wd-css-left-right-layout">
        <div className="wd-grid-row">
          <div className="wd-grid-col-half-page wd-bg-color-yellow">
            Left half
          </div>
          <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
            Right half
          </div>
        </div>
      </div>
      <div id="wd-css-left-third-right-two-thirds">
        <div className="wd-grid-row">
          <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
            Left third
          </div>
          <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
            Right two thirds
          </div>
        </div>
      </div>
      <div id="wd-css-side-bars">
        <div className="wd-grid-row">
          <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
            Side bar
            <br />
            This is the left sidebar
          </div>
          <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
            Main content
            <br />
            This is the main content. This is the main content. This is the main content.
          </div>
          <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
            Side bar
            <br />
            This is the right sidebar
          </div>
        </div>
      </div>
    </div>
  );
}


