    <footer class="footer">
      <div class="footer__social">
        <span class="footer__text">Śledź nas na:</span>
        <?php wp_nav_menu(array('theme_location' => 'footer-menu',
    'menu_class' => 'footer-menu'));?>
      </div>
      <div class="footer__copyright">Copyright: </div>
    </footer>
    <?php wp_footer();?>
    </body>

</html>