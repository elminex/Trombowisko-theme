<?php
get_header();
?>
<div class="content">
  <div class="page__banner" id="custom-background-image"></div>
  <?php
if (have_posts()) {
      // Load posts loop.
      while (have_posts()) {
          the_post();?>
  <div class="page__container">
    <?php
    the_content();?>
  </div>
  <?php
  }
} else {
    ?>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae iste adipisci eius, natus quibusdam
    ut
    repellendus aspernatur porro incidunt voluptatibus architecto voluptates ipsam recusandae eveniet expedita dicta
    laudantium dolore.</p>
  <?php
}
?>
</div>
<?php
get_footer();
?>