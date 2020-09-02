$(function() {
    $('form').submit(function(event) {
        event.preventDefault()
        const form = $(this)
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            success: function(obj) {
                const el = $('<li>')
                if ($('#projets-list').length) {
                    el
                        .append($('<a>').attr('href', `/project/${obj.id}/tasks`).text(`${obj.title} `))
                        .append($('<a>').attr('href', `/project/${obj.id}/tasks`).attr('class', 'delete').text('X'))
                } else {
                    el
                        .append($('<span>').text(obj.title + ' '))
                        .append($('<a>').attr('href', `/task/${obj.id}`).attr('class', 'delete').text('X'))
                }
            }
        })
        form.find('input').val('')
    })

    $('ul').delegate('a.delete', 'click', function(event) {
        event.preventDefault()
        const li = $(this).closest('li')
        $.ajax({
            url: $(this).attr('href'),
            type: `DELETE`,
            success: function() {
                li.remove()
            }
        })
    })
})