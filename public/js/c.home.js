class controller {

    data = {};
    controls = {};

    constructor(data)
    {
        this.data = data;
        this.build();
    }


    build()
    {
        for (const [key, value] of Object.entries(this.data.controls)) {
            if (typeof value.options.onChange === 'string') {
                value.options.onChange = eval(value.options.onChange);
            }
            this.controls[key] = eval("new " + value.type + "(value.options)"); 
        }
    }

    query()
    {
        alert('hallo');
    }
}
