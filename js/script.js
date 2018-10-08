function test (){
    console.log('app is alive');
}

/*   switch channel when channel is selected   */
function switchChannel (channelname, location) {
    console.log('Tuning into channel '+channelname);
    /* highlight channel button   */
    /*$('#'+channelname).css('color','#3F51B5');
    $('#'+channelname).css('border-left','4px solid #3F51B5'); */
    /* change Channel name in app-bar     */
    $('.Channelname').html(channelname);
    /* change location in app bar    */
    $('#place').html('by<a href="http://w3w.co/' + location +'" target="_blank"><strong> '+ location +'</strong></a>');
    /* unfill star in app bar   */
    $('#c-meta').html('<img src="http://ip.lfe.mw.tum.de/sections/star-o.png" alt="not starred"></img>');
}

/* fill star in app bar when empty star is click m */
function starFill ()  {
    $('#c-meta').html('<img src="http://ip.lfe.mw.tum.de/sections/star.png" alt="starred"></img>');
}

/* change highlight of tab buttons when selected  */
function selectTab (channel)   {
    /* remove button.selected class from all button*/
    $(document).ready(function(){
        $('button').click(function(){
            $('button').removeClass('selected');
        });
    });
    /* add selected class to selected channel   */
    $('button').click(function(){
        $('#'+channel).addClass('selected');
    });
    console.log('Changing to tab');
}

  /* show emojis box when clicked */
function showBox () {
    /* show box  */
    /*$('button').click(function(){
        $('#emojis').show();
    }); */
    /* toggle on/off the emoji box   */
    $(document).ready(function(){
        $('button').click(function(){
            $('#emojis').toggle();
        });
    });
}

