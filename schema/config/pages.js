const Joi = require('joi');
const { GetKey } = require('../meta')

const Schema = Joi.object().keys({
  
  key: Joi.string().default((parent, helpers)=>{return GetKey()}),

  type: Joi.string().valid('option', 'comments', 'menu', 'settings', 'pages', 'themes', 'links', 'users', 'management', 'media'),
  page_title: Joi.string(),
  type: Joi.string().required(),
  description: Joi.string(),
  menu_title: Joi.string(),
  capability: Joi.array().items(Joi.string()),
  menu_slug: Joi.string(),
  function: Joi.string(),
  icon_url: Joi.string(),
  position: Joi.number(),
  "@styles": Joi.array().items(require('./styles').Schema),
  "@scripts": Joi.array().items(require('./scripts').Schema),


  // SETTINGS TYPESET
  // title: Joi.string(),
  // priority: Joi.number(),
  // capability: Joi.string(),
  // description: Joi.string(),
  // settings: Joi.array().items(Joi.object({
  //   label: Joi.string(),
  //   default: Joi.string(),
  //   type: Joi.string(),
  //   capability: Joi.string(),
  //   transport: Joi.string(),
  //   input_type: Joi.string(),
  //   priority: Joi.number()
  // }))

})

const SchemaDoc = {
  label: "Pages",
  documentation: 'https://developer.wordpress.org/reference/functions/add_menu_page/',
  supportsTemplates: false,
  schema: {
    key: {
      // group: 'Labels',
      label: 'Key',
      description: `(string) Unique identifier for internal purposes.`,
      type: 'text',
      required: true
    },
    page_title: {
      // group: 'Labels',
      label: 'Page Title',
      description: `(string) (Required) The text to be displayed in the title tags of the page when the menu is selected.`,
      type: 'text',
      required: true,
      placeholder: 'My Page Title'
    },
    type: {
      // group: 'Labels',
      label: 'Page Type',
      description: `(string) (Required) What type of page this should be registered as.`,
      type: 'select',
      options: [
        'option',
        'comments',
        'menu',
        'settings',
        'pages',
        'themes',
        'links',
        'users',
        'management',
        'media'
      ],
      required: true
    },
    description: {
      label: 'Description',
      description: `(string) A short descriptive summary of what the page is for.`,
      type: 'textarea',
      placeholder: 'My descriptive summary...',
      default: ''
    },
    menu_title: {
      // group: 'Labels',
      label: 'Menu Title',
      description: `(string) (Required) The text to be used for the menu.`,
      type: 'text',
      required: true,
      placeholder: 'My Custom Page'
    },
    capability: {
      // group: 'Labels',
      label: 'Capability',
      description: `(string) (Required) The capability required for this menu to be displayed to the user.`,
      type: 'string[]',
      required: true
    },
    menu_slug: {
      // group: 'Labels',
      label: 'Menu Slug',
      description: `(string) (Required) The slug name to refer to this menu by. Should be unique for this menu page and only include lowercase alphanumeric, dashes, and underscores characters to be compatible with sanitize_key().`,
      type: 'text',
      required: true,
      placeholder: 'my-custom-page'
    },
    function: {
      // group: 'Labels',
      label: 'Function',
      description: `(callable) (Optional) The function to be called to output the content for this page.`,
      type: 'text',
      required: true,
      placeholder: 'my_function'
    },
    icon_url: {
      // group: 'Labels',
      label: 'Icon Url',
      description: `(string) (Optional) The URL to the icon to be used for this menu.`,
      type: 'text',
      required: true,
      placeholder: 'dashicon-*'
    },
    position: {
      // group: 'Labels',
      label: 'Position',
      description: `(int) (Optional) The position in the menu order this item should appear.`,
      type: 'text',
      required: true,
      placeholder: '0'
    },
    "@styles": {
      label: 'Styles',
      description: `(array) An array of styles`,
      type: 'repeater',
      repeater: 'styles',
      required: true,
      columns: [
        { label: "Key", key: "key", type: "key" },
        { label: "Source", key: "source" }
      ],
    },
    "@scripts": {
      label: 'Scripts',
      description: `(array) An array of scripts`,
      type: 'repeater',
      repeater: 'scripts',
      required: true,
      columns: [
        { label: "Key", key: "key", type: "key" },
        { label: "Source", key: "source" }
      ],
    }
  },
  table: {
    columns: [
      { label: "Key", key: "key", type: "key" },
      { label: "Title", key: "page_title" },
      { label: "Type", key: "type" },
      { label: "Description", key: "description" }
    ]
  }
}

module.exports = { Schema, SchemaDoc }