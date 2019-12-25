<?php

// ADD MAIN CSS FILE AND MAIN JS FILE
function custom_scripts()
{
    wp_enqueue_style('main_css', get_template_directory_uri() . '/assets/styles/main.css', array(), '1.0', false);
    wp_enqueue_script('main_js', get_template_directory_uri() . '/assets/scripts/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'custom_scripts');

// ADD FONTAWESOME

function add_fontawesome()
{
    wp_enqueue_script('fontawesome', 'https://kit.fontawesome.com/cade268c30.js"');
}
add_action('wp_enqueue_scripts', 'add_fontawesome');

// ADD GOOGLE FONTS
function google_fonts()
{
    wp_register_style('Oswald', '//fonts.googleapis.com/css?family=Oswald&display=swap');
    wp_enqueue_style('Oswald');
    wp_register_style('Open Sans', '//fonts.googleapis.com/css?family=Open+Sans&display=swap');
    wp_enqueue_style('Open Sans');
}
add_action('wp_print_styles', 'google_fonts');

// LOAD DASHICONS

function load_dashicons()
{
    wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'load_dashicons');

//  MENUS

function register_menus()
{
    register_nav_menus(
        array(
            'header-menu' => __('Header Menu'),
            'social-menu' => __('Social Menu'),
        )
    );
}
add_action('init', 'register_menus');

// CUSTOM BACKGROUNDS

add_theme_support('custom-background', array(
    'wp-head-callback' => 'custom_background_cb',
));

function custom_background_cb()
{
    ob_start();

    _custom_background_cb(); // Default handler

    $style = ob_get_clean();
    $style = str_replace('body.custom-background', '#custom-background-image', $style);

    echo $style;
}

add_theme_support('title-tag');

// CUSTOM LOGO

function custom_logo_setup()
{
    $defaults = array(
        'height' => 100,
        'width' => 400,
        'flex-height' => true,
        'flex-width' => true,
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'custom_logo_setup');

// REMOVE ADMIN BAR

add_filter('show_admin_bar', '__return_false');

// CUSTOM COLOR PALETTE

function custom_colors()
{
    add_theme_support('editor-color-palette', array(
        array(
            'name' => __('Czarny', 'themeLangDomain'),
            'slug' => 'black',
            'color' => '#000',
        ),
        array(
            'name' => __('Ciemny Szary', 'themeLangDomain'),
            'slug' => 'dark-grey',
            'color' => '#3e403c',
        ),
        array(
            'name' => __('Zielony', 'themeLangDomain'),
            'slug' => 'green',
            'color' => '#88e725',
        ),
        array(
            'name' => __('Ciemniejszy zielony', 'themeLangDomain'),
            'slug' => 'darker-green',
            'color' => '#7bcf21',
        ),
        array(
            'name' => __('Szary', 'themeLangDomain'),
            'slug' => 'grey',
            'color' => '#f2f2f2',
        ),
    ));
}

add_action('after_setup_theme', 'custom_colors');
