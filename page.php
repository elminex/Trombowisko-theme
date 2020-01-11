<?php
get_header();
?>
<div class="content">
  <?php
$otherBlocks = array();
if (have_posts()) {
    $post = get_post();
    if (has_blocks($post->post_content)) {
        $blocks = parse_blocks($post->post_content);
        foreach ($blocks as $block) {
            if ($block['blockName'] === 'trombowisko/banner') {
                echo render_block($block);
            } else {
                array_push($otherBlocks, $block);
            }
        }
    }
} else {

}
?>
  <div class="page__container">
    <?php
foreach ($otherBlocks as $block) {
    if ($block['blockName'] !== 'core/shortcode') {
        echo render_block($block);
    }
    if ($block['blockName'] === 'core/shortcode') {
        echo do_shortcode($block['innerHTML']);
    }

}
?>
  </div>

</div>
<?php
get_footer();
?>