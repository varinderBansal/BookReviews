/*
 * File: app/view/review/List.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.review.List', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.reviewlist',

    requires: [
        'MyApp.view.Header',
        'Ext.view.View',
        'Ext.XTemplate'
    ],

    border: false,
    layout: 'card',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'header',
                    html: 'Reviews',
                    itemId: 'header',
                    dock: 'top'
                }
            ],
            items: [
                {
                    xtype: 'dataview',
                    cls: 'review-list',
                    itemId: 'dataview',
                    tpl: [
                        '<tpl for=".">',
                        '<div class="review {[xindex === 1 ? "first-review" : ""]}">',
                        '<div class="title">{title} ({rating} stars)</div>',
                        '<div class="author">By <span>{author}</span> - {date}</div>',
                        '<div class="comment">{comment}</div>',
                        '</div>',
                        '</tpl>'
                    ],
                    autoScroll: true,
                    itemSelector: '.review',
                    store: 'Reviews'
                }
            ]
        });

        me.callParent(arguments);
    },

    bind: function(record, store) {
        store.loadData(record.getAssociatedData().reviews || []);
        this.child('#dataview').bindStore(store);
    }

});