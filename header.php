<!DOCTYPE html>
<html <?php language_attributes();?>>

<head>
  <meta charset="<?php bloginfo('charset');?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head()?>
</head>

<body <?php body_class(); ?>>

  <header class="header" id="header">
    <div class="header__container">
      <div class="header__logo-wrapper">
        <?php the_custom_logo()?>
      </div>
      <button class="header__menu-button" id="menu-button">
        <span class="header__menu-hamburger dashicons dashicons-menu-alt3"></span>
        <span class="header__menu-close dashicons dashicons-no"></span>
      </button>
      <div class="header__menu-wrapper">
        <?php wp_nav_menu(array('theme_location' => 'header-menu',
    'menu_class' => 'header-menu'));?>

        <?php wp_nav_menu(array(
    'theme_location' => 'social-menu',
    'menu_class' => 'social-menu'));?>

      </div>
    </div>
  </header>