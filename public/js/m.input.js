class mInput {

    defaults = {
        elementId: '',
        readonly: false,
        visible: true,
        required: false,
        disabled: false,
        type: 'text',
        class: '',
        tooltip: '',
        value: '',
        onChange: null,
    };

    settings = {};

    containerElement;

    constructor(options)
    {
        // merge options and defaults to settings
        this.settings = Object.assign({}, this.defaults, options);

        this.containerElement = document.getElementById(this.settings.elementId);

        // build the control
        this.build();
    }

    build()
    {
        let e = document.createElement('input');

        if (this.settings.readonly === true) {
            e.readOnly = 'readonly';
        }

        if (this.settings.disabled === true) {
            e.disabled = 'disabled';
        }

        if (this.settings.required === true) {
            e.required = 'required';
        }

        if (this.settings.class) {
            e.setAttribute('class', this.settings.class);
        }

        if (this.settings.type) {
            e.setAttribute('type', this.settings.type);
        }

        if (this.settings.tooltip) {
            e.setAttribute('title', this.settings.tooltip);
        }

        if (this.settings.value) {
            e.value = this.settings.value;
        }

        if (this.settings.onChange !== null) {
            e.addEventListener('change', this.settings.onChange);
        }

        this.containerElement.append(e);
    }

    update(data)
    {
        this.settings = Object.assign({}, this.settings, data);
        this.destroy();
        this.build();
    }

    destroy()
    {
        // remove events
        this.containerElement.replaceWith(this.containerElement.cloneNode(true));

        // clear container
        this.containerElement.innerHTML = '';
    }
}
