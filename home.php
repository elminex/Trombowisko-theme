<?php
get_header();
?>
<div class="content">
  <div class="home__container" id="custom-background-image">
    <div class="home__triangle">
      <div class="home__title-wrapper">
        <span>home.php</span>
        <h1 class="home__title"><?php bloginfo('description')?></h1>
        <a class="home__button" href='<?php the_permalink(7)?>'>
          Więcej o nas
          <span class="dashicons dashicons-arrow-right-alt2"></span>
        </a>
      </div>
    </div>
  </div>
</div>
<?php wp_footer(); ?>