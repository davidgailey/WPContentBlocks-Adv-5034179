const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, 
		RichText, 
		URLInputButton, 
		InspectorControls,
		ColorPalette,
		BlockControls } = wp.editor;
const { Button,
		IconButton,
		PanelBody } = wp.components;

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
			default: 'Get Started',
		},
		smallTitle: {
			type: 'string',
			source: 'html',
			selector: '.small-title',
			default: 'Take the next step',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: '.get-started-description',
			default:'Find a campus, discover an academic program, and learn how you can successfully transition from service member to student at Penn State.'
		},
		watermarkImage: {
			type: 'string',
			source: 'attribute',
			selector: '.get-started-block',
			attribute: 'style',
			default: '/wp-content/themes/military-psu-edu/assets/images/src/lion-960.jpg',
		},
		buttonText: {
			type: 'string',
			source: 'html',
			selector: '.call-to-action',
			default: 'Get Started',
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			selector: '.call-to-action',
			attribute: 'href',
			default: '#',
		},
		filterColor: {
			type: 'string',
			default: '#1E407C',
		}
	},
	supports: {
		align: [ 'wide', 'full' ],
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
		attributes: {description},
		attributes: {buttonText},
		attributes: {buttonURL},
		attributes: {filterColor},
		
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

	const onChangeDescription = newDescription => {
		// set the largeTitle attribute in props to new value from rich test field
		setAttributes({description : newDescription}); 
	};

	const onChangeButtonText = newButtonText => {
		// set the largeTitle attribute in props to new value from rich test field
		setAttributes({buttonText : newButtonText}); 
	};

	const onChangeButtonURL = newButtonURL => {
		console.info(newButtonURL);
		setAttributes({buttonURL: newButtonURL});
	};

	const onChangeFilterColor = newFilterColor => {
		console.info(newFilterColor);
		setAttributes({filterColor: newFilterColor});
	};

	let style1 = {
		backgroundImage: `url(${watermarkImage})`,
	};

	let style2 = {
		backgroundColor: `${filterColor}`,
		background: `linear-gradient(-90deg, ${filterColor}cc 0%, ${filterColor}bb 100%)`,
	}

	// return an array
	// first is the inspector controls then the actual jsx
	return [

		<InspectorControls>
			<PanelBody title="Filter Color">
				<div className="compontents-base-control">
					<div className="compontents-base-control__field">
						<label className="compontents-base-control__label">
							PSU Brand Colors
						</label>
					</div>
					<ColorPalette
						value={filterColor}
						onChange={onChangeFilterColor}
					/>
					
				</div>

			</PanelBody>
			<PanelBody title="Background Image">
				<div className="compontents-base-control">
					<div className="compontents-base-control__field">
						<label className="compontents-base-control__label">
							Choose a Background Image
						</label>
					</div>
					<MediaUpload
						onSelect={onImageSelect}
						type="image"
						value={watermarkImage}
						render={({ open }) => (
							<Button onClick={open}>
								Choose an image.
							</Button>
						)}
					/>
					
				</div>

			</PanelBody>
		</InspectorControls>,
		<section className="{className} get-started-block container-fluid"
	  		style={style1}>
			
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

				<p className="get-started-description w-50 mx-auto">
					<RichText
						placeholder="Find a campus, discover an academic program, and learn how you can
							successfully 
							transition from service member to student at Penn State."
						value={description}
						onChange={onChangeDescription}
					/>
				</p>

				<a
					href="#"
					className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
				>
					<RichText
						placeholder="Get Started"
						value={buttonText}
						onChange={onChangeButtonText}
					/> 
					<span>〉</span>
				</a>

				<URLInputButton
					className=""
					label=""
					onChange={onChangeButtonURL}
					url={buttonURL}
				>

				</URLInputButton>

			</div>
			<div className="filter-color-custom" style={style2}></div>
		</section>
	];
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
			attributes: {description},
			attributes: {buttonText},
			attributes: {buttonURL},
			attributes: {filterColor},
			
		} = props;

		let style1 = {
			backgroundImage: `url(${watermarkImage})`,
		}

		let style2 = {
			backgroundColor: `${filterColor}`,
			background: `linear-gradient(-90deg, ${filterColor}cc 0%, ${filterColor}bb 100%)`,
		}

		return (
			<section className="get-started-block container-fluid "
					style={style1} >
				
				<div className="container">
					<h1 className="display-2">
						<small class="small-title d-block">
							<RichText.Content value={smallTitle} />
						</small>
						
						<span class="large-title">
							<RichText.Content value={largeTitle} />
						</span>
					</h1>

					<p className="get-started-description w-50 mx-auto">
						{description}
					</p>

					<a
						href="{buttonURL}"
						className="btn btn-lg call-to-action bg-gradient-psu-sky text-light font-weight-bold"
						>
						{buttonText} <span>〉</span>
					</a>
				</div>
				<div className="filter-color-custom" style={style2}></div>
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
