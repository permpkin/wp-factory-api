const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),
  
  object_type: Joi.array().items(Joi.string()),
  labels: Joi.object().keys({
    name: Joi.string(),
    singular_name: Joi.string(),
    menu_name: Joi.string(),
    name_admin_bar: Joi.string(),
  }),
  description: Joi.string(),
  public: Joi.boolean(),
  publicly_queryable: Joi.boolean(),
  hierarchical: Joi.boolean(),
  show_ui: Joi.boolean(),
  show_in_menu: Joi.boolean(),
  show_in_nav_menus: Joi.boolean(),
  show_in_rest: Joi.boolean(),
  rest_base: Joi.string(),
  rest_controller_class: Joi.string(),
  show_tagcloud: Joi.boolean(),
  show_in_quick_edit: Joi.boolean(),
  show_admin_column: Joi.boolean(),
  meta_box_cb: Joi.string(),
  meta_box_sanitize_cb: Joi.string(),
  capabilities: Joi.object().keys({
    manage_terms: Joi.string(),
    edit_terms: Joi.string(),
    delete_terms: Joi.string(),
    assign_terms: Joi.string()
  }),
  rewrite: Joi.alternatives(
    Joi.boolean(),
    Joi.object().keys({
      slug: Joi.string(),
      with_front: Joi.boolean(),
      hierarchical: Joi.boolean(),
      ep_mask: Joi.string(),
    })
  ),
  query_var: Joi.string(),
  update_count_callback: Joi.string(),
  default_term: Joi.alternatives(
    Joi.string(),
    Joi.object().keys({
      name: Joi.string(),
      slug: Joi.string(),
      description: Joi.string()
    })
  ),
  sort: Joi.boolean(),
  args: Joi.array().items(Joi.string())

})

const SchemaDoc = {
  label: "Taxonomies",
  documentation: 'https://developer.wordpress.org/reference/functions/register_taxonomy/',
  supportsTemplates: false,
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(string) (Required) Taxonomy key, must not exceed 32 characters.`,
      type: 'text',
      required: true,
      placeholder: 'my-custom-taxonomy'
    },
    object_type: {
      // group: 'Relation',
      label: 'Object Type',
      description: `(array) (Required) Array of object types with which the taxonomy should be associated.`,
      type: 'string[]',
      required: true
    },
    labels: {
      // group: 'Labels',
      label: 'Labels',
      description: `(array) An array of labels for this taxonomy. By default, Tag labels are used for non-hierarchical taxonomies, and Category labels are used for hierarchical taxonomies. See accepted values in get_taxonomy_labels().`,
      type: 'keys',
      keys: {
        name: { type: 'text', placeholder: 'Taxonomies' },
        singular_name: { type: 'text', placeholder: 'Taxonomy' },
        menu_name: { type: 'text', placeholder: 'Taxonomy' },
        all_items: { type: 'text', placeholder: 'All Items' },
        parent_item: { type: 'text', placeholder: 'Parent Item' },
        parent_item_colon: { type: 'text', placeholder: 'Parent Item:' },
        new_item_name: { type: 'text', placeholder: 'New Item Name' },
        add_new_item: { type: 'text', placeholder: 'Add New Item' },
        edit_item: { type: 'text', placeholder: 'Edit Item' },
        update_item: { type: 'text', placeholder: 'Update Item' },
        view_item: { type: 'text', placeholder: 'View Item' },
        separate_items_with_commas: { type: 'text', placeholder: 'Separate items with commas' }, 
        add_or_remove_items: { type: 'text', placeholder: 'Add or remove items' },
        choose_from_most_used: { type: 'text', placeholder: 'Choose from the most used' },
        popular_items: { type: 'text', placeholder: 'Popular Items' },
        search_items: { type: 'text', placeholder: 'Search Items' },
        not_found: { type: 'text', placeholder: 'Not Found' },
        no_terms: { type: 'text', placeholder: 'No items' },
        items_list: { type: 'text', placeholder: 'Items list' },
        items_list_navigation: { type: 'text', placeholder: 'Items list navigation' }
      },
    },
    description: {
      // group: 'Labels',
      label: 'Description',
      description: `(string) A short descriptive summary of what the taxonomy is for.`,
      type: 'textarea',
      placeholder: 'My descriptive summary...',
      default: ''
    },
    public: {
      label: 'Public',
      description: `(bool) Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users. The default settings of $publicly_queryable, $show_ui, and $show_in_nav_menus are inherited from $public.`,
      type: 'boolean',
      default: true
    },
    publicly_queryable: {
      label: 'Publicly Queryable',
      description: `(bool) Whether the taxonomy is publicly queryable. If not set, the default is inherited from $public`,
      type: 'boolean',
      default: true
    },
    hierarchical: {
      label: 'Hierarchical',
      description: `(bool) Whether the taxonomy is hierarchical. Default false.`,
      type: 'boolean',
      default: false
    },
    show_ui: {
      label: 'Show UI',
      description: `(bool) Whether to generate and allow a UI for managing terms in this taxonomy in the admin. If not set, the default is inherited from $public (default true).`,
      type: 'boolean',
      default: true
    },
    show_in_menu: {
      label: 'Show in Menu',
      description: `(bool) Whether to show the taxonomy in the admin menu. If true, the taxonomy is shown as a submenu of the object type menu. If false, no menu is shown. $show_ui must be true. If not set, default is inherited from $show_ui (default true).`,
      type: 'boolean',
      default: true
    },
    show_in_nav_menus: {
      label: 'Show in Nav Menus',
      description: `(bool) Makes this taxonomy available for selection in navigation menus. If not set, the default is inherited from $public (default true).`,
      type: 'boolean',
      default: true
    },
    show_in_rest: {
      label: 'Show in REST',
      description: `(bool) Whether to include the taxonomy in the REST API. Set this to true for the taxonomy to be available in the block editor.`,
      type: 'boolean',
      default: true
    },
    rest_base: {
      label: 'REST Base Url',
      description: `(string) To change the base url of REST API route. Default is $taxonomy.`,
      type: 'text',
      default: '',
      placeholder: 'my-custom-taxonomy'
    },
    rest_controller_class: {
      label: 'REST Controller Class',
      description: `(string) REST API Controller class name. Default is 'WP_REST_Terms_Controller'.`,
      type: 'text',
      placeholder: 'SomeClass',
      default: ''
    },
    show_tagcloud: {
      label: 'Show Tag Cloud',
      description: `(bool) Whether to list the taxonomy in the Tag Cloud Widget controls. If not set, the default is inherited from $show_ui (default true).`,
      type: 'boolean',
      default: true
    },
    show_in_quick_edit: {
      label: 'Show in quick edit',
      description: `(bool) Whether to show the taxonomy in the quick/bulk edit panel. It not set, the default is inherited from $show_ui (default true).`,
      type: 'boolean',
      default: true
    },
    show_admin_column: {
      label: 'Show in quick edit',
      description: `(bool) Whether to display a column for the taxonomy on its post type listing screens. Default false.`,
      type: 'boolean',
      default: false
    },
    meta_box_cb: {
      label: "Metabox Callback",
      description: `(callable) Provide a callback function for the meta box display. If not set, post_categories_meta_box() is used for hierarchical taxonomies, and post_tags_meta_box() is used for non-hierarchical. If false, no meta box is shown.`,
      type: 'text',
      default: '',
      placeholder: 'my_function'
    },
    meta_box_sanitize_cb: {
      label: "Metabox Sanitize Callback",
      description: `(callable) Callback function for sanitizing taxonomy data saved from a meta box. If no callback is defined, an appropriate one is determined based on the value of $meta_box_cb.`,
      type: 'text',
      default: '',
      placeholder: 'my_function'
    },
    capabilities: {
      label: 'Capabilities',
      description: `(array) Array of capabilities for this taxonomy.`,
      type: 'keys',
      keys: {
        'manage_terms': { type: 'text', placeholder: 'manage_categories' },
        'edit_terms': { type: 'text', placeholder: 'manage_categories' },
        'delete_terms': { type: 'text', placeholder: 'manage_categories' },
        'assign_terms': { type: 'text', placeholder: 'edit_posts' },
      }
    },
    rewrite: {
      label: 'Rewrite',
      description: `(bool|array) Triggers the handling of rewrites for this taxonomy. Default true, using $taxonomy as slug. To prevent rewrite, set to false. To specify rewrite rules, an array can be passed with any of these keys:`,
      type: 'keys',
      keys: {
        'slug': { type: 'text', placeholder: 'slug' },
        'with_front': { type: 'boolean', placeholder: true },
        'hierarchical': { type: 'boolean', placeholder: true },
        'ep_mask': { type: 'text', placeholder: 'EP_NONE' }
      }
    },
    query_var: {
      label: 'Query Vars',
      description: `(string|bool) Sets the query var key for this taxonomy. Default $taxonomy key. If false, a taxonomy cannot be loaded at ?{query_var}={term_slug}. If a string, the query ?{query_var}={term_slug} will be valid.`,
      type: 'text',
      default: ''
    },
    update_count_callback: {
      label: "Update Count Callback",
      description: `(callable) Works much like a hook, in that it will be called when the count is updated. Default _update_post_term_count() for taxonomies attached to post types, which confirms that the objects are published before counting them. Default _update_generic_term_count() for taxonomies attached to other object types, such as users.`,
      type: 'text',
      placeholder: 'my_function'
    },
    default_term: {
      label: 'Default Term',
      description: `(string|array) Default term to be used for the taxonomy.`,
      type: 'keys',
      keys: {
        'name': { type: 'text', placeholder: 'Name' },
        'slug': { type: 'text', placeholder: 'Slug' },
        'description': { type: 'text', placeholder: 'Description' }
      }
    }
    // default_term: Joi.alternatives(
    //   Joi.string(),
    //   Joi.object().keys({
    //     name: Joi.string(),
    //     slug: Joi.string(),
    //     description: Joi.string()
    //   })
    // ),
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Description", key: "description" },
      { label: "Public", key: "public", type: "boolean" },
      { label: "Hierarchical", key: "hierarchical", type: "boolean" }
    ]
  }
}

module.exports = { Schema, SchemaDoc }