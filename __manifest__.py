# -*- coding: utf-8 -*-
{
    'name': "Econombud theme",
    'version': '1.0',
    'summary': 'Econombud custom starter theme',
    'description': """
Author: P.Ushakov 
tel: +38 067 644 48 04
====================
    """,
    'author': "P.Ushakov",
    'website': "",
    'category': 'Theme',
    #'depends': ['website', 'website_theme_install', 'theme_default', 'website_crm', 'website_animate', 'theme_common'],
    'depends': ['website', 'website_theme_install', 'theme_default', 'website_crm'],
    'demo': [ ],
    'data': [
        # loading images
        'data/page_common_img.xml',
        'data/page_components_img.xml',
        'data/page_franchise_img.xml',
        'data/page_home_img.xml',
        'data/page_hydro_img.xml',
        'data/page_machine_img.xml',
        'data/page_teplo_img.xml',
        # loading page layouts
        'data/page_home.xml',
        #'data/page_services.xml', #menu services
        'data/page_teplo.xml',
        'data/page_hydro.xml',
        'data/page_franchise.xml',
        'data/page_machine.xml',
        'data/page_components.xml',
        'data/page_contacts.xml',
        'data/page_denial-of-responsibility.xml',
        'data/page_privacy-policy.xml',
        'data/page_exchange-consent.xml',        
        # resources, templates, attachments scss, css, js
        'data/page_website_res.xml',
        'views/templates.xml',
        'views/assets.xml'        
    ],
    'images': ['static/description/main_page.jpg'],
    'license': 'OPL-1',
}
