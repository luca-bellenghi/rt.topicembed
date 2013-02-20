(function($) {
    var code;
    var js_url;
    js_url = window.location.href.replace('topic_embed', 'embed.js');
    code = '&lt;script&gt;\n' +
           '    (function() {\n' +
           '        var s = document.createElement(\'script\');\n' +
           '        s.src = \'' + js_url + '\';\n' +
           '        s.async = true;\n' +
           '        window.topic_options = (window.topic_options || []).concat([ { element_id: \'embeded_id\', elements_length: %ELEMENTS%, embed_css: %CSS%, new_window: %NEW_WINDOW% }]);\n' +
           '        document.body.appendChild(s);\n' +
           '    }());\n' +
           '&lt;/script&gt;'

    function render(result){
        elements_length = $('#number_of_items').val();
        if (elements_length === undefined || elements_length == ''){
            elements_length = 5;
        }
        embed_css = $('#include_css').is(':checked')
        if (embed_css === undefined){
            embed_css = true;
        }
        new_window = $('#new_window_open').is(':checked')
        if (new_window === undefined){
            new_window = true;
        }
        result = result.replace('%ELEMENTS%', elements_length);
        result = result.replace('%CSS%', embed_css);
        result = result.replace('%NEW_WINDOW%', new_window);
        $('#embedcode').html(result);
    }
    render(code);
    $('#embedcode').click(function(){
        this.select();
    })
    $('#number_of_items').keyup(function(){
        render(code);
    })
    $('#new_window_open').click(function(){
        render(code);
    });
    $('#include_css').click(function(){
        render(code);
    });
})(jQuery);