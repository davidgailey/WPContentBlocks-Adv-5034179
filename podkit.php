<?php

/**
 * Plugin Name: WPSU-Podkit
 * Plugin URI: https://github.com/davidgailey/WPContentBlocks-Adv-5034179
 * Description: Custom block plugin used by WPSU for WordPress clients, forked from the LinkedIn Learning course "WordPress Content Blocks: Advanced".
 * Version: 1.0.0
 * Author: Morten Rand-Hendriksen.
 */
defined('ABSPATH') || exit;

/*
 * Load translations (if any) for the plugin from the /languages/ folder.
 *
 * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
 */
add_action('init', 'wpsu_podkit_load_textdomain');

function wpsu_podkit_load_textdomain()
{
    load_plugin_textdomain('wpsu-podkit', false, basename(__DIR__).'/languages');
}

/*
 * Add custom image size for block featured image.
 *
 * @link https://developer.wordpress.org/reference/functions/add_image_size/
 */
add_action('init', 'wpsu_podkit_add_image_size');

function wpsu_podkit_add_image_size()
{
    add_image_size('podkitFeatImg', 250, 250, array('center', 'center'));
}

/*
 * Register custom image size with sizes list to make it available.
 *
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/image_size_names_choose
 */
add_filter('image_size_names_choose', 'wpsu_podkit_custom_sizes');

function wpsu_podkit_custom_sizes($sizes)
{
    return array_merge($sizes, array(
        'podkitFeatImg' => __('Podkit Featured Image'),
    ));
}

/*
 * Add custom "WPSU-Podkit" block category
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter('block_categories', 'wpsu_podkit_block_categories', 10, 2);

function wpsu_podkit_block_categories($categories, $post)
{
    // if ($post->post_type !== 'post') {
    //     return $categories;
    // }

    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'wpsu-podkit',
                'title' => __('WPSU-Podkit', 'wpsu-podkit'),
                'icon' => '',
            ),
        )
    );
}

/*
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action('init', 'wpsu_podkit_register_blocks');

function wpsu_podkit_register_blocks()
{
    // If Block Editor is not active, bail.
    if (!function_exists('register_block_type')) {
        return;
    }

    // Register the block editor script.
    wp_register_script(
        'wpsu-podkit-editor-script-static',											// label
        plugins_url('build/index.js', __FILE__),						// script file
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),		// dependencies
        filemtime(plugin_dir_path(__FILE__).'build/index.js')		// set version as file last modified time
    );

    wp_register_script(
        'wpsu-podkit-editor-script-get-started',											// label
        plugins_url('build/index.js', __FILE__),						// script file
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),		// dependencies
        filemtime(plugin_dir_path(__FILE__).'build/index.js')		// set version as file last modified time
    );

    // Register the block editor stylesheet.
    wp_register_style(
        'wpsu-podkit-editor-styles-static',											// label
        plugins_url('build/editor.css', __FILE__),					// CSS file
        array('wp-edit-blocks'),										// dependencies
        filemtime(plugin_dir_path(__FILE__).'build/editor.css')	// set version as file last modified time
    );

    wp_register_style(
        'wpsu-podkit-editor-styles-get-started',											// label
        plugins_url('build/editor.css', __FILE__),					// CSS file
        array('wp-edit-blocks'),										// dependencies
        filemtime(plugin_dir_path(__FILE__).'build/editor.css')	// set version as file last modified time
    );

    // Register the front-end stylesheets.
    wp_register_style(
        'wpsu-podkit-front-end-styles-static',										// label
        plugins_url('build/style.css', __FILE__),						// CSS file
        array(),														// dependencies
        filemtime(plugin_dir_path(__FILE__).'build/style.css')	// set version as file last modified time
    );

    wp_register_style(
        'wpsu-podkit-front-end-styles-get-started',										// label
        plugins_url('../../themes/military-psu-edu/assets/css/blocks/get-started-block.min.css', __FILE__),						// CSS file
        array(),														// dependencies
        filemtime(get_template_directory().'/assets/css/blocks/get-started-block.min.css')	// set version as file last modified time
    );

    // Array of block created in this plugin.
    $blocks = [
        'wpsu-podkit/static',
        'wpsu-podkit/get-started',
    ];

    // $blocks = '{
    //     "wpsu-podkit/static":"{

    //     }",
    //     "2":"b",
    //     "3":"c",
    //     "4":"d",
    //     "5":"e"
    // }';
    // $obj = json_decode($json, TRUE);

    // foreach($obj as $key => $value)
    // {
    //     echo 'Your key is: '.$key.' and the value of the key is:'.$value;
    // }

    // Loop through $blocks and register each block with the same script and styles.
    foreach ($blocks as $block) {
        register_block_type($block, array(
            'editor_script' => 'wpsu-podkit-editor-script'.str_replace('wpsu-podkit/', '-', $block),					// Calls registered script above
            'editor_style' => 'wpsu-podkit-editor-styles'.str_replace('wpsu-podkit/', '-', $block),					// Calls registered stylesheet above
            'style' => 'wpsu-podkit-front-end-styles'.str_replace('wpsu-podkit/', '-', $block),						// Calls registered stylesheet above
        ));
    }

    if (function_exists('wp_set_script_translations')) {
        /*
         * Adds internationalization support.
         *
         * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/internationalization/
         * @link https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations('wpsu-podkit-editor-script', 'wpsu-podkit', plugin_dir_path(__FILE__).'/languages');
    }
}
