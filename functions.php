<?php

/**
 * Declare thumbnail support
 */
add_theme_support( 'post-thumbnails' );

/**
 * Enqueue scripts and styles
 */
add_action( 'wp_enqueue_scripts', 'tb_enqueue_frontend' );
function tb_enqueue_frontend(){
	wp_enqueue_style( 'tb_fontello', get_stylesheet_directory_uri() . '/fonts/fontello/css/icons.css' );
	wp_enqueue_style( 'tb_styles', get_stylesheet_directory_uri() . '/css/style.css', false, '20140624' );
	wp_enqueue_script( 'tb_interaction', get_stylesheet_directory_uri() . '/js/interaction.js', false, '20140624', true );
}

/**
 * Add work sample post type
 */
add_action( 'init', 'tb_add_ws_posttype' );
function tb_add_ws_posttype(){

	$labels = array(
		'name'                => 'Work Samples',
		'singular_name'       => 'Work Sample',
		'menu_name'           => 'Work Samples',
		'parent_item_colon'   => 'Parent Work Sample:',
		'all_items'           => 'All Work Samples', 
		'view_item'           => 'View Work Sample', 
		'add_new_item'        => 'Add New Work Sample',
		'add_new'             => 'Add New', 
		'edit_item'           => 'Edit Work Sample', 
		'update_item'         => 'Update Work Sample', 
		'search_items'        => 'Search Work Samples', 
		'not_found'           => 'Not found', 
		'not_found_in_trash'  => 'Not found in Trash', 
	);

	$args = array(
		'description'         => 'A work sample',
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'revisions' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => true,
		'menu_position'       => 4,
		'menu_icon'           => 'dashicons-desktop',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'rewrite'             => false,
		'taxonomies'          => array( 'post_tag' ),
	);

	register_post_type( 'work_sample', $args );

}

/**
 * Remove wpautop filter, so that content comes out without <p> tags
 */
remove_filter( 'the_content', 'wpautop' );

/**
 * Clean up menu
 */
add_action( 'admin_menu', 'tb_clean_up_admin' );
function tb_clean_up_admin(){
	remove_menu_page( 'edit.php' );
	remove_menu_page( 'link-manager.php' );
	remove_menu_page( 'edit-comments.php' );
	remove_menu_page( 'edit.php?post_type=page' );
	remove_menu_page( 'users.php' );
}

/**
 * get_work_samples
 * 
 * Utility function to get list of work sample post objects
 */
function get_work_samples(){

	$work_samples = get_posts( array(
		'posts_per_page' => 100,
		'orderby' => 'menu_order',
		'order' => 'ASC',
		'post_type' => 'work_sample',
		'post_status' => 'publish',
	));

	return $work_samples;
}

/**
 * the_work_sample_tags
 *
 * Utility function to get tag list for work sample (minus the links)
 */
function the_work_sample_tags(){
	global $post;
	$tags = get_the_tags( $post->ID );
	$i = 0;
	foreach( $tags as $tag ) {
		echo $tag->name;
		$i++;
		if( $i < count( $tags ) ) {
			echo '&nbsp;&nbsp;/&nbsp;&nbsp;';
		}
	}
}

/**
 * Field definitions
 */
if(function_exists("register_field_group"))
{
	register_field_group(array (
		'id' => 'acf_work-samples',
		'title' => 'Work Samples',
		'fields' => array (
			array (
				'key' => 'field_53a911f52f3ae',
				'label' => 'Hyperlink',
				'name' => 'hyperlink',
				'type' => 'text',
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'none',
				'maxlength' => '',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'work_sample',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
}