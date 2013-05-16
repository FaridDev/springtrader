Ext.define('SpringTrader.view.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',
    requires: ['SpringTrader.view.UserFields'],
    config: {
        title: 'Sign up',
        height: '100%',
        items: [
            { xtype: 'userfields' },
            { xtype: 'container',
                layout: { type: 'hbox', align: 'center', pack: 'center' },
                items: [
                    { xtype: 'button', ui: 'cancel', text: 'Cancel', itemId: 'cancelButton', margin: '0 10 0 10' },
                    { xtype: 'button', ui: 'confirm', text: 'Sign up', itemId: 'signupSubmitButton', margin: '0 10 0 10' }
                ]
            }
        ]
    }
});