$(document).ready(function(){
    //Resizer for video
    $(function() {
        var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='https://www.youtube.com'], object, embed"),
            $fluidEl = $(".video");
        $allVideos.each(function() {
            $(this)
                // jQuery .data does not work on object/embed elements
                .attr('data-aspectRatio', this.height / this.width)
                .removeAttr('height')
                .removeAttr('width');
        });
        $(window).resize(function() {
            $allVideos.each(function(i) {
                var newWidth = $(this).parent().width();
                var $el = $(this);
                $el
                    .width(newWidth)
                    .height(newWidth * $el.attr('data-aspectRatio'));
            });
        }).resize();
    });
})
