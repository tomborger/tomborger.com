<!doctype html>
<html>
	<head>

	  <meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	  <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">

		<meta name="description" content="Responsive, friendly, inventive, and unassuming. That's my code.">
	  <meta property="og:description" content="Responsive, friendly, inventive, and unassuming. That's my code.">

	  <title>Tom Borger | Dynamicable Front-End Web Developer</title>

		<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:300|Oswald:400,300' rel='stylesheet' type='text/css'>		

	  <!--[if lt IE 9]>
	    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js"></script>
	    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
	  <![endif]-->

	  <?php wp_head(); ?>

	</head>
	<body>

		<header class='site-header'>

			<a class='site-nav-toggle'></a>

			<h1 class='site-title'><a href='http://www.tomborger.com'>Tom Borger<span class='site-title-extended'>&nbsp;&nbsp;|&nbsp;&nbsp;Front-End Web Developer</span></a></h1>

			<nav class='site-nav'>
				<h2 class='site-nav-item active-nav-item site-nav-item-about' data-target='about'>About</h2>
				<h2 class='site-nav-item site-nav-item-work' data-target='work'>Work</h2>
			</nav>

		</header>

		<main>

			<section id='about'>

				<p class='about-animation'>
			    <span class='anim dyn'>dyn</span><!--
			 --><span class='anim amic'>amic</span><!--
			 --><span class='anim able'>able</span>
				</p>

				<p class='about-slogan'>Responsive, friendly, inventive, and unassuming. <span class='getit'>That's&nbsp;my&nbsp;code.</span></p>

				<ul class='about-contact'>
					<li><a class='linkedin' href='https://www.linkedin.com/in/tborger' target='_blank'>LinkedIn</a></li>
					<li><a class='github' href='https://github.com/tomborger' target='_blank'>GitHub</a></li>
				</ul>

			</section>

			<section id='work' class='scrollable'>

				<ul class='work-samples'>

				<?php
				$work_samples = tb_get_work_samples();
				foreach( $work_samples as $post ){
					setup_postdata( $post );
					?>

					<li class='work-sample'>
						<figure class='work-sample-illustration'>
							<?php the_post_thumbnail( 'full', array( 'class' => 'work-sample-image' ) ); ?>
							<figcaption class='work-sample-content'>
								<span class='work-sample-label'><?php echo tb_the_work_sample_tags(); ?></span>
								<h3 class='work-sample-title'><?php the_title(); ?></h3>
								<p class='work-sample-description'>
									<?php echo nl2br( get_the_content() ); ?>
								</p>
								<menu class='work-sample-menu'>
									<a class='work-sample-menu-close'>Close</a>
									<a class='work-sample-menu-visit' href='<?php the_field('hyperlink'); ?>' target='_blank'>Visit</a>
								</menu>
							</figcaption>
						</figure>
					</li>

				<?php } ?>

				</ul>

			</section>

			<a class='back-button'>Back</a>

		</main>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.0/fastclick.min.js"></script>

		<?php wp_footer(); ?>

		<script type='text/javascript'>
		$(function() {
	    FastClick.attach(document.body);
		});
		</script>

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-51996817-1', 'tomborger.com');
		  ga('send', 'pageview');
		</script>

	</body>
</html>