TradeView = Backbone.View
        .extend({
            tagName : 'div',
            initialize : function(accountid) {
                this.template = _.template(tpl.get('trade'));
                this.accountid = accountid;
            },

            render : function(eventName) {
                //var accountid = 30;  //FIX_ME!  Needs to come from the app level
                $(this.el).html(this.template());
                $('#quote', this.el).append(new FullQuoteView(this.accountid).render().el);
                
                $('#recent-orders', this.el).append(new OrderListView(this.accountid).el);
                return this;
            }
});