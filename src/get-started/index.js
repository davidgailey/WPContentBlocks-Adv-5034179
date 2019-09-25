const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.editor;
const { Button } = wp.components;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as Logo } from "../wpsu-penn-state.svg";

// Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader
import logoWhiteURL from "../bv-logo-white.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("wpsu-podkit/get-started", {
	title: __("Get Started Block", "wpsu-podkit"),
	icon: { src: Logo },
	category: "wpsu-podkit",
	attributes: {
		largeTitle: {
			type: 'string',
			source: 'html',
			selector: '.large-title',
		},
		smallTitle: {
			type: 'string',
			source: 'html',
			selector: '.small-title',
		},
		watermarkImage: {
			type: 'string',
			source: 'attribute',
			selector: '.get-started-block',
			attribute: 'style',
			default: 'lion-960.jpg',
		},
	},


  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: props => {
    console.info(props);

	// Lift info from props and populate various constants
	// It's good to put these here if they are reused multiple times in the jsx of edit or save methods
    const {
		setAttributes,
		className, 
		attributes: {largeTitle},
		attributes: {smallTitle},
		attributes: {watermarkImage},
		
	} = props;



	const onChangeSmallTitle = newSmallTitle => {
		// set the smallTitle attribute in props to new value from rich test field
		setAttributes({smallTitle : newSmallTitle}); 
	};
	
	const onChangeLargeTitle = newLargeTitle => {
		// set the largeTitle attribute in props to new value from rich test field
		setAttributes({largeTitle : newLargeTitle}); 
	};

	const onImageSelect = imageObject => {
		console.info(imageObject);
		setAttributes({watermarkImage: imageObject.sizes.large.url});
	}

	let style1 = {
		backgroundImage: `url(${watermarkImage})`,
	}

    return (
      <section className="{ `${className} get-started-block container-fluid` }"
	  	style={style1}
	  			>
		<MediaUpload
			onSelect={onImageSelect}
			type="image"
			value={watermarkImage}
			render={({ open }) => (
				<Button onClick={open}>
					Choose a watermark image.
				</Button>
			)}


		/>
        <div className="container">
          <h1 className="display-2">
            <small class="small-title d-block">
				<RichText
					placeholder="Take the next step"
					value={smallTitle}
					onChange={onChangeSmallTitle}
				/>
			</small>

			<span class="large-title">
				<RichText
					placeholder="Get Started"
					value={largeTitle}
					onChange={onChangeLargeTitle}
				/>
			</span>
			
          </h1>

          <p>
            Find a campus, discover an academic program, and learn how you can
            successfully
            <br/>
            transition from service member to student at Penn State.
          </p>

          <button
            type="button"
            className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
          >
            Get Started <span>〉</span>
          </button>
        </div>
      </section>
    );
  },
	save: props => {

		// Lift info from props and populate various constants
		// It's good to put these here if they are reused multiple times in the jsx of edit or save methods
		const {
			setAttributes,
			className, 
			attributes: {largeTitle},
			attributes: {smallTitle},
			attributes: {watermarkImage},
			
		} = props;

		let style1 = {
			backgroundImage: `url(${watermarkImage})`,
		}

		return (
			<section className="get-started-block container-fluid "
					style={style1} >
			<div className="container">
				<h1 className="display-2">
					<small class="small-title d-block">
						<RichText.Content value={props.attributes.smallTitle} />
					</small>
					
					<span class="large-title">
						<RichText.Content value={props.attributes.largeTitle} />
					</span>
				</h1>

				<p>
					Find a campus, discover an academic program, and learn how you can
					successfully
					<br/>
					transition from service member to student at Penn State.
				</p>

				<button
					type="button"
					className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
					>
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
