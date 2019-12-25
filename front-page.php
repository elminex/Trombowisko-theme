<?php
get_header();
?>
<?php
if (have_posts()) {
    // Load posts loop.
    while (have_posts()) {
        the_post();?>
<div>
<!--  <div class="front__triangle"></div> -->
  <?php the_content();?>
</div>
<?php
}
}
wp_footer();?>
</body>

</html>