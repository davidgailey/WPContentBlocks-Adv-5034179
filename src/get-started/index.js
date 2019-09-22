const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as Logo } from "../bv-logo.svg";

// Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader
import logoWhiteURL from "../bv-logo-white.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("podkit/get-started", {
  title: __("Like & Subscribe", "podkit"),
  icon: { src: Logo },
  category: "military-podkit",

  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: props => {
    return (
      <section className="get-started-block container-fluid">
        <div className="container">
          
          <h1 className="display-2">
            <small>Take the next step</small>
            <br/>
            Get Started
          </h1>

          <p>
            Find a campus, discover an academic program, and learn how you can successfully
            <br/>
            transition from service member to student at Penn State.
          </p>

          <button type="button" className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold">
            Get Started <span>〉</span>
          </button>

        </div>
      </section>
    );
  },
  save: props => {
    return (
      <section className="get-started-block container-fluid">
        <div className="container">
          
          <h1 className="display-2">
            <small>Take the next step</small>
            <br/>
            Get Started
          </h1>

          <p>
            Find a campus, discover an academic program, and learn how you can successfully
            <br/>
            transition from service member to student at Penn State.
          </p>

          <button type="button" className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold">
            Get Started <span>〉</span>
          </button>

        </div>
      </section>
    );
  }
});


// <div className="podkit-block podkit-static">
//         <figure className="podkit-logo">
//           <img src={logoWhiteURL} alt="logo" />
//         </figure>
//         <div className="podkit-info">
//           <h3 className="podkit-title">
//             {__("The Binaryville Podcast", "podkit")}
//           </h3>
//           <div className="podkit-cta">
//             <a href="/subscribe">{__("Like & Subscribe!", "podkit")}</a>
//           </div>
//         </div>
//       </div>
