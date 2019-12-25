<?php 
  get_header();
?>
<h2>Trombowisko index.php</h2>
<?php
		if ( have_posts() ) {
      ?>
      <p>Są posty i je wyświetlam</p>
      <?php
			// Load posts loop.
			while ( have_posts() ) {
        the_post(); ?>
 
        <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
 
        <?php the_excerpt();
			}

		} else {
      ?>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae iste adipisci eius, natus quibusdam ut repellendus aspernatur porro incidunt voluptatibus architecto voluptates ipsam recusandae eveniet expedita dicta laudantium dolore.</p>
      <?php

		}
		?>
<?php 
  get_footer();
  ?>